import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getStripe } from "./stripe";
import * as db from "./db";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // ============ LEADS ============
  leads: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(2),
          businessEmail: z.string().email(),
          businessName: z.string().optional(),
          currentProblem: z.string().optional(),
          mainGoal: z.string().optional(),
          city: z.string().optional(),
          state: z.string().optional(),
          websiteUrl: z.string().url().optional(),
          businessCategory: z.string().optional(),
          timeline: z.string().optional(),
          budgetConfirmed: z.boolean().optional(),
          source: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const lead = await db.createLead(input as any);
          return {
            success: true,
            leadId: lead.id,
          };
        } catch (error: any) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: `Failed to create lead: ${error.message}`,
          });
        }
      }),

    list: protectedProcedure
      .input(
        z.object({
          limit: z.number().default(50),
          offset: z.number().default(0),
        })
      )
      .query(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: 'UNAUTHORIZED' });
        }
        return await db.getAllLeads(input.limit, input.offset);
      }),
  }),

  // ============ STRIPE PAYMENTS ============
  stripe: router({
    createCheckout: publicProcedure
      .input(
        z.object({
          type: z.enum(["deposit", "alternative", "final", "maintenance"]),
          businessEmail: z.string().email(),
          businessName: z.string().optional(),
          proposalId: z.string().optional(),
          projectId: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const stripe = getStripe();
        if (!stripe) {
          throw new TRPCError({
            code: 'SERVICE_UNAVAILABLE',
            message: 'Stripe is not configured on the server.',
          });
        }

        try {
          const { type, businessEmail, businessName, proposalId, projectId } = input;

          let amount = 0;
          let description = "";

          switch (type) {
            case "deposit":
              amount = 500000; // $5,000 in cents
              description = "DILGS - Initial Deposit (50%)";
              break;
            case "alternative":
              amount = 400000; // $4,000 in cents
              description = "DILGS - First Payment (Alternative Plan)";
              break;
            case "final":
              amount = 500000; // $5,000 in cents
              description = "DILGS - Final Payment (50%)";
              break;
            case "maintenance":
              amount = 75000; // $750 in cents (monthly)
              description = "DILGS - Monthly Growth Care Plan";
              break;
          }

          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
              {
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: "DILGS - Premium Gastronomy Digital System",
                    description,
                  },
                  unit_amount: amount,
                },
                quantity: 1,
              },
            ],
            mode: type === "maintenance" ? "subscription" : "payment",
            success_url: `${process.env.VITE_FRONTEND_URL || "http://localhost:3000"}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.VITE_FRONTEND_URL || "http://localhost:3000"}/payment-cancelled`,
            customer_email: businessEmail,
            metadata: {
              type,
              businessName: businessName || "Unknown",
              businessEmail,
              proposalId: proposalId || "",
              projectId: projectId || "",
            },
          });

          return {
            sessionId: session.id,
            url: session.url,
          };
        } catch (error: any) {
          console.error("Stripe error:", error);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: `Failed to create checkout session: ${error.message}`,
          });
        }
      }),

    getSession: publicProcedure
      .input(z.object({ sessionId: z.string() }))
      .query(async ({ input }) => {
        const stripe = getStripe();
        if (!stripe) throw new TRPCError({ code: 'SERVICE_UNAVAILABLE' });

        try {
          const session = await stripe.checkout.sessions.retrieve(input.sessionId);
          return {
            id: session.id,
            paymentStatus: session.payment_status,
            customerEmail: session.customer_email,
            amountTotal: session.amount_total,
            metadata: session.metadata,
          };
        } catch (error: any) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: `Failed to retrieve session: ${error.message}`,
          });
        }
      }),
  }),

  // ============ PROJECTS & PAYMENTS (Protected) ============
  projects: router({
    list: protectedProcedure
      .input(
        z.object({
          limit: z.number().default(50),
          offset: z.number().default(0),
        })
      )
      .query(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new TRPCError({ code: 'UNAUTHORIZED' });
        }
        return await db.getAllProjects(input.limit, input.offset);
      }),

    listByClient: protectedProcedure
      .input(z.object({ clientId: z.string() }))
      .query(async ({ input, ctx }) => {
        // Check if user is admin or the client itself
        // Simplified for now
        return await db.getProjectsByClient(input.clientId);
      }),
  }),

  payments: router({
    listByClient: protectedProcedure
      .input(z.object({ clientId: z.string() }))
      .query(async ({ input }) => {
        return await db.getPaymentsByClient(input.clientId);
      }),
  }),
});

export type AppRouter = typeof appRouter;

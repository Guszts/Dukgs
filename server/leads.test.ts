import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;
type AdminUser = AuthenticatedUser & { role: "admin" };

function createAdminContext(): { ctx: TrpcContext; clearedCookies: any[] } {
  const clearedCookies: any[] = [];

  const user: AdminUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: (name: string, options: Record<string, unknown>) => {
        clearedCookies.push({ name, options });
      },
    } as TrpcContext["res"],
  };

  return { ctx, clearedCookies };
}

describe("leads", () => {
  it("creates a new lead", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    const result = await caller.leads.create({
      name: "João Silva",
      email: "joao@example.com",
      phone: "(11) 99999-9999",
      company: "Empresa XYZ",
      message: "Gostaria de um novo website para minha empresa.",
      projectType: "website",
      budget: "10k-25k",
    });

    expect(result).toBeDefined();
  });

  it("lists leads as admin", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.list({ limit: 50, offset: 0 });

    expect(Array.isArray(result)).toBe(true);
  });

  it("prevents non-admin from listing leads", async () => {
    const user: AuthenticatedUser = {
      id: 2,
      openId: "regular-user",
      email: "user@example.com",
      name: "Regular User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    };

    const ctx: TrpcContext = {
      user,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    };

    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.list({ limit: 50, offset: 0 });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Unauthorized");
    }
  });

  it("validates email format", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    try {
      await caller.leads.create({
        name: "João Silva",
        email: "invalid-email",
        message: "Test message",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("email");
    }
  });

  it("validates required fields", async () => {
    const caller = appRouter.createCaller({
      user: null,
      req: { protocol: "https", headers: {} } as any,
      res: {} as any,
    });

    try {
      await caller.leads.create({
        name: "",
        email: "test@example.com",
        message: "Test",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("name");
    }
  });
});

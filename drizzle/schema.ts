import { pgTable, serial, text, varchar, timestamp, pgEnum, boolean, integer, decimal, jsonb, date } from "drizzle-orm/pg-core";

// ============ ENUMS ============
export const roleEnum = pgEnum("role", ["user", "admin"]);
export const leadStatusEnum = pgEnum("lead_status", ["new", "reviewed", "qualified", "proposal_sent", "deposit_pending", "deposit_paid", "rejected", "archived"]);
export const auditStatusEnum = pgEnum("audit_status", ["pending", "in_review", "completed", "sent"]);
export const proposalStatusEnum = pgEnum("proposal_status", ["draft", "sent", "viewed", "deposit_pending", "accepted", "declined", "expired"]);
export const clientStatusEnum = pgEnum("client_status", ["active", "onboarding_pending", "project_active", "maintenance_active", "inactive"]);
export const projectStatusEnum = pgEnum("project_status", ["waiting_on_onboarding", "strategy", "design", "build", "review", "final_payment_pending", "launch_ready", "launched", "completed", "paused", "cancelled"]);
export const paymentStatusEnum = pgEnum("payment_status", ["pending", "paid", "failed", "expired", "refunded"]);
export const subscriptionStatusEnum = pgEnum("subscription_status", ["active", "trialing", "past_due", "canceled"]);

// ============ USERS (for auth) ============
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  openId: varchar("open_id", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("login_method", { length: 64 }),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  lastSignedIn: timestamp("last_signed_in").defaultNow().notNull(),
});

// ============ DILGS TABLES ============
export const leads = pgTable("leads", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  name: text("name").notNull(),
  businessName: text("business_name"),
  businessEmail: varchar("business_email", { length: 320 }).notNull(),
  websiteUrl: text("website_url"),
  businessCategory: varchar("business_category", { length: 100 }),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  currentProblem: text("current_problem"),
  mainGoal: text("main_goal"),
  needsReservations: boolean("needs_reservations").default(false),
  needsOrders: boolean("needs_orders").default(false),
  needsCateringInquiries: boolean("needs_catering_inquiries").default(false),
  timeline: varchar("timeline", { length: 100 }),
  budgetConfirmed: boolean("budget_confirmed").default(false),
  source: varchar("source", { length: 100 }),
  status: leadStatusEnum("status").default("new"),
});

export const auditRequests = pgTable("audit_requests", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  leadId: varchar("lead_id", { length: 36 }).notNull(),
  websiteUrl: text("website_url"),
  auditNotes: text("audit_notes"),
  auditScore: integer("audit_score"),
  biggestGaps: jsonb("biggest_gaps"),
  recommendedSolution: text("recommended_solution"),
  status: auditStatusEnum("status").default("pending"),
});

export const proposals = pgTable("proposals", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  leadId: varchar("lead_id", { length: 36 }).notNull(),
  proposalCode: varchar("proposal_code", { length: 50 }).unique(),
  packageName: varchar("package_name", { length: 100 }),
  implementationPrice: decimal("implementation_price", { precision: 10, scale: 2 }),
  paymentStructure: varchar("payment_structure", { length: 50 }),
  depositAmount: decimal("deposit_amount", { precision: 10, scale: 2 }),
  finalAmount: decimal("final_amount", { precision: 10, scale: 2 }),
  alternativePaymentEnabled: boolean("alternative_payment_enabled").default(false),
  maintenanceRecommendedPlan: varchar("maintenance_recommended_plan", { length: 100 }),
  proposalStatus: proposalStatusEnum("proposal_status").default("draft"),
  expiresAt: timestamp("expires_at"),
  privateToken: varchar("private_token", { length: 255 }),
});

export const clients = pgTable("clients", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  leadId: varchar("lead_id", { length: 36 }),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  name: text("name"),
  businessName: text("business_name"),
  businessEmail: varchar("business_email", { length: 320 }),
  websiteUrl: text("website_url"),
  businessCategory: varchar("business_category", { length: 100 }),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  status: clientStatusEnum("status").default("active"),
});

export const projects = pgTable("projects", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  clientId: varchar("client_id", { length: 36 }).notNull(),
  proposalId: varchar("proposal_id", { length: 36 }),
  projectName: text("project_name"),
  packageName: varchar("package_name", { length: 100 }),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }),
  depositPaid: boolean("deposit_paid").default(false),
  finalPaid: boolean("final_paid").default(false),
  projectStatus: projectStatusEnum("project_status").default("waiting_on_onboarding"),
  startDate: date("start_date"),
  targetLaunchDate: date("target_launch_date"),
  launchedAt: timestamp("launched_at"),
});

export const payments = pgTable("payments", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  leadId: varchar("lead_id", { length: 36 }),
  clientId: varchar("client_id", { length: 36 }),
  projectId: varchar("project_id", { length: 36 }),
  proposalId: varchar("proposal_id", { length: 36 }),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  stripeSessionId: varchar("stripe_session_id", { length: 255 }),
  stripePaymentIntentId: varchar("stripe_payment_intent_id", { length: 255 }),
  stripeInvoiceId: varchar("stripe_invoice_id", { length: 255 }),
  stripeSubscriptionId: varchar("stripe_subscription_id", { length: 255 }),
  amount: decimal("amount", { precision: 10, scale: 2 }),
  currency: varchar("currency", { length: 10 }).default("usd"),
  paymentType: varchar("payment_type", { length: 50 }),
  paymentStatus: paymentStatusEnum("payment_status").default("pending"),
  rawEvent: jsonb("raw_event"),
});

export const maintenanceSubscriptions = pgTable("maintenance_subscriptions", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  clientId: varchar("client_id", { length: 36 }).notNull(),
  projectId: varchar("project_id", { length: 36 }),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  stripeSubscriptionId: varchar("stripe_subscription_id", { length: 255 }),
  planName: varchar("plan_name", { length: 100 }),
  monthlyPrice: decimal("monthly_price", { precision: 10, scale: 2 }),
  subscriptionStatus: subscriptionStatusEnum("subscription_status").default("active"),
  currentPeriodStart: timestamp("current_period_start"),
  currentPeriodEnd: timestamp("current_period_end"),
  cancelAtPeriodEnd: boolean("cancel_at_period_end").default(false),
});

// ============ TYPES ============
export type User = typeof users.$inferSelect;
export type Lead = typeof leads.$inferSelect;
export type AuditRequest = typeof auditRequests.$inferSelect;
export type Proposal = typeof proposals.$inferSelect;
export type Client = typeof clients.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Payment = typeof payments.$inferSelect;
export type MaintenanceSubscription = typeof maintenanceSubscriptions.$inferSelect;

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
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

// ============ DILGS TABLES ============
export const leads = pgTable("leads", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  name: text("name").notNull(),
  businessName: text("businessName"),
  businessEmail: varchar("businessEmail", { length: 320 }).notNull(),
  websiteUrl: text("websiteUrl"),
  businessCategory: varchar("businessCategory", { length: 100 }),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  currentProblem: text("currentProblem"),
  mainGoal: text("mainGoal"),
  needsReservations: boolean("needsReservations").default(false),
  needsOrders: boolean("needsOrders").default(false),
  needsCateringInquiries: boolean("needsCateringInquiries").default(false),
  timeline: varchar("timeline", { length: 100 }),
  budgetConfirmed: boolean("budgetConfirmed").default(false),
  source: varchar("source", { length: 100 }),
  status: leadStatusEnum("status").default("new"),
});

export const auditRequests = pgTable("auditRequests", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  leadId: varchar("leadId", { length: 36 }).notNull(),
  websiteUrl: text("websiteUrl"),
  auditNotes: text("auditNotes"),
  auditScore: integer("auditScore"),
  biggestGaps: jsonb("biggestGaps"),
  recommendedSolution: text("recommendedSolution"),
  status: auditStatusEnum("status").default("pending"),
});

export const proposals = pgTable("proposals", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  leadId: varchar("leadId", { length: 36 }).notNull(),
  proposalCode: varchar("proposalCode", { length: 50 }).unique(),
  packageName: varchar("packageName", { length: 100 }),
  implementationPrice: decimal("implementationPrice", { precision: 10, scale: 2 }),
  paymentStructure: varchar("paymentStructure", { length: 50 }),
  depositAmount: decimal("depositAmount", { precision: 10, scale: 2 }),
  finalAmount: decimal("finalAmount", { precision: 10, scale: 2 }),
  alternativePaymentEnabled: boolean("alternativePaymentEnabled").default(false),
  maintenanceRecommendedPlan: varchar("maintenanceRecommendedPlan", { length: 100 }),
  proposalStatus: proposalStatusEnum("proposalStatus").default("draft"),
  expiresAt: timestamp("expiresAt"),
  privateToken: varchar("privateToken", { length: 255 }),
});

export const clients = pgTable("clients", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  leadId: varchar("leadId", { length: 36 }),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  name: text("name"),
  businessName: text("businessName"),
  businessEmail: varchar("businessEmail", { length: 320 }),
  websiteUrl: text("websiteUrl"),
  businessCategory: varchar("businessCategory", { length: 100 }),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  status: clientStatusEnum("status").default("active"),
});

export const projects = pgTable("projects", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  clientId: varchar("clientId", { length: 36 }).notNull(),
  proposalId: varchar("proposalId", { length: 36 }),
  projectName: text("projectName"),
  packageName: varchar("packageName", { length: 100 }),
  totalPrice: decimal("totalPrice", { precision: 10, scale: 2 }),
  depositPaid: boolean("depositPaid").default(false),
  finalPaid: boolean("finalPaid").default(false),
  projectStatus: projectStatusEnum("projectStatus").default("waiting_on_onboarding"),
  startDate: date("startDate"),
  targetLaunchDate: date("targetLaunchDate"),
  launchedAt: timestamp("launchedAt"),
});

export const payments = pgTable("payments", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  leadId: varchar("leadId", { length: 36 }),
  clientId: varchar("clientId", { length: 36 }),
  projectId: varchar("projectId", { length: 36 }),
  proposalId: varchar("proposalId", { length: 36 }),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  stripeSessionId: varchar("stripeSessionId", { length: 255 }),
  stripePaymentIntentId: varchar("stripePaymentIntentId", { length: 255 }),
  stripeInvoiceId: varchar("stripeInvoiceId", { length: 255 }),
  stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 255 }),
  amount: decimal("amount", { precision: 10, scale: 2 }),
  currency: varchar("currency", { length: 10 }).default("usd"),
  paymentType: varchar("paymentType", { length: 50 }),
  paymentStatus: paymentStatusEnum("paymentStatus").default("pending"),
  rawEvent: jsonb("rawEvent"),
});

export const maintenanceSubscriptions = pgTable("maintenanceSubscriptions", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  clientId: varchar("clientId", { length: 36 }).notNull(),
  projectId: varchar("projectId", { length: 36 }),
  stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
  stripeSubscriptionId: varchar("stripeSubscriptionId", { length: 255 }),
  planName: varchar("planName", { length: 100 }),
  monthlyPrice: decimal("monthlyPrice", { precision: 10, scale: 2 }),
  subscriptionStatus: subscriptionStatusEnum("subscriptionStatus").default("active"),
  currentPeriodStart: timestamp("currentPeriodStart"),
  currentPeriodEnd: timestamp("currentPeriodEnd"),
  cancelAtPeriodEnd: boolean("cancelAtPeriodEnd").default(false),
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

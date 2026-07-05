import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { randomUUID } from "crypto";
import { 
  users, 
  leads, 
  projects, 
  payments, 
  proposals, 
  clients, 
  maintenanceSubscriptions,
  type User,
  type Lead,
  type Project,
  type Payment,
  type Proposal,
  type Client
} from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      const client = postgres(process.env.DATABASE_URL);
      _db = drizzle(client);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// User queries (for auth)
export async function upsertUser(user: Partial<User> & { openId: string }) {
  const db = await getDb();
  if (!db) return user;

  try {
    const existing = await db.select().from(users).where(eq(users.openId, user.openId)).limit(1);
    
    if (existing.length > 0) {
      await db.update(users)
        .set({ 
          ...user, 
          lastSignedIn: new Date(),
          updatedAt: new Date() 
        })
        .where(eq(users.openId, user.openId));
      return { ...existing[0], ...user };
    } else {
      const newUser = {
        ...user,
        role: user.role || 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
        lastSignedIn: new Date()
      } as any;
      
      await db.insert(users).values(newUser);
      return newUser;
    }
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    return user;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return null;
  
  try {
    const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to get user by openId:", error);
    return null;
  }
}

// Lead queries
export async function createLead(data: Omit<Lead, "id" | "createdAt" | "updatedAt">) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create lead: database not available");
    return { id: randomUUID(), ...data };
  }
  
  try {
    const id = randomUUID();
    const newLead = {
      id,
      ...data,
      status: data.status || 'new',
      createdAt: new Date(),
      updatedAt: new Date()
    } as any;
    
    await db.insert(leads).values(newLead);
    return newLead;
  } catch (error) {
    console.error("[Database] Failed to create lead:", error);
    throw error;
  }
}

export async function getAllLeads(limit: number = 50, offset: number = 0) {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db.select().from(leads).limit(limit).offset(offset).orderBy(desc(leads.createdAt));
  } catch (error) {
    console.error("[Database] Failed to get leads:", error);
    throw error;
  }
}

// Project queries
export async function getAllProjects(limit: number = 50, offset: number = 0) {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db.select().from(projects).limit(limit).offset(offset).orderBy(desc(projects.createdAt));
  } catch (error) {
    console.error("[Database] Failed to get projects:", error);
    throw error;
  }
}

export async function getProjectsByClient(clientId: string) {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db.select().from(projects).where(eq(projects.clientId, clientId)).orderBy(desc(projects.createdAt));
  } catch (error) {
    console.error("[Database] Failed to get projects by client:", error);
    throw error;
  }
}

// Payment queries
export async function getPaymentsByClient(clientId: string) {
  const db = await getDb();
  if (!db) return [];

  try {
    return await db.select().from(payments).where(eq(payments.clientId, clientId)).orderBy(desc(payments.createdAt));
  } catch (error) {
    console.error("[Database] Failed to get payments by client:", error);
    throw error;
  }
}

// Proposal queries
export async function getProposalById(id: string) {
  const db = await getDb();
  if (!db) return null;
  
  try {
    const result = await db.select().from(proposals).where(eq(proposals.id, id)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to get proposal:", error);
    return null;
  }
}

// Client queries
export async function getClientById(id: string) {
  const db = await getDb();
  if (!db) return null;
  
  try {
    const result = await db.select().from(clients).where(eq(clients.id, id)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to get client:", error);
    return null;
  }
}

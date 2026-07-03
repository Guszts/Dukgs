import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// User queries (for auth)
export async function upsertUser(user: any) {
  // TODO: Implement user upsert
  return user;
}

export async function getUserByOpenId(openId: string) {
  // TODO: Implement get user by openId
  return null;
}

// Lead queries
export async function createLead(data: any) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create lead: database not available");
    return null;
  }
  
  try {
    // TODO: Insert into leads table
    return { id: "temp-id", ...data };
  } catch (error) {
    console.error("[Database] Failed to create lead:", error);
    throw error;
  }
}

export async function getAllLeads(limit: number, offset: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get leads: database not available");
    return [];
  }

  try {
    // TODO: Query leads table
    return [];
  } catch (error) {
    console.error("[Database] Failed to get leads:", error);
    throw error;
  }
}

// Project queries
export async function getAllProjects(limit: number, offset: number) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get projects: database not available");
    return [];
  }

  try {
    // TODO: Query projects table
    return [];
  } catch (error) {
    console.error("[Database] Failed to get projects:", error);
    throw error;
  }
}

export async function getProjectsByClient(clientId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get projects: database not available");
    return [];
  }

  try {
    // TODO: Query projects by client
    return [];
  } catch (error) {
    console.error("[Database] Failed to get projects:", error);
    throw error;
  }
}

// Payment queries
export async function getPaymentsByClient(clientId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get payments: database not available");
    return [];
  }

  try {
    // TODO: Query payments by client
    return [];
  } catch (error) {
    console.error("[Database] Failed to get payments:", error);
    throw error;
  }
}

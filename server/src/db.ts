import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// Ensure environment is loaded before Prisma initializes
dotenv.config();
if (!process.env.DATABASE_URL) {
  // Default to local SQLite if not provided
  process.env.DATABASE_URL = "file:./dev.db";
}

export const prisma = new PrismaClient();



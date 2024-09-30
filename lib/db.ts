/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();
// use `prisma` in your application to read and write data in your DB

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

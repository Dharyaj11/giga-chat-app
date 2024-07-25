import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;

};

//in development there could be hot reload and there would be too many prisma client this portions saves and prevent top many prisma client  
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db
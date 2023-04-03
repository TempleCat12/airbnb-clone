import { PrismaClient } from "@prisma/client";

declare global {
    // use var to let variant prisma used by out of block
    var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
//@ts-nocheck
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
});

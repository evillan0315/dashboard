import bcrypt from "bcrypt";

import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

import NextAuth, { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { NextApiRequest, NextApiResponse } from "next";

export const providersMap = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
  GithubProvider({
    clientId: process.env.GITHUB_CLIENT_ID as string,
    clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
  }),
  CredentialsProvider({
    name: "credentials",
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      if (!credentials?.email || !credentials?.password) {
        throw new Error("Invalid credentials");
      }
      const hashedPassword = await bcrypt.hash(credentials?.password, 12);
      const user = await prisma.user.findUnique({
        where: {
          email: credentials.email,
        },
      });

      if (!user) {
        throw new Error("Invalid credentials");
      }
      const isCorrectPassword = await bcrypt.compare(
        credentials.password,
        hashedPassword
      );
      if (!isCorrectPassword) {
        throw new Error("Invalid credentials");
      }
      return user;
    },
  }),
];

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: providersMap,
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/sign-in",
  },
};
export default NextAuth({
  ...authOptions,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ baseUrl, url }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      console.log(session, token);
      console.log(user, "user session callback");
      return session; // The return type will match the one returned in `useSession()`
    },
    jwt({ token, user, account, profile, isNewUser }) {
      return token; // The return type will match the one returned in `useSession()`
    },
  },
});

/* export const providerMap = providers.map((provider) => {
	if (typeof provider === 'function') {
	  const providerData = provider();
	  return { id: providerData.id, name: providerData.name };
	}
	return { id: provider.id, name: provider.name };
  });
  
  export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: providerMap,
	secret: process.env.AUTH_SECRET,
	pages: {
	  signIn: '/auth/signin',
	},
	callbacks: {
	  authorized({ auth: session, request: { nextUrl } }) {
		const isLoggedIn = !!session?.user;
		const isPublicPage = nextUrl.pathname.startsWith('/public');
  
		if (isPublicPage || isLoggedIn) {
		  return true;
		}
  
		return false; // Redirect unauthenticated users to login page
	  },
	},
  }); */

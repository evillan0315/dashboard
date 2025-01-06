import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import Twitter from 'next-auth/providers/twitter';
import Linkedin from 'next-auth/providers/linkedin';
import type { Provider } from 'next-auth/providers';
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from './lib/prisma';

const providers: Provider[] = [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
  Github({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
  Twitter({
    clientId: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
  }),
  Linkedin({
    clientId: process.env.LINKEDIN_CLIENT_ID,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  }),
  /* Facebook({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  }), */
];

if (!process.env.GOOGLE_CLIENT_ID) {
  console.warn('Missing environment variable "GOOGLE_CLIENT_ID"');
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
  console.warn('Missing environment variable "GOOGLE_CLIENT_SECRET"');
}
if (!process.env.GITHUB_CLIENT_ID) {
  console.warn('Missing environment variable "GITHUB_CLIENT_ID"');
}
if (!process.env.GITHUB_CLIENT_SECRET) {
  console.warn('Missing environment variable "GITHUB_CLIENT_SECRET"');
}
if (!process.env.TWITTER_CLIENT_ID) {
  console.warn('Missing environment variable "TWITTER_CLIENT_ID"');
}
if (!process.env.TWITTER_CLIENT_SECRET) {
  console.warn('Missing environment variable "TWITTER_CLIENT_SECRET"');
}
if (!process.env.FACEBOOK_CLIENT_ID) {
  console.warn('Missing environment variable "FACEBOOK_CLIENT_ID"');
}
if (!process.env.FACEBOOK_CLIENT_SECRET) {
  console.warn('Missing environment variable "FACEBOOK_CLIENT_SECRET"');
}
if (!process.env.LINKEDIN_CLIENT_ID) {
  console.warn('Missing environment variable "LINKEDIN_CLIENT_ID"');
}
if (!process.env.LINKEDIN_CLIENT_SECRET) {
  console.warn('Missing environment variable "LINKEDIN_CLIENT_SECRET"');
}


export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  }
  return { id: provider.id, name: provider.name };
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    async signIn(message) {
      console.log('signIn event:', message);
    },
    async signOut(message) {
      console.log('signOut event:', message);
    },
    async createUser(message) {
      console.log('createUser event:', message);
    },
    async updateUser(message) {
      console.log('updateUser event:', message);
    },
    async linkAccount(message) {
      console.log('linkAccount event:', message);
    },
    async session(message) {
      console.log('session event:', message);
    },
  },
  debug: true,
});
import NextAuth, { NextAuthConfig, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Twitter from "next-auth/providers/twitter";
import Linkedin from "next-auth/providers/linkedin";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";


import type { Provider } from 'next-auth/providers';
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
    authorization: {
      url: "https://www.linkedin.com/oauth/v2/authorization",
      params: {
        scope: "w_member_social", // Customize the scopes as needed,
        redirect_uri: 'http://localhost:3000/api/auth/callback/linkedin',
        client_id:process.env.LINKEDIN_CLIENT_ID,
        response_type: "code",
        state: "DCEeFWf45A53sdfKef424",
      },
    },
    profile: (profile) => {
      // You can map LinkedIn profile fields to your own user model
      return {
        id: profile.id,
        name: profile.localizedFirstName + " " + profile.localizedLastName,
        email: profile.emailAddress,
        image: profile.profilePicture['displayImage~']?.elements[0]?.identifiers[0]?.identifier,
      };
    },
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

export const authOptions: NextAuthConfig = {
  providers,
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ account, profile }) {
      console.log('Account:', account);
      console.log('Profile:', profile);
      return true;
    },
    async session({ session, user }) {
      console.log(session, 'session');
      session.user.id = user.id; // Extend session object
      return session;
    },
    async jwt({ token, account, profile }) {
      // Store profile information in the token
      if (account && profile) {
        token.id = profile.id;
        token.email = profile.email;
        token.image = profile.image;
      }
      return token;
    },
  },
  events: {
    async signIn(message: any) {
      console.log('signIn event:', message);
    },
    async signOut(message: any) {
      console.log('signOut event:', message);
    },
    async createUser(message: any) {
      console.log('createUser event:', message);
    },
    async updateUser(message: any) {
     console.log('updateUser event:', message);
    },
    async linkAccount(message: any) {
      console.log('linkAccount event:', message);
    },
    async session(message: any) {
      console.log('session event:', message);
    },
  },
  debug: false,
  logger: { debug: console.log, error: console.error, warn: console.warn },
};


export const providerMap = providers.map((provider) => {
  if (typeof provider === 'function') {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name, type: providerData.type };
  }
  return { id: provider.id, name: provider.name };
});

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
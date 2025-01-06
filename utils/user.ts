import { prisma } from "../lib/prisma";
import { User, UserWithAccount, UserWithPosts } from "../types/models";

// Fetch all users
export const getAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};
export const getUserById = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id },
    include: { accounts: true, posts: true },
  });
}
export const getUserByIdWithAccount = async (id: string): Promise<UserWithAccount | null> => {
  return await prisma.user.findUnique({
    where: { id },
    include: { accounts: true },
  });
};


// Fetch a user by ID with their posts
export const getUserByIdWithPosts = async (id: string): Promise<UserWithPosts | null> => {
  return await prisma.user.findUnique({
    where: { id },
    include: { posts: true },
  });
};
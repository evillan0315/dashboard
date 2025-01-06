import { User as UserType, Post as PostType, Account as AccountType} from '@prisma/client';

 export type User = {
    name: string | null;
    id: string;
    email: string;
    password?: string | null;
    emailVerified?: Date | null;
    image: string | null;
    account_creation_date: Date;
    country_of_residence?: string | null;
    phone_number?: string | null;
    address?: string | null;
    gender?: string | null;
}
export type Account = {
  id: number;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
}
export type Post = {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  authorId: string | null;
  author: UserType;
}
// Extend the User type for additional properties (optional)
export type UserWithPosts = UserType & {
  posts: PostType[];
};
// Extend the User type for additional properties (optional)
export type UserWithAccount = UserType & {
  accounts: AccountType[];
};
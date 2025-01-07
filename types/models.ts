export type User  = {
  id: string;
  name: string | null;
  email: string;
  image?: string | null;
  password?: string | null;
  emailVerified?: Date | null;
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
}


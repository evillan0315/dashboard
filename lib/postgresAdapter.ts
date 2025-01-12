import { Adapter } from "next-auth/adapters";
import prisma from "./prisma";

export const config = {
  runtime: 'nodejs',
};
/* const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // For NeonDB
  },
}); */
export const PostgresAdapter = (): Adapter => {
  return {
    async getUserByAccount({ providerAccountId, provider }: { providerAccountId: string; provider: string }) {
        try {
          console.log(providerAccountId);
          const account = await prisma.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: provider,
                providerAccountId: providerAccountId,
              },
            },
            include: {
              user: true,
            },
          });
      
          if (!account || !account.user) {
            throw new Error('User not found');
          }
      
          const user = account.user;
          
          // Ensure fields like country_of_residence, phone_number, address, gender are never null
          return {
            id: user.id,
            email: user.email,
            name: user.name || null,
            image: user.image || null,
            account_creation_date: user.account_creation_date,
            country_of_residence: user.country_of_residence ?? undefined, // Convert null to undefined
            phone_number: user.phone_number ?? undefined, // Convert null to undefined
            address: user.address ?? undefined, // Convert null to undefined
            gender: user.gender ?? undefined, // Convert null to undefined
            emailVerified: user.emailVerified || null, // Add emailVerified field
          };
      
        } catch (error) {
          console.error('Error in getUserByAccount:', error);
          throw new Error('Error fetching user by account');
        }
      },
    /* async createUser(user) {
      const { rows } = await pool.query(
        `INSERT INTO "User" (id, name, email, email_verified, image) 
         VALUES ($1, $2, $3, $4, $5) 
         RETURNING *`,
        [user.id, user.name, user.email, user.emailVerified, user.image]
      );
      return rows[0];
    },
    async getUser(id) {
      const { rows } = await pool.query(`SELECT * FROM "User" WHERE id = $1`, [
        id,
      ]);
      return rows[0] || null;
    },
    async getUserByEmail(email) {
      const { rows } = await pool.query(
        `SELECT * FROM "User" WHERE email = $1`,
        [email]
      );
      return rows[0] || null;
    },
    async getUserByAccount({ providerAccountId, provider }: { providerAccountId: string; provider: string }) {
      try {
        console.log(providerAccountId);
        const account = await prisma.account.findUnique({
          where: {
            provider_providerAccountId: {
              provider: provider,
              providerAccountId: providerAccountId,
            },
          },
          include: {
            user: true,
          },
        });
    
        if (!account || !account.user) {
          throw new Error('User not found');
        }
    
        const user = account.user;
        
        // Ensure fields like country_of_residence, phone_number, address, gender are never null
        return {
          id: user.id,
          email: user.email,
          name: user.name || null,
          image: user.image || null,
          account_creation_date: user.account_creation_date,
          country_of_residence: user.country_of_residence ?? undefined, // Convert null to undefined
          phone_number: user.phone_number ?? undefined, // Convert null to undefined
          address: user.address ?? undefined, // Convert null to undefined
          gender: user.gender ?? undefined, // Convert null to undefined
          emailVerified: user.emailVerified || null, // Add emailVerified field
        };
    
      } catch (error) {
        console.error('Error in getUserByAccount:', error);
        throw new Error('Error fetching user by account');
      }
    },
    async linkAccount(account) {
      await pool.query(
        `INSERT INTO "Account" (userId, provider, providerAccountId, refresh_token, access_token, expires_at, token_type, scope, id_token, session_state) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [
          account.userId,
          account.provider,
          account.providerAccountId,
          account.refresh_token,
          account.access_token,
          account.expires_at,
          account.token_type,
          account.scope,
          account.id_token,
          account.session_state,
        ]
      );
    },
    async updateSession(session: { sessionToken: string; userId: string; expires: Date }) {
      const { rows } = await pool.query(
        `UPDATE "Session" 
         SET session_token = $1, userId = $2, expires = $3 
         WHERE session_token = $1 
         RETURNING *`,
        [session.sessionToken, session.userId, session.expires]
      );
      return rows[0] || null;
    },
    
    async createSession(session: { sessionToken: string; userId: string; expires: Date }) {
      if (!session || !session.userId || !session.sessionToken || !session.expires) {
        throw new Error('Invalid session object: Missing required properties');
      }
    
      const { rows } = await pool.query(
        `INSERT INTO "Session" (userId, session_token, expires) 
         VALUES ($1, $2, $3) 
         RETURNING *`,
        [session.userId, session.sessionToken, session.expires]
      );
      return rows[0];
    },
    async getSessionAndUser(sessionToken) {
      console.log(sessionToken);
      const { rows } = await pool.query(
        `SELECT "Session".*, "User".* 
         FROM "Session" 
         JOIN "User" ON "Session".userId = "User".id 
         WHERE "Session".session_token = $1`,
        [sessionToken]
      );
      if (!rows[0]) return null;
      const { id, userId, ...session } = rows[0];
      const user = {
        id: userId,
        ...session,
      };
      return { session, user };
    },
    async deleteSession(sessionToken) {
      await pool.query(`DELETE FROM "Session" WHERE session_token = $1`, [
        sessionToken,
      ]);
    },
    async updateUser(user) {
      const { rows } = await pool.query(
        `UPDATE "User" SET name = $1, email = $2, image = $3 WHERE id = $4 RETURNING *`,
        [user.name, user.email, user.image, user.id]
      );
      return rows[0];
    },
    async deleteUser(userId) {
      await pool.query(`DELETE FROM "User" WHERE id = $1`, [userId]);
    },
    async unlinkAccount({ providerAccountId, provider }) {
      await pool.query(
        `DELETE FROM "Account" WHERE provider = $1 AND provider_account_id = $2`,
        [provider, providerAccountId]
      );
    }, */
  };
};
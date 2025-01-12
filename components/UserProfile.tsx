import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const UserProfile = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: "your@email.com", // Replace with actual email
    },
  });

  // ... use user data ...

  return <div>{/* ... render user profile ... */}</div>;
};

export default UserProfile;

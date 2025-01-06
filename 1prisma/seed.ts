// filepath: /home/eddie/projects/dashboard/prisma/seed.ts
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        country_of_residence: 'USA',
        phone_number: '1234567890',
        address: '123 Main St, Anytown, USA',
        gender: 'Male',
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        country_of_residence: 'Canada',
        phone_number: '0987654321',
        address: '456 Elm St, Othertown, Canada',
        gender: 'Female',
      },
      // Add more mock data as needed
    ],
  });
}

main()
  .then(() => {
    console.log('Mock data added successfully');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
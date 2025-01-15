import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const projects = await prisma.project.findMany({
      include: {
        frontend: true,
        backend: true,
        database: true,
        api: true,
        deployment: true,
      },
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  } finally {
    await prisma.$disconnect();
  }
}

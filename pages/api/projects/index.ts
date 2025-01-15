// pages/api/projects/index.ts

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

// Handler for fetching, creating, and editing projects
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  // Handle GET - Get all projects
  if (method === "GET") {
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
    }
  }

  // Handle POST - Insert a new project
  if (method === "POST") {
    const {
      name,
      startDate,
      endDate,
      description,
      url,
      //frontendId,
      //backendId,
      //databaseId,
      //apiId,
      //deploymentId,
    } = req.body;
    console.log(req.body);
    // Ensure required fields are provided
    if (!name || !startDate || !endDate || !description || !url) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const newProject = await prisma.project.create({
        data: {
          name,
          startDate,
          endDate,
          description,
          url,
          //frontendId,
          //backendId,
          //databaseId,
          //apiId,
          //deploymentId,
        },
      });
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).json({ error: "Failed to create project" });
    }
  }

  // Handle PUT - Update a specific project by id
  if (method === "PUT") {
    //const { id, ...res } = req.body;
    const {
      id,
      name,
      startDate,
      endDate,
      description,
      url,
      frontendId,
      backendId,
      databaseId,
      apiId,
      deploymentId,
    } = req.body;

    // Ensure required fields are provided
    if (!id || !name || !startDate || !endDate || !description || !url) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const updatedProject = await prisma.project.update({
        where: { id: Number(id) }, // Make sure `id` is a number
        data: {
          name,
          startDate,
          endDate,
          description,
          url,
          frontendId,
          backendId,
          databaseId,
          apiId,
          deploymentId,
        },
      });
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json({ error: "Failed to update project" });
    }
  } else {
    // Return method not allowed if other methods are used
    res.status(405).json({ error: `Method ${method} Not Allowed` });
  }

  // Disconnect the Prisma client after the request is processed
  await prisma.$disconnect();
}

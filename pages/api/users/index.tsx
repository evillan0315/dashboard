import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getAllUsers } from "../../../utils/user";
import { authOptions } from "../../../auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  options = authOptions
) {
  const session = await getSession();
  console.log(session);
  // If no session exists, return unauthorized error
  if (!session) {
    return res.status(401).json({ error: "Unauthorized. Please log in." });
  }

  if (req.method === "GET") {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

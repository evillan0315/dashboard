import { NextApiRequest, NextApiResponse } from "next";
import { getUserById } from "../../../utils/user";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession();
  if(!session){
    res.status(404).json({ error: "Please Login" });
  }
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const user = await getUserById(String(id));
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

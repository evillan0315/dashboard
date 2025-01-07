import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { getAllUsers } from "../../../utils/user";
import { authOptions } from "../../../auth";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  options = authOptions
) {
  const { code, state, redirect_uri } = req.body;
  if (req.method === "GET") {
    try {
      const users = await getAllUsers();
      console.log("Users:", users);
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  if (req.method === "POST") {
    try {
      const param = {
        grant_type: "authorization_code",
        code,
        redirect_uri,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
        state,
      };
      const response = await axios.post(
        "https://www.linkedin.com/oauth/v2/accessToken",
        null,
        {
          params: param,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      res.status(200).json(response.data.access_token);
    } catch (error: any) {
      console.error(
        "Error fetching access token:",
        error.response?.data || error.message
      );
      res.status(500).json({ error: "Failed to fetch access token" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

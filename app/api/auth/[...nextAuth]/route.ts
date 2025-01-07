import { NextRequest, NextResponse } from "next/server";
import { handlers } from "../../../../auth";
import { NextApiRequest, NextApiResponse } from "next";
export const { GET, POST  } = handlers;

/* export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log(res, req);
      const data = req.nextUrl.pathname === "/api/auth/callback/linkedin" ? { message: "Hello from LinkedIn" } : { message: "Hello from GET" };
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}; */


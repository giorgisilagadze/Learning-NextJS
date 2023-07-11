import { comments } from "@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function Comment(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(comments);
}

import { comments } from "@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function Comment(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comm;
    const newComment = {
      id: Date.now(),
      title: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}

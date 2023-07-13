import { comments } from "@/data/comments";
import { NextApiRequest, NextApiResponse } from "next";

export default function CommentId(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  const id = commentId as string;
  if (req.method === "GET") {
    const comment = comments.find((comment) => comment.id === parseInt(id));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(id)
    );

    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments.splice(index, 1);

    res.status(200).json(deletedComment);
  }
}

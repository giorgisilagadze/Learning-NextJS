import type { NextApiRequest, NextApiResponse } from "next";

export default function Games(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ game: "cle vs gsw", score: "120 : 90" });
}

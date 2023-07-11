import type { NextApiRequest, NextApiResponse } from "next";

export default function Cleveland(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "Cle", players: "Lebron James | Kyrie Irving" });
}

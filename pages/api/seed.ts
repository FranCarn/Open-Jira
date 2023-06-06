import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";
import { Entry } from "../../models";
import { seedData } from "../../database";

type Data = {
  massage: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res
      .status(401)
      .json({ massage: "User has no acces to this service" });
  }
  await db.connect();
  // Delete all Entries
  await Entry.deleteMany();
  // Insert data to fill DB
  await Entry.insertMany(seedData.entries);

  await db.disconnect();

  res.status(200).json({ massage: "Process succesfully" });
}

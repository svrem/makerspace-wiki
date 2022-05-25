import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { folder, file } = req.query;

  const buffer = fs.readFileSync(`./doc_files/${folder}/files/${file}`);

  res.setHeader("Content-disposition", `attachment; filename=${file}`);
  res.status(200).send(buffer);
};

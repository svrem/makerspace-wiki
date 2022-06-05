import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { folder, file } = req.query;

  const axios_res = await axios.get(
    `https://knowgistics.nl/serverSiep/download/${folder}/${file}`
  );

  res.setHeader("Content-disposition", `attachment; filename=${file}`);
  res.status(200).send(axios_res.data);
}

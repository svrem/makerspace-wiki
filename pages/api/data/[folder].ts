import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query;

  const axios_res = await axios
    .get(`https://knowgistics.nl/serverSiep/data/${folder}`)
    .catch(() => {
      return undefined;
    });
  if (!axios_res || axios_res.status !== 200) {
    res.status(404).send("Not found");
    return;
  }

  if (axios_res.data.length === 0) {
    res.status(404).send("Not found");
    return;
  }

  res.status(200).json(axios_res.data);
}

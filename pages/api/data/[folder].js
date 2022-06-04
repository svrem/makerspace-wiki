import fs from "fs";

export default (req, res) => {
  const { folder } = req.query;

  if (!fs.existsSync(`public/doc_files/${folder}/`)) {
    res.status(404).send("Not found");
  }

  const pageContent = fs.readFileSync(
    `public/doc_files/${folder}/index.md`,
    "utf8"
  );
  const files = fs.readdirSync(`public/doc_files/${folder}/files/`);

  res.status(200).json({ pageContent, files });
};

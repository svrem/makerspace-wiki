import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

type Props = {
  file: string;
  folder: string;
};

const DownloadButton = ({ file, folder }: Props) => {
  return (
    <IconButton
      aria-label={`Download Bestand: ${file}`}
      onClick={async () => {
        // const res = await axios.get(`/doc_files/${folder}/files/${file}`);
        // fileDownload(res.data, file);
        window.open(`/api/download/${folder}/${file}`);
      }}
      sx={{
        left: "85%",
        top: "-52px",
      }}
      color="inherit"
    >
      <Download
        sx={{
          fill: "white",
        }}
      />
    </IconButton>
  );
};

export default DownloadButton;

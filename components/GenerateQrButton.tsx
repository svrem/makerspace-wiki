import { IosShare } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

type Props = {
  setQrOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const GenerateQrButton = ({ setQrOpen }: Props) => {
  return (
    <IconButton
      aria-label="Genereer qr code "
      onClick={() => setQrOpen(true)}
      sx={{
        position: "absolute",
        bottom: "1%",
        left: "2.5%",
      }}
    >
      <IosShare
        sx={{
          fill: "white",
        }}
      />
    </IconButton>
  );
};

export default GenerateQrButton;

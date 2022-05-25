import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

type Props = {
  setOut: React.Dispatch<React.SetStateAction<boolean>>;
  out: boolean;
};

const OpenMenuButton = ({ setOut, out }: Props) => {
  return (
    <IconButton
      aria-label="Open Menu"
      sx={{
        position: "fixed",
        left: ".5%",
        top: ".5%",
        width: "50px",
        height: "50px",
        opacity: out ? 0 : 1,
        transition: "all 0.5s ease-in-out .1s",
        zIndex: 1,
      }}
      onClick={() => setOut(true)}
    >
      <Menu fontSize="large" />
    </IconButton>
  );
};

export default OpenMenuButton;

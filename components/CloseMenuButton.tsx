import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type Props = {
  setOut: React.Dispatch<React.SetStateAction<boolean>>;
};

const CloseMenuButton = ({ setOut }: Props) => {
  return (
    <IconButton
      aria-label="Sluit Menu"
      sx={{
        position: "absolute",
        right: "2%",
        top: ".5%",
      }}
      onClick={() => setOut(false)}
      color="inherit"
    >
      <Close
        sx={{
          fill: "white",
        }}
      />
    </IconButton>
  );
};

export default CloseMenuButton;

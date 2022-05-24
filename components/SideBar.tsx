import React from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <>
      <style jsx>{`
        .container {
          position: fixed;
          top: 0;
          left: 0;
          width: 300px;
          height: 99vh;
          background-color: #27a22e;
          border-radius: 25px;
          margin: 0.5vh;
        }
      `}</style>
      <div className="container">
        <IconButton color="inherit">
          <Close />
        </IconButton>
        <div className="files">
          <div className="file">
            <h2 className="file-name">Gerda</h2>
            <button>D</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

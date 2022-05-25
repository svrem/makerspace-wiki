import React from "react";
import FileTab from "./FileTab";
import CloseMenuButton from "./CloseMenuButton";
import OpenMenuButton from "./OpenMenuButton";
import GenerateQrButton from "./GenerateQrButton";

type Props = {
  files: string[];
  setQrOpen: React.Dispatch<React.SetStateAction<boolean>>;
  folder: string;
  out: boolean;
  setOut: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ files, setQrOpen, folder, out, setOut }: Props) => {
  return (
    <>
      <style jsx>{`
        .container {
          position: fixed;
          top: 0;
          left: 0;
          width: 300px;
          height: 99%;
          background-color: #27a22e;
          border-radius: 25px;
          margin: 0.5vh;
          z-index: 2;
          box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

          transition: all 0.5s ease-in-out;
        }
        .out {
          transform: translateX(-150%);
        }

        .files {
          width: 100%;
          height: 85%;
          overflow-y: auto;
          top: 7.5%;
          position: absolute;
          display: flex;
          flex-direction: column;
        }

        .files::-webkit-scrollbar {
          width: 5px;
          height: 8px;
        }

        .files::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.25);
          border-radius: 5px;
        }

        .files::-webkit-scrollbar-track {
          background-color: #27a22e;
        }

        img {
          height: 5%;
          position: absolute;
          bottom: 10px;
          right: 10px;
          cursor: pointer;
          user-select: none;
        }
      `}</style>

      <div className={`container ${out ? "" : "out"}`}>
        <CloseMenuButton setOut={setOut} />

        <div className="files">
          {files.map((file) => (
            <FileTab folder={folder} file={file} key={file} />
          ))}
        </div>

        <GenerateQrButton setQrOpen={setQrOpen} />
        <img
          src="/VLC_Logo.png"
          alt="Veenlanden College Logo"
          onClick={() =>
            (window.location.href = "https://www.veenlandencollege.nl/")
          }
        />
      </div>
    </>
  );
};

export default SideBar;

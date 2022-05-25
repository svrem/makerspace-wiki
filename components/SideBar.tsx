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
      `}</style>

      <div className={`container ${out ? "" : "out"}`}>
        <CloseMenuButton setOut={setOut} />

        <div className="files">
          {files.map((file) => (
            <FileTab folder={folder} file={file} key={file} />
          ))}
        </div>

        <GenerateQrButton setQrOpen={setQrOpen} />
      </div>
    </>
  );
};

export default SideBar;

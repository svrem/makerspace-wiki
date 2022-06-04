import React from "react";
import DownloadButton from "./DownloadButton";

type Props = {
  file: string;
  folder: string;
};

const FileTab = ({ file, folder }: Props) => {
  return (
    <>
      <style jsx>{`
        .file {
          background-color: rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          width: 90%;
          left: 5%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 2px;
          margin-bottom: 2px;
          left: 0;

          height: 50px;
        }

        .file > h2 {
          color: white;
          margin-top: 7.5px;
          margin-left: 7.5px;
        }
      `}</style>
      <div className="file">
        <h2 className="file-name">{file}</h2>
        <DownloadButton file={file} folder={folder} />
      </div>
    </>
  );
};

export default FileTab;

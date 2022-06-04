import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import SideBar from "../../components/SideBar";
import QrCode from "../../components/QrCode";
import OpenMenuButton from "../../components/OpenMenuButton";
import Logo from "../../components/Logo";

type Props = {
  pageContent: string;
  files: string[];
  folder: string;
};

const Page = ({ pageContent, files, folder }: Props) => {
  const [qrOpen, setQrOpen] = useState(false);
  const [url, setUrl] = useState("https://google.com");
  const [out, setOut] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setUrl(window.location.href);
      document.title = `${folder} - ${pageContent.split("\n")[0]}`;
    }
  });

  useEffect(() => {
    if (window.innerWidth > 600) {
      setOut(true);
    }
  }, [setUrl]);

  return (
    <div
      style={{
        overflowX: "hidden",
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <style>{`
        .md {
          left: ${out ? "350px" : "75px"};
          position: absolute;
          width: 60%;
          transition: all 0.5s ease-in-out;
        }
      `}</style>

      <Logo out={out} />
      <QrCode url={url} setQrOpen={setQrOpen} qrOpen={qrOpen} label={folder} />
      <SideBar
        files={files}
        setQrOpen={setQrOpen}
        folder={folder}
        out={out}
        setOut={setOut}
      />
      <OpenMenuButton setOut={setOut} out={out} />
      <ReactMarkdown className="md">{pageContent}</ReactMarkdown>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { page } = ctx.query;
  if (!fs.existsSync(`./public/doc_files/${page}`)) {
    return {
      notFound: true,
    };
  }

  const pageContent = fs.readFileSync(
    `./public/doc_files/${page}/index.md`,
    "utf8"
  );
  const files = fs.readdirSync(`./public/doc_files/${page}/files`);

  return {
    props: {
      pageContent,
      files,
      folder: page,
    },
  };
};

export default Page;

import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import SideBar from "../../components/SideBar";
import QrCode from "../../components/QrCode";
import OpenMenuButton from "../../components/OpenMenuButton";
import Logo from "../../components/Logo";
import DefaultErrorPage from "next/error";
import { useRouter } from "next/router";

type Props = {
  pageContent: string;
  files: string[];
  folder: string;
};

const Page = ({}: Props) => {
  const router = useRouter();

  const [qrOpen, setQrOpen] = useState(false);
  const [url, setUrl] = useState("https://google.com");
  const [out, setOut] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [pageContent, setPageContent] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [folder, setFolder] = useState("");

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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/data/${router.query.page}`).catch(() => {
        setNotFound(true);
        return undefined;
      });

      if (!res || !res.ok) {
        setNotFound(true);
        return new Error("Error fetching data");
      }

      const data = await res.json();
      setFiles(data.files);
      setPageContent(data.pageContent);
    };

    if (window !== undefined && router.query.page !== undefined) {
      fetchData().catch((err) => {
        console.log(err);
        setNotFound(true);
      });
    }
  }, [router.query.page]);

  if (notFound) {
    return <DefaultErrorPage statusCode={404} />;
  }

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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { page } = ctx.query;

//   const res = await axios.get(`https://knowgistics.nl/serverSiep/data/${page}`);

//   const { pageContent, files } = res.data;

//   return {
//     props: {
//       pageContent,
//       files,
//       folder: page,
//     },
//   };
// };

export default Page;

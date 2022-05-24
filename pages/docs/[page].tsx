import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import SideBar from "../../components/SideBar";

type Props = {
  pageContent: string;
};

const Page = ({ pageContent }: Props) => {
  return (
    <>
      <SideBar />
      {/* <ReactMarkdown children={pageContent} /> */}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { page } = ctx.query;
  const pageContent = fs.readFileSync(`doc_files/${page}/index.md`, "utf8");

  return {
    props: {
      pageContent,
    },
  };
};

export default Page;

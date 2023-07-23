import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';
import LoadingDots from "@/components/LoadingDots";
import ResizablePanel from "@/components/ResizablePanel";
import MetaTags from "@/components/MetaTags";
import { ReactNode } from "react";
import { PageMeta } from "../types";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import NavBar from '../components/NavBar';


interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

const DocsPage: NextPage<Props> = ({ children, meta: pageMeta }: Props) => {
  const [loading, setLoading] = useState(false);
  const [userQ, setUserQ] = useState("");
  const [answer, setAanswer] = useState<String>("");


  return (
    <>
      <MetaTags
        title="SwiftGPT"
        description="ChatGPT trained on recent Taylor Swift trivia"
        cardImage="/bot/docs-og.png"
        url=""
      />
      <NavBar/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-auto">


        <main className="flex flex-col items-center justify-center flex-1 w-full min-h-screen px-4 py-2 mx-auto mt-12 text-center sm:mt-20">
          <h1 className="max-w-xl text-2xl font-bold sm:text-4xl">
            Hi my name is Greta
          </h1>
          <p className="max-w-xl text-2xl sm:text-4xl">
          Something about me
          </p>
          <p className="max-w-xl text-2xl sm:text-4xl">
          more information
          </p>


          <div className="max-w-xl text-xs">
            <p><sup>*</sup>We are using gpt-3.5-turbo-0301 from OpenAI, trained up to September 2021:</p>
            </div>

        </main>
      </div>
    </>
  );
};

export default DocsPage;

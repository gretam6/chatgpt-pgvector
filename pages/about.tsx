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
            How I built this page
          </h1>
          <ul className="max-w-xl text-lg sm:text-lg">
          <li>Link to the <a href="https://github.com/gretam6/chatgpt-pgvector">repo</a></li>
          <li>This project is a fork of <a href="https://github.com/gannonh/chatgpt-pgvector">this</a> github project- </li>
          <li>Uses react and <a href="https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs">next.js</a></li>
          <li>Uses gpt-3.5-turbo-0301 and <a href="https://openai.com/blog/introducing-text-and-code-embeddings">embeddings api</a></li>
          <li>Uses supabase</li>
          <li>Uses vercel for CI/CD</li>
          </ul>




          <div className="max-w-xl text-xs">
            <p><sup>*</sup>We are using gpt-3.5-turbo-0301 from OpenAI, trained up to September 2021:</p>
            </div>

        </main>
      </div>
    </>
  );
};

export default DocsPage;

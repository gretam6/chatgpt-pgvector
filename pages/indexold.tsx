// pages/index.tsx

import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen antialiased text-center text-slate-50">
      <div className="flex flex-col items-center px-6 m-auto mx-auto max-w-7xl">
        <h1 className="max-w-lg text-xl font-extrabold">
          GRETA'S Chat GPT-3 Starter App
        </h1>
        <ul className="mt-10 mb-6 text-xs sm:text-sm text-slate-400">
          <li><Link href="/embeddings" >Create Embeddings with URLs</Link></li>
          <li><Link href="/embeddings2" >Create Embeddings by pasting</Link></li>
          <li><Link href="/docs" >Search</Link></li>

        </ul>
      </div>
    </div>
  );
};

export default HomePage;

"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min.js"; // Import JSX language support
// import prism dark theme highlighter
import "prismjs/themes/prism-tomorrow.css";

import CopyButton from "./CopyButton";

export default function Code({ code }) {
  const { theme } = useTheme();

  useEffect(() => {

    Prism.highlightAll();
  }, [theme]);

  return (
    <div className="w-[50em] h-[30em] relative">
      <CopyButton />
      <div className="w-[50em] z-[1] h-[30em] relative rounded-xl overflow-auto scrollbar-hide absolute">
        <pre className="language-jsx z-[1] !my-0 !bg-zinc-950 rounded-xl px-10">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

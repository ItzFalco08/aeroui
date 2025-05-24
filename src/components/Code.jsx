import { useEffect } from "react";
import { useTheme } from "next-themes";
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min.js"; // Import JSX language support
// import prism dark theme highlighter
import "prismjs/themes/prism-tomorrow.css";

import CopyButton from "./CopyButton";

export default function Code({ code, className }) {
  const { theme } = useTheme();

  useEffect(() => {
    Prism.highlightAll();
  }, [theme]);




  return (
    <div className={`w-full relative ${className}`}>
      <CopyButton code={code} />
        <pre className="language-jsx text-sm w-full h-fit max-h-[30em] overflow-auto !bg-zinc-950 scrollbar-hide rounded-md p-4">
          <code>{code}</code>
        </pre>
    </div>
  );
}

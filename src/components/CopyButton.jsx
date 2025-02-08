import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard, Check, Copy } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const CopyButton = ({code}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <TooltipProvider>
    <Tooltip className="absolute top-0 right-0" open={copied || undefined}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="h-8 w-8 text-zinc-500 hover:text-white mr-2 hover:bg-[#27272a] absolute top-0 right-0 !z-[100] m-4"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">{copied ? "Copied" : "Copy"} command</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left" className="bg-[#27272a] text-white" sideOffset={10}>
        <p>{copied ? "Copied!" : "Copy"}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  );
};

export default CopyButton;

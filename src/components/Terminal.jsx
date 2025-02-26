"use client"

import { useState, useEffect } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useInstaller } from "@/hooks/useInstaller"

export default function Terminal({ InstallerProp, library }) {
  const {Installer, setInstaller} = useInstaller()
  const [copied, setCopied] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const isNpx = (InstallerProp === "npx")

  // Set initial installer based on InstallerProp
  useEffect(() => {
    if (isNpx) {
      setInstaller("npx")
    } else {
      setInstaller("npm")
    }
  }, [isNpx, setInstaller])
  
  const managers = (isNpx) ? ["npx"] : ["npm", "pnpm", "yarn", "bun"]

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(mediaQuery.matches)

    const handler = () => setIsDarkMode(mediaQuery.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const copyToClipboard = async () => {
    let command =
    InstallerProp === "npx"
        ? `${InstallerProp} @aeroui/cli add ${library}`
        : `${Installer} install ${library}`

    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderHighlightedCommand = () => {
    const commandParts =
    isNpx
        ? [`${InstallerProp}`, "@aeroui/cli add", library]
        : [`${Installer}`, "install", library]

    return (
      <>
        <span className="text-zinc-500 mr-2">$</span>
        <span className="text-cyan-400">{commandParts[0]}</span>
        {commandParts.length > 2 && <span className="text-white"> {commandParts[1]} </span>}
        <span className="text-yellow-300">{commandParts[commandParts.length - 1]}</span>
      </>
    )
  }

  return (
    <div className="w-full max-w-2xl bg-zinc-900 rounded-lg overflow-hidden shadow-lg my-6">
      <div className="flex gap-4 p-2 border-b border-zinc-800">
        {managers.map((manager) => (
          <button
            key={manager}
            onClick={() => setInstaller(manager)}
            className={`text-sm ${
              (Installer === manager ) ? "text-white border-b-2 border-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {manager}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between bg-zinc-950">
        <div className="text-white font-mono text-sm py-4 px-4 flex-grow">{renderHighlightedCommand()}</div>
        <TooltipProvider>
          <Tooltip open={copied || undefined}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={copyToClipboard}
                className="h-8 w-8 text-zinc-500 hover:text-white mr-2 hover:bg-[#27272a]"
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
      </div>
    </div>
  )
}

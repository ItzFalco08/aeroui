"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { SelectedProvider } from "@/hooks/useSelected";
import { InstallerProvider } from "@/hooks/useInstaller";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <SelectedProvider>
        <InstallerProvider>
          {children}
        </InstallerProvider>
      </SelectedProvider>
    </ThemeProvider>
  );
}

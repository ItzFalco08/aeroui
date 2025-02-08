import { Poppins } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"

import { SelectedProvider } from "@/hooks/useSelected"
import { InstallerProvider } from "@/hooks/useInstaller";


export const metadata = {
  title: "Aero UI",
  description: "TailwindCSS Component library",
  icons: {
    icon: "/favicon.svg",
  },
};


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <link rel="icon" href="/favicon.svg" />
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <SelectedProvider>
            <InstallerProvider>
              {children}
            </InstallerProvider>
          </SelectedProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}

import { Poppins } from "next/font/google";

import "./globals.css";

import Providers from './Providers'

export const metadata = {
  title: "Aero UI - TailwindCSS Component Library",
  description: "Aero UI is a modern, lightweight, and customizable TailwindCSS component library designed to streamline your web development workflow.",
  keywords: "TailwindCSS, UI components, web design, frontend development, Aero UI",
  authors: [{ name: "Rupam Das", url: "https://www.linkedin.com/in/rupamdas07/" }],
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

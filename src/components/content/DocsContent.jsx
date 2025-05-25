"use client";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const components = {
  installation: React.lazy(() => import("@/components/docs/Installation")),
  darkmode: React.lazy(() => import("@/components/docs/DarkMode.mdx")),
  nextjs: React.lazy(() => import("@/components/docs/darkmode/nextjs.mdx")),
  vite: React.lazy(() => import("@/components/docs/darkmode/vite.mdx")),
  react: React.lazy(() => import("@/components/docs/darkmode/react.mdx")),
  aboutme: React.lazy(() => import("@/components/docs/About")),
  overview: React.lazy(() => import("@/components/docs/Overview")),
  hero: React.lazy(() => import("@/components/docs/Hero")),
  navbar: React.lazy(() => import("@/components/docs/Navbar")),
  button: React.lazy(() => import("@/components/docs/Button")),
  card: React.lazy(() => import("@/components/docs/Card.mdx")),
};

export default function DocsContent() {
  const { doc } = useParams();
  const Component = components[doc];

  return (
    <Suspense
      key={doc}
      fallback={
        <div className="flex justify-center items-center h-full w-full">
          <LoaderCircle className="w-6 h-6 animate-spin absolute" />
        </div>
      }
    >
      {Component ? React.createElement(Component) : <p>Page not found</p>}
    </Suspense>
  );
}

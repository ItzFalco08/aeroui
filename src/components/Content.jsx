"use client";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const components = {
  installation: React.lazy(() => import("@/components/docs/Installation")),
  aboutme: React.lazy(() => import("@/components/docs/About")),
  overview: React.lazy(() => import("@/components/docs/Overview")),
  hero: React.lazy(() => import("@/components/docs/Hero")),
  navbar: React.lazy(() => import("@/components/docs/Navbar")),
};

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useSelected } from '@/hooks/useSelected'

export default function Content() {
  const { doc } = useParams();
  console.log('current page', doc);

  const {Selected}  = useSelected()

  return (
    <div id="content" className="w-full px-20 py-4 overflow-auto">
      <Suspense key={doc} fallback={
        <div className="flex justify-center items-center h-full w-full">
          <LoaderCircle className="w-6 h-6 animate-spin absolute" />
        </div>
      }>
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>{Selected}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{doc}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {components[doc] && React.createElement(components[doc])}
      </Suspense>
    </div>
  );
}

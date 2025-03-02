"use client";
import { useSelected } from "@/hooks/useSelected";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadcrumbNav() {
  const { doc } = useParams();
  const { Selected } = useSelected();

  return (
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
  );
}

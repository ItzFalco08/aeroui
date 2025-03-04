import Breadcrumb from "./Breadcrumb";
import DocsContent from "./DocsContent";

export default function Content() {
  return (
    <div className="w-full h-screen !px-20 !py-20 scrollbar-hide overflow-auto">
      <Breadcrumb />
      <DocsContent />
    </div>
  );
}

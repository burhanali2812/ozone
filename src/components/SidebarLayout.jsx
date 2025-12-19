"use client";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function SidebarLayout({ children }) {
  const pathname = usePathname();


  const noSidebarRoutes = ["/", "/auth","/order"];
  const shouldShowSidebar = !noSidebarRoutes.includes(pathname);

  return (
    <>
      {shouldShowSidebar && <Sidebar />}
      <div
        className={`min-h-screen transition-all duration-300 ${
          shouldShowSidebar ? "lg:ml-64" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}

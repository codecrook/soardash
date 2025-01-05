"use client";

import { SidebarHeader } from "@/components/ui/sidebar";

export function MainNav() {
  return (
    <SidebarHeader className="flex h-16 items-center border-b border-gray-200 bg-white px-6 md:flex">
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">Soar Task</span>
      </div>
    </SidebarHeader>
  );
}

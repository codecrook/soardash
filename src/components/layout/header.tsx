"use client";

import { Bell, Menu, Settings, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-white px-6">
      <div className="flex items-center gap-2 md:hidden">
        <SidebarTrigger>
          <Menu className="h-6 w-6 text-gray-500" />
        </SidebarTrigger>
      </div>
      <div className="flex flex-1 items-center gap-4">
        <Input
          type="search"
          placeholder="Search for something"
          className="max-w-[360px] rounded-full border-gray-200 bg-gray-50/50"
        />
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/settings">
            <Settings className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </Link>
          <Bell className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </nav>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <User className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </header>
  );
}

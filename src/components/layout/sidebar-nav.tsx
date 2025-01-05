"use client";

import {
  CreditCard,
  Home,
  LayoutDashboard,
  PiggyBank,
  Settings,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu className="px-3 py-4">
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          tooltip="Dashboard"
          isActive={pathname === "/"}
        >
          <Link href="/">
            <Home className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Dashboard</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Transactions">
          <LayoutDashboard className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Transactions</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Accounts">
          <Users className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Accounts</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Investments">
          <PiggyBank className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Investments</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Credit Cards">
          <CreditCard className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Credit Cards</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Loans">
          <Wallet className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Loans</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Services">
          <Wrench className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">Services</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton tooltip="My Privileges">
          <CreditCard className="h-5 w-5 text-gray-500" />
          <span className="text-gray-700">My Privileges</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          tooltip="Setting"
          isActive={pathname === "/settings"}
        >
          <Link href="/settings">
            <Settings className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Setting</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

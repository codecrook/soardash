"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsTabsProps {
  children: React.ReactNode;
  defaultValue: string;
}

export function SettingsTabs({ children, defaultValue }: SettingsTabsProps) {
  return (
    <Tabs defaultValue={defaultValue} className="space-y-0">
      <div className="border-b border-gray-200">
        <TabsList className="w-full h-auto flex bg-transparent p-0 rounded-none">
          <TabsTrigger
            value="edit-profile"
            className="flex-1 h-[46px] rounded-none text-[13px] font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent"
          >
            Edit Profile
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            className="flex-1 h-[46px] rounded-none text-[13px] font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent"
          >
            Preferences
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="flex-1 h-[46px] rounded-none text-[13px] font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent"
          >
            Security
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="edit-profile" className="mt-0">
        {children}
      </TabsContent>
      <TabsContent value="preferences" className="p-4">
        <div className="text-[13px] text-gray-500">
          Preferences settings coming soon...
        </div>
      </TabsContent>
      <TabsContent value="security" className="p-4">
        <div className="text-[13px] text-gray-500">
          Security settings coming soon...
        </div>
      </TabsContent>
    </Tabs>
  );
}

import { SettingsForm, SettingsTabs } from "@/components/settings";

export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 p-0 md:p-6">
      <div className="hidden md:block space-y-0.5">
        <h3 className="text-lg font-medium text-gray-900">Setting</h3>
        <p className="text-[13px] text-gray-500">
          Manage your account settings and preferences.
        </p>
      </div>
      <div className="bg-white md:rounded-lg md:border md:border-gray-200">
        <SettingsTabs defaultValue="edit-profile">
          <SettingsForm />
        </SettingsTabs>
      </div>
    </div>
  );
}

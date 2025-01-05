"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DatePicker } from "@/components/ui/date-picker";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z.string().min(2, "Username must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  country: z.string(),
  postalCode: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export function SettingsForm() {
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      dateOfBirth: new Date(),
      presentAddress: "",
      permanentAddress: "",
      city: "",
      country: "",
      postalCode: "",
    },
  });

  const { isDirty } = form.formState;

  async function onSubmit(values: FormValues) {
    setIsSaving(true);
    try {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 px-4 py-6 md:p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-[13px] font-normal text-gray-600">
                  Your Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <DatePicker
                    date={field.value}
                    onSelect={field.onChange}
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="presentAddress"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Present Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="permanentAddress"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Permanent Address</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-11 border-gray-200 bg-gray-50/50 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            disabled={!isDirty || isSaving}
            className="w-full md:w-auto h-11 px-8 font-medium"
          >
            {isSaving ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

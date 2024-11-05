"use client";
import { AuthTabs } from "@/components/auth-tabs";

export default function AuthPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="sm:grid grid-cols-1 pl-0">
        <AuthTabs />
      </div>
    </div>
  );
}

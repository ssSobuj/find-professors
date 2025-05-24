import Navbar from "@/components/Navbar";
import React from "react";
import { Footer } from "react-day-picker";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-full max-w-[1560px]">
      <main className="flex-1">
        <div className="">{children}</div>
      </main>
    </div>
  );
}

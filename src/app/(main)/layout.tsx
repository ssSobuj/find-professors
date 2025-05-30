import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-full max-w-[1560px]">
      <Navbar />
      <main className="flex-1">
        <div className="">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

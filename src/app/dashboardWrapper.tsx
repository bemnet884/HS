"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useEffect } from "react";



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 dark:bg-gray-900`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardLayout>{children}</DashboardLayout>
  );
};

export default DashboardWrapper;

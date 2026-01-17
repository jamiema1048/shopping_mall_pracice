import React from "react";
import { Outlet } from "react-router-dom";
import type { DefaultLayoutProps } from "@/types/DefaultLayout";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ fixedHeader }: DefaultLayoutProps) => {
  return (
    <div>
      <Header fixedHeader={fixedHeader} />
      <main className="py-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

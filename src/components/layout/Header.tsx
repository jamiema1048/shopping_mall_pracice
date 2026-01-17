import React from "react";
import type { DefaultLayoutProps } from "@/types/DefaultLayout";

const Header: React.FC = ({ fixedHeader }: DefaultLayoutProps) => {
  return (
    <div
      className={`bg-red-800 h-20 block w-screen ${
        fixedHeader ? "fixed" : "block"
      }`}
    >
      {fixedHeader ? "Fixed Head" : "Not Fixed Head"}
    </div>
  );
};
export default Header;

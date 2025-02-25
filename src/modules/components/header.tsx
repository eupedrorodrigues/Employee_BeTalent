"use client";

import { Logo } from "@/constants";
export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full h-[3.75rem] bg-white flex items-center px-4 shadow-md">
      <img src={Logo.logo} alt={Logo.title} />
    </header>
  );
};

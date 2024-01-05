"use client";

import React from "react";
import { sidebarLinks } from "@constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ButtonBar = () => {
  const pathName = usePathname();
  return (
    <div className="flex bottom-0 w-full z-20 justify-between bg-dark-1 px-6 py-3 items-center md:hidden ">
      {sidebarLinks.map((link) => {
        const isActive = pathName === link.route;

        return (
          <Link
            key={link.label}
            href={link.route}
            className={`flex gap-2 items-center text-white rounded-lg py-2 px-4 ${
              isActive && "bg-purple-1"
            }`}
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default ButtonBar;

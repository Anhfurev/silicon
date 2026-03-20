"use client";

import { useState } from "react";
import HeaderNav from "./HeaderNav";

export type NavLinkType = {
  label: string;
  href: string;
};

const navLinks: NavLinkType[] = [
  {
    label: "Нүүр хуудас",
    href: "/",
  },
  {
    label: "Бидний тухай",
    href: "/about",
  },
  {
    label: "Бүтээгдэхүүн",
    href: "/products",
  },
  {
    label: "AI agent",
    href: "/ai-agent",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-white backdrop-blur supports-backdrop-filter:bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* PillNav Navigation */}
          <div className="w-full">
            <HeaderNav />
          </div>
        </div>
      </nav>
    </header>
  );
}

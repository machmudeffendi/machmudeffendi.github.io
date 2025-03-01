"use client"

import { NAV_ITEM } from "@/utility/constant";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar(){
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const activeLink = (pathname: string, href: string) => {
    if(pathname == href)
      return "h-[55px] border-r border-[#2C334B] px-[20px] content-center border-b-4 border-b-[#9290C3] text-white"

    return "h-[55px] border-r border-[#2C334B] px-[20px] content-center hover:border-b-4 hover:border-b-[#9290C3] hover:text-white"
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-[--background] border border-[#2C334B]">
      <div className="flex items-center justify-beetween h-[55px]">
        <span className="border-r border-[#2C334B] px-4 h-[55px] flex items-center w-full md:w-auto">
          machmud-effendi
        </span>

        {/* Mobile Menu Button */}
        <a
          role="button"
          className="md:hidden ms-auto text-white px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="size-6 text-blue-500"/>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row items-center h-[55px]">
          {
            NAV_ITEM.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                role="button" 
                className={activeLink(pathname, item.href)}>
                {item.label}
              </Link>
            ))
          }
        </div>

        {/* Contact Me Link */}
        <Link 
          href={'/contact-me'} 
          role="button" 
          className={`hidden md:flex ms-auto px-4 h-[55px] items-center ${
            pathname == '/contact-me' 
              ? "border-4 border-[#9290C3] text-white" 
              : "border-l border-[#2C334B] hover:border-4 hover:border-[#9290C3] hover:text-white"
          }`}>
          _contact-me
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col md:hidden border-t border-[#2C334B] bg-[--background]">
          {NAV_ITEM.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="button"
              className={`${
                activeLink(pathname, item.href)
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
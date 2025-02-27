"use client"

import { NAV_ITEM } from "@/utility/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
  const pathname = usePathname();

  const activeLink = (pathname: string, href: string) => {
    if(pathname == href)
      return "border-r border-[#2C334B] px-[20px] content-center border-b-4 border-b-[#9290C3] text-white"

    return "border-r border-[#2C334B] px-[20px] content-center hover:border-b-4 hover:border-b-[#9290C3] hover:text-white"
  }

  return (
    <nav className="flex flex-row border border-[#2C334B] h-[55px] align-middle sticky top-0 z-50 bg-[--background]">
      <span className="border-r border-[#2C334B] px-[20px] content-center h-[55px]">
        machmud-effendi
      </span>
      {
        NAV_ITEM.map((item) => (
          <Link key={item.href} href={item.href} role="button" className={activeLink(pathname, item.href)}>
            {item.label}
          </Link>
        ))
      }
      <a role="button" className="ms-auto border-l border-[#2C334B] px-[20px] content-center hover:border-4 hover:border-[#9290C3] hover:text-white">
        _contact-me
      </a>
    </nav>
  )
}
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutType = {
  children: ReactNode
}

export default function Layout({children}: LayoutType) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <main className="flex-grow border-l border-r border-[#2C334B] p-[20px] pt-[75px]">
        <div className="container mx-auto h-full px-2 md:px-20">
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  )
}
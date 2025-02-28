"use client"

import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function BackButton(){
  const router = useRouter();

  return(
    <a role="button" onClick={() => router.back()} className="flex flex-row justify-center gap-[10px] py-[5px] px-[10px] border border-[#2C334B] text-[16px] hover:text-white">
      <ChevronLeftIcon className="size-6 text-blue-500"/> Back
    </a>
  )
}
import Layout from "@/components/layouts/Layout";
import Image from "next/image";

export default function Home() {
  return (
  <div className="grid grid-cols-2 h-full">
    <div className="flex flex-col justify-center gap-[50px]">
      <div className="flex flex-col leading-none">
        <span className="text-white text-[20px]">Hi There, I am</span>
        <span className="text-white text-[64px] font-bold">Machmud Effendi</span>
        <span className="text-[#1F37C0] text-[32px]">{'>'} Software Engineer</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[#9E9E9E]">// Check my github profile</span>
        <span className="text-[20px]">
          <span className="text-[#4325ED]">const</span> <span className="text-[#75D96C]">github</span> = <a role="button" className="text-[#FFAB3E]">‘https://github.com/machmudeffendi’</a>
        </span>
      </div>
    </div>
    <div className="flex justify-center ">
      <Image
        className="dark:invert"
        src="/profile.svg"
        alt="Profile Image"
        width={400}
        height={400}
        priority
      />
    </div>
  </div>
  );
}

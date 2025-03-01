
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-1 md:gap-8 px-1 md:px-12">
    {/* Left Section - Text Content */}
    <div className="flex flex-col justify-center gap-6 text-center md:text-left">
      <div className="flex flex-col leading-none">
        <span className="text-white text-lg md:text-xl">Hi There, I am</span>
        <span className="text-white text-4xl md:text-6xl font-bold">Machmud Effendi</span>
        <span className="text-[#1F37C0] text-2xl md:text-4xl">{'>'} Software Engineer</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[#9E9E9E]">{"// Check my GitHub profile"}</span>
        <span className="text-lg">
          <span className="text-[#4325ED]">const</span> <span className="text-[#75D96C]">github</span> ={" "}
          <a
            href="https://github.com/machmudeffendi"
            target="_blank"
            role="button"
            className="text-[#FFAB3E] underline"
          >
            'https://github.com/machmudeffendi'
          </a>
        </span>
      </div>
    </div>

    {/* Right Section - Profile Image */}
    <div className="hidden md:flex justify-center">
      <Image
        className="dark:invert w-48 md:w-96"
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

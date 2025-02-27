import Image from "next/image";

export default function Footer(){
  return (
    <footer className="flex flex-row border border-[#2C334B] h-[45px] align-middle">
      <span className="border-r border-[#2C334B] px-[20px] content-center h-[45px]">
        find-me :
      </span>
      <a role="button" className="border-r border-[#2C334B] px-[20px] content-center hover:text-white">
        <Image
          className="dark:invert"
          src="/twitter.svg"
          alt="Twitter logo"
          width={24}
          height={24}
          priority
        />
      </a>
      <a role="button" className="border-r border-[#2C334B] px-[20px] content-center hover:text-white">
      <Image
          className="dark:invert"
          src="/instagram.svg"
          alt="Instagram logo"
          width={24}
          height={24}
          priority
        />
      </a>
      <a role="button" className="border-r border-[#2C334B] px-[20px] content-center hover:text-white">
      <Image
          className="dark:invert"
          src="/linkedin.svg"
          alt="Linkedin logo"
          width={24}
          height={24}
          priority
        />
      </a>
      <a role="button" className="flex flex-row ms-auto border-l border-[#2C334B] px-[20px] content-center hover:text-white">
        <span className="content-center me-2">@machmudeffendi</span> 
        <Image
          className="dark:invert"
          src="/github.svg"
          alt="Github logo"
          width={24}
          height={24}
          priority
        />
      </a>
    </footer>
  )
}
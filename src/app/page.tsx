import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex flex-row border border-[#2C334B] h-[55px] align-middle">
        <span className="border-r border-[#2C334B] px-[20px] content-center">
          machmud-effendi
        </span>
        <a role="button" className="border-r border-[#2C334B] px-[20px] content-center hover:border-b-4 hover:border-b-[#9290C3] hover:text-white">
          _home
        </a>
        <a role="button" className="border-r border-[#2C334B] px-[20px] content-center hover:border-b-4 hover:border-b-[#9290C3] hover:text-white">
          _about-me
        </a>
        <a role="button" className="border-r border-[#2C334B] px-[20px] content-center hover:border-b-4 hover:border-b-[#9290C3] hover:text-white">
          _blogs
        </a>
        <a role="button" className="border-r border-[#2C334B] px-[20px] content-center hover:border-b-4 hover:border-b-[#9290C3] hover:text-white">
          _projects
        </a>
        <a role="button" className="ms-auto border-l border-[#2C334B] px-[20px] content-center hover:border-4 hover:border-[#9290C3] hover:text-white">
          _contact-me
        </a>
      </nav>
      <main className="flex-grow border-l border-r border-[#2C334B] p-3">
        Content
      </main>
      <footer className="flex flex-row border border-[#2C334B] h-[45px] align-middle">
        <span className="border-r border-[#2C334B] px-[20px] content-center">
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
    </div>
  );
}

import Image from "next/image";

export default function ContactMe(){
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col">
        <h1 className="py-[50px] leading-none text-[40px] font-bold text-white">
          Let's Get Work<br/>
          Together!
        </h1>
        <p className="text-[24px]">Got a question or just want to say hi? I'd love to hear from you! Drop me a message, and I'll get back to you as soon as possible.</p>
        <div className="mt-[60px]">
          <a href="mailto:machmudeffendi01@gmail.com" role="button" className="border border-[#2C334B] p-[20px] px-[40px] font-bold hover:text-white hover:outline hover:outline-4 hover:outline-[#9290C3]">SAY HI</a>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] pb-[50px]">
        <span>This website design is inpired by <a href="https://www.behance.net/aminaghandouz" target="_blank" className="font-bold">Amina Ghandouz</a> on</span>
        <a href="https://www.behance.net" target="_blank">
          <Image
            src={'/contact-me/behance.svg'}
            alt="Behance Logo"
            width={111}
            height={43}
            objectFit="cover"
          />
        </a>
      </div>
    </div>
  )
}
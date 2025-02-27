import Image from "next/image";
import { Tag } from "../about-me/BoxExperience";

type ProjectsType = {
  id: string
  image: string
  title: string
  tag: string
}

type BoxProjectsType = {
  items: ProjectsType
}

export default function BoxProjects({items}: BoxProjectsType){
  return (
    <div className="flex flex-col p-0">
      <div className="w-full aspect-[4/3] relative border border-[#2C334B]">
        <Image
          src={items.image}
          alt="Image Picsum"
          fill
          className="p-[10px]"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col p-[10px] border-x border-b border-[#2C334B]">
        <span className="text-[20px] text-white font-bold truncate">{items.title}</span>
        <div className="flex flex-row gap-[10px] leading-none mt-[10px]">
          <Tag list={items.tag}/>
        </div>
      </div>
    </div>
  )
}
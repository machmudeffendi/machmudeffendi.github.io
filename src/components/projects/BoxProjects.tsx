import Image from "next/image";
import { Tag } from "../about-me/BoxExperience";
import { ProjectType } from "@/app/projects/typeProjects";
import { builderImage } from "@/lib/sanity/sanity";

type BoxProjectsType = {
  items: ProjectType
}

export default function BoxProjects({items}: BoxProjectsType){
  return (
    <div className="flex flex-col p-0">
      <div className="w-full aspect-[4/3] relative border border-[#2C334B]">
        <Image
          src={builderImage(items.image).url()}
          alt="Image Picsum"
          fill
          className="p-[10px]"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col p-[10px] border-x border-b border-[#2C334B]">
        <span className="text-[20px] text-white font-bold truncate">{items.title}</span>
        <div className="flex flex-row gap-[10px] leading-none mt-[10px]">
          <Tag list={items.tags}/>
        </div>
      </div>
    </div>
  )
}
import BoxProjects from "@/components/projects/BoxProjects";
import { getAllProject } from "@/lib/sanity/queriesProject";
import { REVALIDATE_TIME_24HOUR } from "@/utility/constant";
import { ProjectType } from "./typeProjects";

export default async function Project(){
  const project = await getAllProject()

  return (
    <div className="flex flex-col">
      <h1 className="py-[50px] leading-none text-[40px] font-bold text-white">
        Workside:<br/>
        The Fenx Projects
      </h1>
      <div className="grid grid-cols-3 gap-[20px] leading-none">
        {project.map((item: ProjectType) => <BoxProjects key={item.slug.current} items={item}/>)}
      </div>
    </div>
  )
}

export const revalidate = REVALIDATE_TIME_24HOUR
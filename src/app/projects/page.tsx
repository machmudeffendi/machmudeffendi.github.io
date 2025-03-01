
import BoxProjects from "@/components/projects/BoxProjects";
import { getAllProject } from "@/lib/sanity/queriesProject";
import { ProjectType } from "../../components/type/typeProjects";

export default async function Project(){
  const project = await getAllProject();
  return (
    <div className="flex flex-col lg:px-12">
      <h1 className="py-[50px] leading-none text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        Workside:<br/>
        The Fenx Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] leading-none">
        {project.map((item: ProjectType) => <BoxProjects key={item.slug.current} items={item}/>)}
      </div>
    </div>
  )
}

export const revalidate = 86400 
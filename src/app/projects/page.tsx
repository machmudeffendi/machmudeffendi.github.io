import BoxProjects from "@/components/projects/BoxProjects";

const PROJECTS = [
  {
    id: '1',
    image: 'https://picsum.photos/id/10/720',
    title: 'Satutask : All-In-One Project Management System',
    tag: 'SaaS',
  },
  {
    id: '2',
    image: 'https://picsum.photos/id/11/720',
    title: 'Digital Invitation',
    tag: 'SaaS',
  },
  {
    id: '3',
    image: 'https://picsum.photos/id/12/720',
    title: 'Digital Counter',
    tag: 'Tools',
  },
  {
    id: '4',
    image: 'https://picsum.photos/id/13/720',
    title: 'Digital Counter',
    tag: 'Tools',
  },
  {
    id: '5',
    image: 'https://picsum.photos/id/14/720',
    title: 'Digital Counter',
    tag: 'Tools',
  }
]

export default function Project(){
  return (
    <div className="flex flex-col">
      <h1 className="py-[50px] leading-none text-[40px] font-bold text-white">
        Workside:<br/>
        The Fenx Projects
      </h1>
      <div className="grid grid-cols-3 gap-[20px] leading-none">
        {PROJECTS.map((item) => <BoxProjects key={item.id} items={item}/>)}
      </div>
    </div>
  )
}
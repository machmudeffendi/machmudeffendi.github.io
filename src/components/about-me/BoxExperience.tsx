import Image from "next/image";

type ExpereinceType = {
  image: string
  title: string
  date: string 
  role: string
  description: string | Array<string>
  tag?: string | Array<string>
}

type BoxExperienceType = {
  item: ExpereinceType
}

type ListType = {
  list: string | Array<string>
}

export const Tag = ({list}: ListType) => {
  if(typeof list == 'string') {
    list = list.split(',')
  }

  return list.map((item: string) => <span key={item} className="p-[8px] border border-white text-white text-[12px]">{item}</span>)
}

export default function BoxExperience({ item }: BoxExperienceType) {

  const ListExpereince = ({list}: ListType) => {
    if(typeof list != 'object') {
      return <></>
    }

    return (
      <ul className="list-disc text-white pl-[20px]">
        {list.map((item: string) => <li key={item} className="text-white">{item}</li>)}
      </ul>
    )
  }

  return (
    <div className="border border-[#2C334B] p-[20px]">
      <div className="flex flex-row gap-[10px]">
        <Image
          className="dark:invert"
          src={item.image}
          alt="Profile Image"
          width={150}
          height={150}
          priority
        />
        <div className="flex flex-col p-[10px] gap-[10px] w-full leading-none">
          <div className="flex flex-row justify-between">
            <span className="text-[20px] font-bold text-white">{item.title}</span>
            <span className="text-[20px]">{item.date}</span>
          </div>
          <span className="text-white font-bold">{item.role}</span>
          {typeof item.description == 'string' && <p className="text-white">{item.description}</p>}
          {typeof item.description == 'object' && <ListExpereince list={item.description}/>}
          {item.tag && (
            <div className="flex flex-row gap-[10px] leading-none">
              <Tag list={item.tag}/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
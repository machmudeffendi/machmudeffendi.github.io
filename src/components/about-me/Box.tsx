import { ReactNode } from "react"

type BoxType = {
  title: string
  children: ReactNode
  titleSize?: string
}

export default function Box({children, title, titleSize}:  BoxType){
  const _titleSize = () =>{
    if(titleSize == 'sm') {
      return '20px'
    }
    if(titleSize == 'md') {
      return '26px'
    }

    return '32px'
  }
  return (
    <div className="border border-[#2C334B] p-[20px]">
      <h2 className={"text-["+_titleSize()+"] text-white font-bold"}>{title}</h2>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-[#2C334B]"/>
        </div>
      </div>
      {children}
    </div>
  )
}
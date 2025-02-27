type BoxType = {
  title: string,
  children: any
}

export default function Box({children, title}: BoxType){
  return (
    <div className="border border-[#2C334B] p-[20px]">
      <h2 className="text-[32px] text-white font-bold">{title}</h2>
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-b border-[#2C334B]"/>
        </div>
      </div>
      {children}
    </div>
  )
}
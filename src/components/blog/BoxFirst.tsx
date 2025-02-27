import Image from "next/image";
import Link from "next/link";

type BlogItemType = {
  date: string
  title: string
  image: string
  description: string
  slug: string
}

type BoxFirstType = {
  item: BlogItemType
}


export function BoxItemBlog({item}: BoxFirstType){
  return (
    <div className="grid grid-cols-3 border-x border-b border-[#2C334B] p-[20px] gap-[20px]">
      <Link href={`blog/${item.slug}`} className="w-full aspect-[4/3] relative border border-[#2C334B]">
        <Image
          src={item.image}
          alt="Image Picsum"
          fill
          className="p-[10px]"
          objectFit="cover"
        />
      </Link>
      <div className="flex flex-col col-span-2">
        <span>{item.date}</span>
        <Link href={`blog/${item.slug}`} role="button" className="text-white text-[24px] font-bold mt-[5px] mb-[10px]">{item.title}</Link>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default function BoxFirst({item}: BoxFirstType){
  return (
    <div className="flex flex-col border border-[#2C334B] p-[20px]">
      <span className="text-[20px] mb-[5px]">{item.date}</span>
      <Link href={`blog/${item.slug}`} className="text-white text-[36px] font-bold">{item.title}</Link>
      <Link href={`blog/${item.slug}`} className="w-full aspect-[16/9] relative border border-[#2C334B] my-[15px]">
        <Image
          src={item.image}
          alt="Image Picsum"
          fill
          className="p-[10px]"
          objectFit="cover"
        />
      </Link>
      <p>{item.description}</p>
    </div>
  )
}
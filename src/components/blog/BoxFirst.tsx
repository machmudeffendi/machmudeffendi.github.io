import { PostType } from "@/app/blog/blogType";
import { builderImage } from "@/lib/sanity/sanity";
import { formatDate } from "@/utility/dateformat";
import Image from "next/image";
import Link from "next/link";

type BoxFirstType = {
  item: PostType
}


export function BoxItemBlog({item}: BoxFirstType){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 border-x border-b border-[#2C334B] p-[20px] gap-[20px]">
      <Link href={`/blog/${item.slug.current}`} className=" w-full aspect-[16/9] md:aspect-[4/3] relative border border-[#2C334B]">
        <Image
          src={builderImage(item.image).url()}
          alt="Image Picsum"
          fill
          className="p-[10px]"
          objectFit="cover"
        />
      </Link>
      <div className="flex flex-col md:col-span-2">
        <span className="text-base sm:text-lg">{formatDate(item.publishedAt)}</span>
        <Link href={`/blog/${item.slug.current}`} role="button" className="text-white text-lg sm:text-1xl md:text-2xl font-bold mt-[5px] mb-[10px]">{item.title}</Link>
        <p className="text-sm sm:text-base">{item.excerpt}</p>
      </div>
    </div>
  )
}

export default function BoxFirst({item}: BoxFirstType){
  return (
    <div className="flex flex-col border border-[#2C334B] p-[20px]">
      <span className="text-base sm:text-lg mb-1">{formatDate(item.publishedAt)}</span>
      <Link href={`/blog/${item.slug.current}`} className="text-white text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</Link>
      <Link href={`/blog/${item.slug.current}`} className="w-full aspect-[4/3] md:aspect-[16/9] relative border border-[#2C334B] my-[15px]">
        <Image
          src={builderImage(item.image).url()}
          alt="Image Picsum"
          fill
          className="p-[10px]"
          objectFit="cover"
        />
      </Link>
      <p className="text-sm sm:text-base">{item.excerpt}</p>
    </div>
  )
}
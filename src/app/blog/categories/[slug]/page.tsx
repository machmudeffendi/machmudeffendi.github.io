import Box from "@/components/about-me/Box";
import { BoxItemBlog } from "@/components/blog/BoxFirst";
import { BLOGLIST } from "@/utility/constant";
import ChevronLeft from "@/utility/icons/ChevronLeft";
import ChevronRight from "@/utility/icons/ChevronRight";
import Link from "next/link";

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
 
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))

  return BLOGLIST.map((item) => ({
    slug: item.slug
  }))
}

export default async function Categories({
  params,
}: {
  params: Promise<{ slug: string }>
}){

  const slug = (await params).slug
  return (
    <div className="flex flex-col">
      <h1 className="py-[50px] leading-none text-[40px] font-bold text-white">
        {slug}
      </h1>
      <div className="grid grid-cols-3 grid-flow-col gap-[20px] leading-none">
        <div className="flex flex-col col-span-2">
          <div className="border-t border-[#2C334B]">
            {BLOGLIST.map((item) => <BoxItemBlog key={item.id} item={item}/>)}
          </div>
          <div className="flex flex-row justify-center my-[20px]">
            <button className="border-y border-l border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronLeft/></button>
            <button className="border border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronRight/></button>
          </div>
        </div>
        <div className="flex flex-col">
          <Box title="All Categories" titleSize="sm">
            <div className="flex flex-col gap-[10px]">
              <Link href={'/blog/categories/item-category'} role="button">Item Category</Link>
              <Link href={'/blog/categories/item-category-2'}  role="button"> Item Category 2</Link>
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
}
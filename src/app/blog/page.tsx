import Box from "@/components/about-me/Box";
import BoxFirst, { BoxItemBlog } from "@/components/blog/BoxFirst";
import { BLOGLIST } from "@/utility/constant";
import ChevronLeft from "@/utility/icons/ChevronLeft";
import ChevronRight from "@/utility/icons/ChevronRight";
import Link from "next/link";

export default function Blog(){
  return (
    <div className="flex flex-col">
      <h1 className="py-[50px] leading-none text-[40px] font-bold text-white">
        Codeside:<br/>
        The Fenx Blog
      </h1>
      <div className="grid grid-cols-3 grid-flow-col gap-[20px] leading-none">
        <div className="flex flex-col col-span-2">
          <BoxFirst item={BLOGLIST[0]}/>
          {BLOGLIST.filter((f, idx) => idx != 0).map((item) => <BoxItemBlog key={item.id} item={item}/>)}
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
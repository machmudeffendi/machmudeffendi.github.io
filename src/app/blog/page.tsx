import Box from "@/components/about-me/Box";
import BoxFirst, { BoxItemBlog } from "@/components/blog/BoxFirst";
import ChevronLeft from "@/utility/icons/ChevronLeft";
import ChevronRight from "@/utility/icons/ChevronRight";
import Image from "next/image";

const BLOG = [
  {
    id: '1',
    slug: 'the-standard-lorem-ipsum-passage-used-since-the-1500s',
    date: 'Feb 25, 2025',
    title: 'The standard Lorem Ipsum passage, used since the 1500s',
    image: 'https://picsum.photos/id/1/720',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '2',
    slug: 'Section-1.10.32-of-de-Finibus-Bonorum-et-Malorum-written-by-Cicero-in-45-BC',
    date: 'Feb 24, 2025',
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    image: 'https://picsum.photos/id/2/720',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  },
  {
    id: '3',
    slug: 'Section-1.10.32-of-de-Finibus-Bonorum-et-Malorum-written-by-Cicero-in-45-BC',
    date: 'Feb 24, 2025',
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    image: 'https://picsum.photos/id/3/720',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  },
  {
    id: '4',
    slug: 'Section-1.10.32-of-de-Finibus-Bonorum-et-Malorum-written-by-Cicero-in-45-BC',
    date: 'Feb 24, 2025',
    title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
    image: 'https://picsum.photos/id/4/720',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  }
]

export default function Blog(){
  return (
    <div className="flex flex-col">
      <h1 className="py-[50px] leading-none text-[40px] font-bold text-white">
        Codeside:<br/>
        The Fenx Blog
      </h1>
      <div className="grid grid-cols-3 grid-flow-col gap-[20px] leading-none">
        <div className="flex flex-col col-span-2">
          <BoxFirst item={BLOG[0]}/>
          {BLOG.filter((f, idx) => idx != 0).map((item) => <BoxItemBlog key={item.id} item={item}/>)}
          <div className="flex flex-row justify-center my-[20px]">
            <button className="border-y border-l border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronLeft/></button>
            <button className="border border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronRight/></button>
          </div>
        </div>
        <div className="flex flex-col">
          <Box title="All Categories" titleSize="sm">
            <div className="flex flex-col gap-[10px]">
            <a role="button"> Item Category</a>
            <a role="button"> Item Category 2</a>
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
}
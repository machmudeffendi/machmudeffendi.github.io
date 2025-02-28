import { getPaginatedPosts, getTotalPostCount } from "@/lib/sanity/queriesBlog"
import { POST_PER_PAGE } from "@/utility/constant"
import { CategoryType, PostType } from "../../blogType"
import Link from "next/link"
import Box from "@/components/about-me/Box"
import { BoxItemBlog } from "@/components/blog/BoxFirst"
import ChevronLeft from "@/utility/icons/ChevronLeft"
import ChevronRight from "@/utility/icons/ChevronRight"
import { getAllCategories } from "@/lib/sanity/queriesCategories"

export async function generateStaticParams() {
  const totalPosts = await getTotalPostCount()
  const totalPages = Math.ceil(totalPosts / POST_PER_PAGE)
  return Array.from({length: totalPages}, (_, i) => {
    return ({
      slug: (i + 1).toString()
    })
  })
}

export default async function Pages({
  params,
}: {
  params: Promise<{ slug: string }>
}){
  const page = parseInt((await params).slug) || 1
  const posts = await getPaginatedPosts(page, POST_PER_PAGE)
  const totalPosts = await getTotalPostCount()
  const totalPages = Math.ceil(totalPosts / POST_PER_PAGE)
  const category = await getAllCategories()

  return (
    <div className="flex flex-col">
      <h1 className="py-[50px] leading-none text-[40px] font-bold text-white">
        Codeside:<br/>
        The Fenx Blog
      </h1>
      <div className="grid grid-cols-3 grid-flow-col gap-[20px] leading-none">
        <div className="flex flex-col col-span-2 border-t border-[#2C334B]">
          {posts.map((item: PostType) => <BoxItemBlog key={item.slug.current} item={item}/>)}
          <div className="flex flex-row justify-center my-[20px]">
            {page > 1 && (
              <Link href={`/blog/page/${page - 1}`} role="button" className="border-y border-l border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronLeft/></Link>
            )}
            {page < totalPages && (
              <Link href={`/blog/page/${page + 1}`} role="button" className="border border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronRight/></Link>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <Box title="All Categories" titleSize="sm">
            <div className="flex flex-col gap-[10px]">
              {category.map((item: CategoryType) => (
                <Link key={item.slug.current} href={`/blog/categories/${item.slug.current}`} role="button">{item.title}</Link>
              ))}
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
}
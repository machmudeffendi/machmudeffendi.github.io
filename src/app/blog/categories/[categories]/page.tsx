import Box from "@/components/about-me/Box";
import { BoxItemBlog } from "@/components/blog/BoxFirst";
import { getAllCategories, getCategory } from "@/lib/sanity/queriesCategories";
import { POST_PER_PAGE } from "@/utility/constant";
import ChevronLeft from "@/utility/icons/ChevronLeft";
import ChevronRight from "@/utility/icons/ChevronRight";
import Link from "next/link";
import { CategoryType, PostType } from "../../blogType";
import { getPaginatedPosts, getTotalPostCount } from "@/lib/sanity/queriesBlog";

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((item: CategoryType) => ({
    categories: item.slug.current
  }))
}

export default async function Categories({
  params,
}: {
  params: Promise<{ categories: string }>
}){
  const page = 1
  const posts = await getPaginatedPosts(page, POST_PER_PAGE)
  const totalPosts = await getTotalPostCount()
  const totalPages = Math.ceil(totalPosts / POST_PER_PAGE)
  const category = await getAllCategories()
  const slug = (await params).categories
  const itemCategory: CategoryType = await getCategory(slug)
  
  return (
    <div className="flex flex-col">
      <h1 className="py-[50px] leading-none text-[40px] font-bold text-white">
        {itemCategory.title}
      </h1>
      <div className="grid grid-cols-3 grid-flow-col gap-[20px] leading-none">
        <div className="flex flex-col col-span-2">
          <div className="border-t border-[#2C334B]">
            {posts.map((item: PostType) => <BoxItemBlog key={item.slug.current} item={item}/>)}
          </div>
          <div className="flex flex-row justify-center my-[20px]">
            {page > 1 && (
              <Link href={`/blog/categories/${slug}/page/${page - 1}`} role="button" className="border-y border-l border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronLeft/></Link>
            )}
            {page < totalPages && (
              <Link href={`/blog/categories/${slug}/page/${page + 1}`} role="button" className="border border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronRight/></Link>
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
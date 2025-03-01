import Box from "@/components/about-me/Box";
import { BoxItemBlog } from "@/components/blog/BoxFirst";
import { getAllCategories, getCategory, getTotalCategoryCount } from "@/lib/sanity/queriesCategories";
import { POST_PER_PAGE } from "@/utility/constant";
import ChevronLeft from "@/utility/icons/ChevronLeft";
import ChevronRight from "@/utility/icons/ChevronRight";
import Link from "next/link";
import { getPaginatedPosts, getTotalPostCount } from "@/lib/sanity/queriesBlog";
import { CategoryTotalPostType, CategoryType, PostType } from "@/app/blog/blogType";

type StaticParams = {
  categories: string;
  page: string;
};

export async function generateStaticParams() {
  const totalCategories = await getTotalCategoryCount()
  const params: StaticParams[] = [];
  totalCategories.map((item: CategoryTotalPostType) => {
    const totalPages = Math.ceil(item.totalPosts / POST_PER_PAGE)
    Array.from({length: totalPages}, (_, i) => {
      params.push({categories: item.slug.current, page: (i + 1).toString()})
    })
  })
  return params
}

export default async function Categories({
  params,
}: {
  params: Promise<{ categories: string, page: string }>
}){
  const page = 1
  const posts = await getPaginatedPosts(page, POST_PER_PAGE)
  const totalPosts = await getTotalPostCount()
  const totalPages = Math.ceil(totalPosts / POST_PER_PAGE)
  const category = await getAllCategories()
  const categoriesSlug = (await params).categories
  const itemCategory: CategoryType = await getCategory(categoriesSlug)
  
  return (
    <div className="flex flex-col">
      <h1 className="py-[50px] leading-none text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {itemCategory.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[20px] leading-none">
        <div className="flex flex-col md:col-span-2">
          <div className="border-t border-[#2C334B]">
            {posts.map((item: PostType) => <BoxItemBlog key={item.slug.current} item={item}/>)}
          </div>
          <div className="flex flex-row justify-center my-[20px]">
            {page > 1 && (
              <Link href={`/blog/categories/${categoriesSlug}/page/${page - 1}`} role="button" className="border-y border-l border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronLeft/></Link>
            )}
            {page < totalPages && (
              <Link href={`/blog/categories/${categoriesSlug}/page/${page + 1}`} role="button" className="border border-[#2C334B] aspect-square w-[48px] p-[8px]"><ChevronRight/></Link>
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

export const revalidate = 86400 
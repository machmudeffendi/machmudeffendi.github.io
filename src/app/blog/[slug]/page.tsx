import { TagLink } from "@/components/about-me/BoxExperience";
import Image from "next/image";
import BackButton from "@/components/blog/BackButton";
import { getAllPosts, getPost } from "@/lib/sanity/queriesBlog";
import { FullPostType } from "../blogType";
import { builderImage } from "@/lib/sanity/sanity";
import { PortableText } from '@portabletext/react'
import { formatDate } from "@/utility/dateformat";

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((item: { slug: { current: string }}) => ({
    slug: item.slug.current
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}){
  const slug = (await params).slug
  const post: FullPostType = await getPost(slug)

  return (
    <div className="flex flex-col p-[20px]">
      <div className="grid grid-cols-12 gap-[40px]">
        <div className="col-span-2 mx-auto">
          <BackButton />
        </div>
        <div className="col-span-6 aspect-[4/3] relative" >
          <Image
            src={builderImage(post.image).url()}
            alt="Image Picsum"
            fill
            objectFit="cover"
          />
        </div>
        <div className="col-span-4 flex flex-col justify-center leading-none">
          <h1 className="text-white text-[32px] font-bold mb-[10px]">{post.title}</h1>
          <span className="text-white mb-[5px]">By {post.author.name}</span>
          <span className="mb-[10px]">{formatDate(post.publishedAt)}</span>
          <div className="flex flex-row gap-[10px] leading-none">
            <TagLink list={post.categories} url="/blog/categories"/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[40px] mt-10">
        <div className="col-span-2"></div>
        <article className="col-span-6 blog-content prose md:prose-md xl:prose-xl">
          <PortableText value={post.body} />
        </article>
        <div className="col-span-4"></div>
      </div>
    </div>
  )
}

export const revalidate = 86400 
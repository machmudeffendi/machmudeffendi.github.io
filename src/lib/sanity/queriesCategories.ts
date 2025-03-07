import { client } from "./sanity";

export async function getAllCategories(){
  return client.fetch(
    `*[_type == "category"] {
      slug,
      title
    }`
  )
}

export async function getCategory(slug: string){
  return client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description
    }`,
    {slug}
  )
}

export async function getTotalCategoryCount(){
  return client.fetch(
    `*[_type == "category"] {
      title,
      slug,
      "totalPosts": count(*[_type == "post" && references(^._id)])
    }`
  )
}
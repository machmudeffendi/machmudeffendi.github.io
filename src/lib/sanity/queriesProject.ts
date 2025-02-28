import { client } from "./sanity";

export async function getAllProject(){
  return await client.fetch(
    `*[_type == "project"] {
        slug,
        title,
        image,
        description,
        tags
    }`
  )
}
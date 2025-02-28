import { client } from "./sanity";

export async function getAllProject(){
  return client.fetch(
    `*[_type == "project"] {
        slug,
        title,
        image,
        description,
        tags
    }`
  )
}
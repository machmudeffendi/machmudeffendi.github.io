import { client } from "./sanity"

export async function getPaginatedPosts(page: number, limit: number) {
  const start = (page - 1) * limit
  return client.fetch(
    `*[_type == "post"] | order(_createdAt desc) [${start}...${start + limit}] {
      title,
      slug,
      image,
      publishedAt,
      excerpt
    }`
  )
}

export async function getTotalPostCount(){
  return client.fetch(`count(*[_type == "post"])`)
}

export async function getAllPosts(){
  return client.fetch(
    `*[_type == "post"] {
      slug
    }`
  )
}

export async function getPost(slug: string){
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      author->{
        name,
        image
      },
      image,
      categories[]->{
        title
      },
      body
    }`,
    { slug }
  )
}
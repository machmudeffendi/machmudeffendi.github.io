export type AuthorType = {
  name: string
}

export type PostType = {
  title: string, 
  slug: {
    current: string
  },
  excerpt: string
  publishedAt: string
  image: string
}

export type BlogPropsType = {
  posts: Array<PostType>,
  currentPage: number,
  totalPages: number,
}

export type CategoryType = {
  title: string,
  slug: { current: string },
  description: string
}
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

export type FullPostType = {
  title: string, 
  slug: {
    current: string
  },
  excerpt: string
  publishedAt: string
  image: string,
  categories: Array<{slug: { current: string }, title: string}>
  author: { name:string },
  body: Array<any>
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

export type CategoryTotalPostType = {
  title: string,
  slug: { current: string },
  totalPosts: number
}
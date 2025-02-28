import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true
})

const builder = imageUrlBuilder(client)

export function builderImage(source: string | object) {
  return builder.image(source)
}


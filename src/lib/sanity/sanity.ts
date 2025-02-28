import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false
})

const builder = imageUrlBuilder(client)

export function builderImage(source: string | object) {
  return builder.image(source)
}


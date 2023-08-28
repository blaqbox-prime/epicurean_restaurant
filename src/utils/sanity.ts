import  imageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

const client = createClient({
    projectId: 'o2wqvxf5',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03',
})

export default client;

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
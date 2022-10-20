import { SanityClient } from "@sanity/client"
import { imageUrlBuilder } from "@sanity/image-url"

export const client = sanityClient({
    projectId: 'ayvmo5h8',
    dataset: 'production',
    apiVersion: '2022-10-20',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
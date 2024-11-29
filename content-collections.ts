import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const trips = defineCollection({
  name: "trips",
  directory: "./data/trip",
  include: "*.mdx",
  schema: (z) => ({
    date: z.string(),
    title: z.string(),
    summary: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      }),
    ),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [trips],
});

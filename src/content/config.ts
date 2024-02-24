import { z, defineCollection } from "astro:content";

const methodsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    mutation: z.string(),
  }),
});

export const collections = {
  methods: methodsCollection,
};

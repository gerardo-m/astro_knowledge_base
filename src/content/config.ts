
import { z, defineCollection } from "astro:content";
const articlesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(), 
      updateDate: z.date().optional(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      categories: z.array(z.string())
    })
});
export const collections = {
  articles: articlesCollection,
};
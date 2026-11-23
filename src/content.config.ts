// src/content.config.ts

import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/news",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["announcement", "update", "maintenance"]),
  }),
});

export const collections = { news };

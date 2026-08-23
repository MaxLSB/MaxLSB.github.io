import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/blog"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        draft: z.boolean().optional().default(false),
        externalUrl: z.string().url().optional(),
    })
});

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/projects"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        featured: z.boolean().optional().default(false),
        techs: z.array(z.string()).optional(),
        additionalLinks: z.array(z.object({
            label: z.string(),
            url: z.string().url(),
            platform: z.string().optional(),
        })).optional(),
    })
});

const publications = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/publications"
    }),
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        venue: z.string(),
        year: z.number(),
        date: z.coerce.date().optional(),
        url: z.string().url().optional(),
        pdf: z.string().url().optional(),
        abstract: z.string().optional(),
        tags: z.array(z.string()).optional(),
        huggingface: z.string().url().optional(),
        github: z.string().url().optional(),
    })
});

const site = defineCollection({
    loader: file("./src/content/site/config.json"),
    schema: z.object({
        name: z.string(),
        title: z.string().optional(),
        introduction: z.string().optional(),
        socialLinks: z.array(z.object({
            platform: z.string(),
            url: z.string().url(),
        })).optional(),
    })
});

export const collections = {
    blog,
    projects,
    publications,
    site,
};

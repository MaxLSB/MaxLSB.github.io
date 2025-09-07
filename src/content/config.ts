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

const experience = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/experience"
    }),
    schema: z.object({
        title: z.string(),
        logo: z.string(),
        description: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().optional().default(false),
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

const site = defineCollection({
    loader: file("./src/content/site/config.json"),
    schema: z.object({
        name: z.string(),
        title: z.string().optional(),
        introduction: z.string().optional(),
        sections: z.object({
            blog: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            projects: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
            experience: z.object({
                title: z.string(),
                viewAllText: z.string(),
            }),
        }).optional(),
        socialLinks: z.array(z.object({
            platform: z.string(),
            url: z.string().url(),
        })).optional(),
    })
});

const notes = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/notes"
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        category: z.string(),
        draft: z.boolean().optional().default(false),
    })
});

const bookmarks = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/bookmarks"
    }),
    schema: z.object({
        title: z.string(),
        type: z.enum(["article", "book", "video"]),
        author: z.string(),
        url: z.string().url(),
        publishedAt: z.coerce.date(),
        createdAt: z.coerce.date(),
        description: z.string().optional(),
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

export const collections = {
    blog,
    experience,
    projects,
    site,
    notes,
    bookmarks,
    publications,
}; 
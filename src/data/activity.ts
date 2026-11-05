import type { ImageMetadata } from "astro";
import emnlpPoster from "../assets/activity/emnlp-2026-poster.jpg";
import emnlpGroup from "../assets/activity/emnlp-2026-group.jpg";
import eaclPoster from "../assets/activity/eacl-2026-poster.jpg";

export interface ActivityPhoto {
  src: ImageMetadata;
  alt: string;
}

interface Activity {
  id: string;
  month: string;
  datetime: string;
  category: string;
  title: string;
  description: string;
  links: Array<{ label: string; url: string }>;
  photos?: ActivityPhoto[];
}

// Display order is editorial: newest activity first.
export const activity: Activity[] = [
  {
    id: "emnlp-2026",
    month: "Oct 2026",
    datetime: "2026-10",
    category: "Conference · Budapest, Hungary",
    title: "EMNLP 2026",
    description: "I presented Rethinking the Multilingual Reasoning Gap with Layer Swap at EMNLP 2026 in Budapest.",
    links: [{ label: "Read the paper", url: "/publications/rethinking-multilingual-reasoning-gap/" }],
    photos: [
      { src: emnlpPoster, alt: "Maxence standing beside his Layer Swap research poster at EMNLP 2026" },
      { src: emnlpGroup, alt: "Conference attendees together in front of a Budapest backdrop at EMNLP 2026" },
    ],
  },
  {
    id: "colgrep-agent-release",
    month: "Oct 2026",
    datetime: "2026-10-12",
    category: "Model release",
    title: "ColGrep-Agent-2B",
    description: "We released a small code-search agent that runs locally and helps coding agents find the right files with semantic search.",
    links: [
      { label: "Models", url: "https://huggingface.co/collections/lightonai/colgrep-agent" },
      { label: "Blog post", url: "https://huggingface.co/blog/lightonai/colgrep-agent" },
      { label: "Code", url: "https://github.com/lightonai/next-plaid" },
    ],
  },
  {
    id: "trustmi-preprint",
    month: "Oct 2026",
    datetime: "2026-10-05",
    category: "Preprint",
    title: "TrustMI: Causally controlling how assistants trust their users",
    description: "We study how activation steering can control an assistant’s trust in its users and how that trust shapes safety-relevant behavior.",
    links: [{ label: "Read the paper", url: "/publications/trustmi/" }],
  },
  {
    id: "semantic-search-preprint",
    month: "Oct 2026",
    datetime: "2026-10-04",
    category: "Preprint",
    title: "Small Agents with Semantic Search: Efficient Multilingual Code Localization",
    description: "We train compact agents to find relevant files with semantic search, improving code localization across programming languages while reducing latency and token usage.",
    links: [{ label: "Read the paper", url: "/publications/small-agents-semantic-search/" }],
  },
  {
    id: "emnlp-findings-acceptance",
    month: "Aug 2026",
    datetime: "2026-08",
    category: "Paper acceptance",
    title: "Accepted to Findings of EMNLP 2026",
    description: "Rethinking the Multilingual Reasoning Gap with Layer Swap was accepted to Findings of EMNLP 2026.",
    links: [{ label: "Read the paper", url: "/publications/rethinking-multilingual-reasoning-gap/" }],
  },
  {
    id: "luth-2-release",
    month: "Aug 2026",
    datetime: "2026-08-11",
    category: "Model release",
    title: "Luth-2",
    description: "We released Luth-2-0.8B and Luth-2-2B: small models specialized for French through supervised fine-tuning, reinforcement learning, and multi-domain on-policy distillation.",
    links: [
      { label: "Models", url: "https://huggingface.co/collections/kurakurai/luth-2" },
      { label: "Blog post", url: "https://huggingface.co/blog/MaxLSB/luth-2" },
      { label: "Code", url: "https://github.com/kurakurai/Luth-2" },
    ],
  },
  {
    id: "eacl-2026",
    month: "Mar 2026",
    datetime: "2026-03",
    category: "Conference · Rabat, Morocco",
    title: "EACL 2026",
    description: "I presented Luth, our work on efficient French specialization for small language models and cross-lingual transfer, at the EACL Student Research Workshop.",
    links: [{ label: "Read the paper", url: "/publications/luth/" }],
    photos: [
      { src: eaclPoster, alt: "Maxence beside the Luth research poster at the EACL 2026 Student Research Workshop" },
    ],
  },
];

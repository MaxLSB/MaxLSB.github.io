---
title: "Small Agents with Semantic Search: Efficient Multilingual Code Localization"
authors: ["Maxence Lasbordes", "Aarush Sinha", "Raphael Sourty", "Amélie Chatelain", "Djamé Seddah"]
venue: "Preprint"
date: "2026-10-04"
year: 2026
url: "https://arxiv.org/abs/2610.05099"
abstract: "Locating relevant files from natural-language requests is a core subtask for agents operating over code repositories. We investigate whether this task can be delegated to compact, specialized models to enable on-device search while reducing the token usage, latency, and inference cost of larger agents. We show that semantic search improves file localization, with gains in accuracy, cross-language transfer, and inference efficiency.

To study this setting, we introduce a training framework for file-localization agents built around ColGREP, a local semantic search tool based on late-interaction retrieval models. Our recipe combines weighted supervised fine-tuning on teacher trajectories, assigning turn-level credit based on retrieval outcomes, with reinforcement learning on localization quality.

We train three model families with fewer than two billion parameters to formulate search queries, inspect retrieved content, and identify relevant files. On localization tasks derived from SWE-bench Lite and Multi-SWE-bench Flash, ColGREP-equipped agents substantially improve over their base models and outperform corresponding GREP-based agents.

In addition to improving localization accuracy, ColGREP reduces mean end-to-end trajectory latency by 44.1% on CPU while using 29.1% fewer tokens, and enables better generalization to programming languages unseen during fine-tuning. These results suggest that compact, tool-specialized localization agents can provide an efficient interface between natural-language requests and large codebases."
tags: ["small language models", "semantic search", "code localization", "reinforcement learning", "multilingual"]
---

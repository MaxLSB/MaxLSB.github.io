---
title: "Rethinking the Multilingual Reasoning Gap with Layer Swap"
authors: ["Maxence Lasbordes", "Amélie Chatelain", "Djamé Seddah"]
venue: "EMNLP Findings"
date: "2026-05-26"
year: 2026
url: "https://arxiv.org/abs/2605.26735"
pdf: "https://arxiv.org/abs/2605.26735"
huggingface: "https://huggingface.co/collections/lightonai/multilingual-reasoning"
abstract: "Recent reasoning Large Language Models produce a chain-of-thought (CoT) predominantly in English, even when prompted in non-English languages. Prior work suggests that forcing the CoT to remain in the input language (native reasoning) substantially degrades performance relative to allowing the model to reason in English before answering in the input language (English-pivoted reasoning). However, most studies of this native reasoning gap rely on inference-time interventions or limited native-language training data. We revisit this comparison at a larger scale and under comparable supervision.

We construct long multilingual reasoning datasets across six languages (English, French, German, Spanish, Chinese and Swahili); fine-tune specialists in both native and English-pivoted regimes on top of Qwen/Qwen3-8B-Base, and evaluate across mathematics, science, general knowledge, and code. In this setting, the average native reasoning gap shrinks to 1.9-3.5% across the five non-English languages, considerably smaller than previously reported.

Weight-space analysis of the native specialists reveals aligned fine-tuning updates in the middle layers and divergence in the outer layers. This points to a largely language-agnostic reasoning core surrounded by language-specific layers. Exploiting this structure, we introduce a Layer Swap: transferring the English specialist's stronger reasoning mid-layers into each native specialist, closing most of the native reasoning gap across the five non-English languages while preserving CoT in the target language. We release all models and datasets."
tags: ["multilingual", "reasoning", "large language models", "model merging", "chain-of-thought"]
---

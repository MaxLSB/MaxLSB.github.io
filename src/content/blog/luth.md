---
title: "Luth: Efficient French Specialization for Small Language Models"
description: "We introduce two compact, non-reasoning causal LLMs, instruction-tuned entirely on French data, achieving state-of-the-art results for models of this size on several French benchmarks."
publishedAt: 2025-08-11
externalUrl: "https://huggingface.co/blog/MaxLSB/luth"
---

Large language models have long been trained on predominantly English corpora. This English-centric bias appears in practice: for example, CroissantLLM reports that all publicly available LLMs display a large performance disparity between English and non-English languages. A finding we were able to confirm through our own benchmark evaluations. Even widely spoken languages such as French remain underrepresented in the open-source NLP ecosystem, with comparatively fewer high-quality datasets and specialized models. These imbalances highlight the urgent need to extend robust NLP support to other languages. Recognizing such gaps, recent European initiatives (e.g. OpenLLM-France) have emerged to build large French corpora and specialized models, reflecting a growing commitment to language diversity.

In this context, we introduce two compact, non-reasoning causal LLMs, instruction-tuned entirely on French data:

* Luth-0.6B-Instruct
* Luth-1.7B-Instruct

We also present the Scholar dataset. Scholar was created to address the lack of high-quality scientific resources in French, drawing from Baccalauréat and Classes Préparatoires (CPGE) exam questions with detailed solutions, and covering a broad range of subjects. Both Scholar and additional curated French datasets from multiple public sources were combined to form the Luth-SFT dataset, a diverse and high-quality corpus designed for post-training in French instruction following. By focusing fine-tuning entirely on French instructions and dialogues, we confirm that specializing in a lower-resource language does not necessarily compromise overall capability.

By combining targeted fine-tuning with model merging, we achieved, as far as we know, SoTa results for models of this size on several French benchmarks, while maintaining competitive performance and even improving results on some English benchmarks, due to positive cross-lingual transfer. We also provide all code and resources openly on Github to support reproducibility and further research.

[Read the full article on Hugging Face →](https://huggingface.co/blog/MaxLSB/luth)

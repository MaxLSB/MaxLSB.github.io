---
title: "Splitformer: An improved early-exit architecture for automatic speech recognition on edge devices"
authors: ["Maxence Lasbordes", "Daniele Falavigna", "Alessio Brutti"]
venue: "EUSIPCO"
date: "2025-06-01"
year: 2025
url: "https://arxiv.org/abs/2506.18035"
pdf: "https://arxiv.org/abs/2506.18035"
huggingface: "https://huggingface.co/MaxLSB/Splitformer"
github: "https://github.com/augustgw/early-exit-transformer"
abstract: "The ability to dynamically adjust the computational load of neural models during inference in a resource-aware manner is crucial for on-device processing scenarios, which are often characterized by limited and time-varying computational resources. Early-exit architectures offer an elegant and effective solution: they can process inputs using only a subset of their layers, exiting at intermediate branches while discarding the uppermost layers.

In automatic speech recognition, another approach leverages memory-efficient architectures that apply variable frame rate analysis through downsampling and upsampling operations in the middle layers. This reduces the overall number of operations and significantly improves performance on established benchmarks. A notable example is the Zipformer. However, such architectures lack the modularity needed to incorporate early-exit branches.

To improve early-exit models, we propose introducing parallel layers in the architecture that process downsampled versions of the inputs. This approach leads to significant gains in speech recognition performance on standard benchmarks, with only a small increase in the total number of parameters and no impact on inference time."
tags: ["automatic speech recognition", "early-exit", "conformer", "edge devices", "machine learning"]
---


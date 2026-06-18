# MMA-82

**MMA-82** is a multi-domain benchmark for micro-action recognition and detection. It extends micro-action analysis from controlled laboratory settings to more realistic and diverse scenarios.

This repository hosts the project page for MMA-82:

- Project page: https://lpynow.github.io/MMA-82-AIM/
- Paper: https://arxiv.org/abs/2606.14096
- Dataset: https://huggingface.co/datasets/lpynow/MAR_plus_plus
- Code: https://github.com/LpyNow/MMA-82

## Overview

MMA-82 contains fine-grained whole-body micro-action annotations across multiple real-world domains, including laboratory interviews, street interviews, psychiatric patient interviews, and emotion-rich television videos.

Key statistics:

- 82 micro-action categories
- 79,574 annotated instances
- 454 subjects
- 4 data domains
- Recognition and multi-label temporal detection tasks

## Tasks

MMA-82 supports two main tasks:

- **Micro-Action Recognition**: classify trimmed video clips into micro-action categories.
- **Multi-label Micro-Action Detection**: localize and classify micro-actions in untrimmed videos.

The benchmark also includes in-domain, cross-domain, few-shot, and zero-shot evaluation settings.

## Documentation

This README only provides a brief introduction. Full dataset details, download instructions, annotations, benchmark protocols, and usage examples will be maintained in separate Markdown files.

## Citation

```bibtex
@misc{hao2026newmultidomainbenchmarkmicroaction,
  title={A New Multi-Domain Benchmark for Micro-Action Recognition and Detection},
  author={Hao, Yanbin and Liu, Pengyu and Wei, Xing and Yang, Xun and Guo, Dan and Wang, Meng},
  year={2026},
  eprint={2606.14096},
  archivePrefix={arXiv},
  primaryClass={cs.CV},
  url={https://arxiv.org/abs/2606.14096}
}
```

## Acknowledgments

The project page is adapted from the Academic Project Page Template and the Nerfies project page.

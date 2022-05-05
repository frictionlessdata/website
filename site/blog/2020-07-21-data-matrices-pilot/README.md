---
title: Clarifying the semantics of data matrices and results tables - a Frictionless Data Pilot
date: 2020-07-21
tags: ['pilot']
category:
image: /img/adoption/oxford-drg.png
description: This Pilot will focus on removing the friction in reported scientific experimental results by applying the Data Package specifications...
author: Philippe Rocca-Serra and Lilly Winfree 
---
*As part of the Frictionless Data for Reproducible Research project, funded by the Sloan Foundation, we have started a Pilot collaboration with the  Data Readiness Group  at the Department of Engineering Science of the University of Oxford; the group will be represented by Dr. Philippe Rocca-Serra, an Associate Member of Faculty. This Pilot will focus on removing the friction in reported scientific experimental results by applying the Data Package specifications.*

Publishing of scientific experimental results is frequently done in ad-hoc ways that are seldom consistent. For example, results are often deposited as idiosyncratic sets of Excel files or tabular files that contain very little structure or description, making them difficult to use, understand and integrate. Interpreting such tables requires human expertise, which is both costly and slow, and leads to low reuse.  Ambiguous tables of results can lead researchers to rerun analysis or computation over the raw data before they understand the published tables. This current approach is broken, does not fit users’ data mining workflows, and limits meta-analysis. A better procedure for organizing and structuring information would reduce unnecessary use of computational resources, which is where the Frictionless Data project comes into play. This Pilot collaboration aims to help researchers publish their results in a more structured, reusable way.

In this Pilot, we will use (and possibly extend) Frictionless [tabular data packages](https://specs.frictionlessdata.io/tabular-data-package/) to devise both generic and specialized templates. These templates can be used to unambiguously report experimental results. Our short term goal from this work is to develop a set of Frictionless Data Packages for targeted use cases where impact is high. We will first focus first on creating templates for statistical comparison results, such as differential analysis, enrichment analysis, high-throughput screens, and univariate comparisons, in genomics research by using the [STATO ontology](http://stato-ontology.org/) within tabular data packages. 

Our longer term goals are that these templates will be incorporated into publishing systems to allow for more clear reporting of results, more knowledge extraction, and more reproducible science.  For instance, we anticipate that this work will allow for increased consistency of table structure in publications, as well as increased data reuse owing to predictable syntax and layout. We also hope this work will ease creation of linked data graphs from table of results due to clarified semantics. 

An additional goal is to create code that is compatible with R’s [ggplot2 library](https://ggplot2.tidyverse.org/), which would allow for easy generation of data analysis plots.  To this end, we plan on working with R developers in the future to create a package that will generate Frictionless Data compliant data packages. 

This work has recently begun, and will continue throughout the year. We have already met with some challenges, such as working on ways to transform, or normalize, data and ways to incorporate RDF linked data (you can read our related [conversations in GitHub](https://github.com/frictionlessdata/forum/issues/18)). We are also working on how to define a ‘generic’ table layout definition, which is broad enough to be reused in as wide a range of situation as possible.

If you are interested in staying up to date on this work, we encourage you to check out these GitHub repositories: https://gitlab.com/datascriptor/datascriptor-fldatapackages and https://github.com/ISA-tools/frictionless-collab. Additionally, we will (virtually) be at the eLife Sprint in September to work on closely related work, which you can read about here: https://sprint.elifesciences.org/data-paper-skeleton-tools-for-life-sciences/.  Throughout this Pilot, we are planning on reaching out to the community to test these ideas and get feedback. Please contact us on GitHub or in [Discord](https://discord.gg/2UgfM2k) if you are interested in contributing.
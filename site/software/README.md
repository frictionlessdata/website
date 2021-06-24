---
title: Frictionless Software
---

# Frictionless Software

<big><strong>Open source software for working with data.</strong></big>

The Frictionless Data project provides a rich set of open source software for working with data. There are tools, a visual application, and software for many programming platforms.

:::tip
This document is an overview of the Frictionless Software - for more in-depth information, please click on one of the software items below and you will be redirected to the corresponding documentation site.
:::

## Software Toolkit

The Frictionless Data project provides various platforms and tools  for interacting with data. Here is a list of our core software:

<div class="main-section black-text">
<div class="features flex flex-row flex-wrap py-4">

<!-- Frictionless Framework -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://framework.frictionlessdata.io" target="_blank">
     <img src="/img/software/framework.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Frictionless Framework</h3>
   </a>
   <p>A framework to describe, extract, validate, and transform tabular data in <a href="https://framework.frictionlessdata.io/" target="_blank">CLI</a>, <a href="https://framework.frictionlessdata.io/" target="_blank">Python</a>, or <a href="https://github.com/frictionlessdata/frictionless-js" target="_blank">JavaScript</a>.</p>
 </div>
</div>

<!-- Frictionless Libraries -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://libraries.frictionlessdata.io" target="_blank">
     <img src="/img/software/libraries.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Frictionless Libraries</h3>
   </a>
   <p>A set of libraries implementing Frictionless Specifications for 10 programming languages.</p>
 </div>
</div>

<!-- Frictionless Components -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://components.frictionlessdata.io/" target="_blank">
     <img src="/img/software/components.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Frictionless Components</h3>
   </a>
   <p>A set of React components that are quick to integrate into your application for working with data and metadata.</p>
 </div>
</div>

<!-- Frictionless Repository -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://repository.frictionlessdata.io" target="_blank">
     <img src="/img/software/repository.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Frictionless Repository</h3>
   </a>
   <p>A Github Action allowing to validate tabular data on every commit to the repository.</p>
 </div>
</div>

<!-- DataHub.io -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://datahub.io/" target="_blank">
     <img src="/img/software/datahub.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>DataHub.io</h3>
   </a>
   <p>A SaaS platform built on Frictionless Data that allows discovering, publishing, and sharing data.</p>
 </div>
</div>

<!-- Livemark -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://livemark.frictionlessdata.io" target="_blank">
     <img src="/img/software/livemark.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Livemark</h3>
   </a>
   <p> Livemark is a static site generator that extends Markdown with interactive charts, tables, scripts, and more.</p>
 </div>
</div>

</div>
</div>

## Software Guide

Choosing a right tool for the job might be challenging. Here we provide some recommendations:

### Visual Interface

If you prefer to use visual interfaces Frictionless recommends:

- We're working on our brand-new Frictionless Application. It's going to be released in 2021 and while it's not available you can use [Data Package Creator](https://create.frictionlessdata.io/) as a data package visual interface and [Goodtables On-Demand](http://try.goodtables.io/) for data validation.
- For ensuring data quality of your data in on Github Frictionless provides [Frictionless Repository](https://repository.frictionlessdata.io/). It's easy to enable it for a repository and it provides visual quality reports and validation statuses on Github.
- For discovering, publishing, and sharing data we have [DataHub.io](https://datahub.io/). It's managed service so you can just sign-in and find, share and publish
quality data even though not having programming skills.

### Command-line Interface

If you like to write commands in the command-line interface:

- Frictionless provides [Frictionless Framework](https://framework.frictionlessdata.io/) that is shipped with an ultimate command-line interface to describe, extract, validate, and transform data. Using the "frictionless" command you can achive many goals without writing Python code.
- For data journalists and techical writers we have a project called [Livemark](https://livemark.frictionlessdata.io/). Using the "livemark" command you can publish a website powered by markdown articles.

### High-level Programming

If you feel comfortable with programming:

- The [Frictionless Framework](https://framework.frictionlessdata.io/) is way to go if you need general data programming in Python. You can describe, extract, validate, and transform your data. It's also possible to extend the framework adding new validation checks, transform steps, and many more.
- We have a lightweight version of the framework written in Javascript. [Frictionless Framework (JavaScript)](https://github.com/frictionlessdata/frictionless-js) is standardized "stream-plus-metadata" interface for accessing files and datasets, especially tabular ones (CSV, Excel).

### Low-level Programming

If you want to integrate Frictionless:

- Frictionless provides [Frictionless Libraries](https://libraries.frictionlessdata.io/) that is our standards implementations written in 10 languages. It provides metadata validation and editing among with other low-level data operations like reading or writing tabular files.
- For visual integrations we have [Frictionless Components](https://components.frictionlessdata.io/). This project exposes some usefull React components like a report or a schema that can be re-used in your application.

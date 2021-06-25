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

Here is a list of our core software:

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
   <p>A Github Action allowing you to validate tabular data on every commit to your repository.</p>
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
   <p> A static site generator that extends Markdown with interactive Frictionless charts, tables, scripts, and more.</p>
 </div>
</div>

</div>
</div>

## Which software is right for me?

Choosing the right tool for the job can be challenging. Here are our recommendations:

### Visual Interfaces

If you prefer to use a visual interface:

- **Frictionless Application (coming soon):** We're working on our brand-new Frictionless Application that will be released in 2021. Until then, you can use [Data Package Creator](https://create.frictionlessdata.io/) to create and edit data packages and [Goodtables On-Demand](http://try.goodtables.io/) for data validation.
- **Frictionless Repository:** For ensuring the quality of your data on Github, Frictionless provides [Frictionless Repository](https://repository.frictionlessdata.io/). This creates visual quality reports and validation statuses on Github everytime you commit your data.
- **Datahub:** For discovering, publishing, and sharing data we have [Datahub](https://datahub.io/) which is built on Frictionless software. Using this software as a service, you can sign-in and find, share, and publish quality data.

### Command-line Interfaces

If you like to write commands in the command-line interface:

- **Frictionless Framework:** For describing, extracting, validating, and transforming data, Frictionless provides the [Frictionless Framework's](https://framework.frictionlessdata.io/) command-line interface. Using the "frictionless" command you can achieve many goals without needing to write Python code.
- **Livemark:** For data journalists and technical writers we have a project called [Livemark](https://livemark.frictionlessdata.io/). Using the "livemark" command in the CLI you can publish a website that incorporates Frictionless functions and is powered by markdown articles.
- **Datahub:** Frictionless provides a command-line tool called [Data](https://datahub.io/docs/features/data-cli) which is an important part of the Datahub project. The "data" command is available for a JavaScript environment and it helps you to interact with data stored on Datahub.

### Programming Languages
If you want to use or write your own Frictionless code:

- **Frictionless Framework:** For general data programming in Python, the [Frictionless Framework](https://framework.frictionlessdata.io/) is the way to go. You can describe, extract, validate, and transform your data. It's also possible to extend the framework by adding new validation checks, transformation steps, etc. In addition, there is a lightweight version fo the framework written in [JavaScript](https://github.com/frictionlessdata/frictionless-js).
- **Frictionless Libraries:** For Frictionless functions in other languages like R or Java, we have [Frictionless Libraries](https://libraries.frictionlessdata.io/). Each library provides metadata validation and editing along with other low-level data operations like reading or writing tabular files.
- **Frictionless Components:** For adding Frictionless React components into your application, we created [Frictionless Components](https://components.frictionlessdata.io/). This project lets you integrate visual elements like validation reports, workflows, or schema editors into your application.

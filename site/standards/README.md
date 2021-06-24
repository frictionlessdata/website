---
title: Frictionless Standards
---

# Frictionless Standards

<big><strong>Lightweight yet comprehensive data specifications.</strong></big>

The Frictionless Data project is built on top of the Frictionless Standards, which are a set of specifications created to standardize different aspects of working with data. For example, you can use the Standards to describe a collection of data resources or to share information about data types.

:::tip
This document is an overview of the Frictionless Standards - for more in-depth information please visit [the specification site](https://specs.frictionlessdata.io/) or click on one of the standards below and you will be redirected to a corresponding specification.
:::

## Standards Toolkit

At the core of Frictionless is a set of patterns for describing data including Data Package (for datasets), Data Resource (for files) and Table Schema (for tables). There are others for specific use cases.

<div class="main-section black-text">
<div class="features flex flex-row flex-wrap py-4">

<!-- Data Package -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://specs.frictionlessdata.io/data-package/" target="_blank">
     <img src="/img/standards/data-package.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Data Package</h3>
   </a>
   <p>Describe a collection of data files in a single container called a package.</p>
 </div>
</div>

<!-- Data Resource -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://specs.frictionlessdata.io/data-resource/" target="_blank">
     <img src="/img/standards/data-resource.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Data Resource</h3>
   </a>
   <p>Describe and package a single data resource such as a table or file.</p>
 </div>
</div>

<!-- Table Schema -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://specs.frictionlessdata.io/table-schema/" target="_blank">
     <img src="/img/standards/table-schema.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Table Schema</h3>
   </a>
   <p>Declare a schema for tabular data that is expressible in JSON.</p>
 </div>
</div>

<!-- Fiscal Data Package -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://specs.frictionlessdata.io/fiscal-data-package/" target="_blank">
     <img src="/img/standards/fiscal-data-package.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Fiscal Data Package</h3>
   </a>
   <p>Fiscal Data Package is a format for publishing and consuming fiscal data.</p>
 </div>
</div>

<!-- Data Package Views -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://specs.frictionlessdata.io/views/" target="_blank">
     <img src="/img/standards/data-package-views.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Data Package Views</h3>
   </a>
   <p>Describe views of data - leverages existing specifications like Vega.</p>
 </div>
</div>

<!-- CSV Dialect -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://specs.frictionlessdata.io/csv-dialect/" target="_blank">
     <img src="/img/standards/csv-dialect.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>CSV Dialect</h3>
   </a>
   <p>Describe the various dialects of CSV files in a language agnostic manner.</p>
 </div>
</div>

</div>
</div>

## Standards Guide

If you're looking for integrating a data standard. Here we provide some recommendations:

### Set of Files

If you have more than one file:

- Frictionless provides [Data Package](https://specs.frictionlessdata.io/data-package/) for describing datasets. It's a simple container format for describing a coherent collection of data in a single "package". It provides the basis for convenient delivery, installation and management of datasets.
- Frictionless provides [Fiscal Data Package](https://specs.frictionlessdata.io/fiscal-data-package/). It's a lightweight and user-oriented format for publishing and consuming fiscal data. Fiscal data packages are made of simple and universal components.

### Individual File

If you need to describe an individual file:

- Frictionless provides [Data Resources](https://specs.frictionlessdata.io/data-resource/) for describing files. It's a simple format to describe and package a single data resource such as a individual table or file. It might be extended for specific use cases.
- There is a Data Resource extension called [Tabular Data Resource](https://specs.frictionlessdata.io/tabular-data-resource/). It's simple format to describe a single tabular data resource such as a CSV file. It includes support both for metadata such as author and title and a schema to describe the data.

### Similar Tabular Files

If you need to describe a class of tabular files:

- Frictionless provides [Table Schema](https://specs.frictionlessdata.io/table-schema/). It's a simple format to declare a schema for tabular data. The schema is designed to be expressible in JSON. You can have a schema as a independent metadata or use it with Tabular Data Resource.
- Frictionless provides [CSV Dialect](https://specs.frictionlessdata.io/csv-dialect/). It defines a simple format to describe the various dialects of CSV files in a language agnostic manner. It's important because CSV files might be published in different forms making it harder to read it without errors.

---
title: Frictionless Standards
---

# Frictionless Standards

<big><strong>Lightweight yet comprehensive data specifications.</strong></big>

The Frictionless Data project is built on top of the Frictionless Standards, which are a set of specifications created to standardize different aspects of working with data. For example, you can use the Standards to describe a collection of data files or to share information about data types.

:::tip
This document is an overview of the Frictionless Standards - for more in-depth information please visit [the specification site](https://specs.frictionlessdata.io/) or click on one of the standards below and you will be redirected to a corresponding specification.
:::

## Standards Toolkit

At the core of Frictionless is a set of patterns for describing data including Data Package (for datasets), Data Resource (for files), Table Schema (for tables), and also domain-specific extensions.

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
   <p>Describe and publish tabular fiscal data.</p>
 </div>
</div>

<!-- Data Package Views -->
<div class="w-full md:w-1/3 feature flex justify-center">
 <div class="px-8 text-center">
   <a href="https://specs.frictionlessdata.io/views/" target="_blank">
     <img src="/img/standards/data-package-views.png" style="width: 200px; border:dashed 1px #555; padding: 10px; border-radius: 10px;" />
     <h3>Data Package Views</h3>
   </a>
   <p>Describe views of data by leveraging existing specifications like Vega.</p>
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

## Which standard is right for me?

To help you pick a standard to use, we've categorized them according to how many files you are working with.

### Collection of Files

If you have more than one file:

- **Data Package**: Use a [Data Package](https://specs.frictionlessdata.io/data-package/) for describing datasets of any file format. Data Package is a basic container format for describing a collection of data in a single "package". It provides a basis for convenient delivery, installation and management of datasets.
- **Fiscal Data Package**: For fiscal data, use a [Fiscal Data Package](https://specs.frictionlessdata.io/fiscal-data-package/). This lightweight and user-oriented format is for publishing and consuming fiscal data. It concerns with how fiscal data should be packaged and providing means for publishers to best convey the meaning of the data - so it can be optimally used by consumers.

### Individual File

If you need to describe an individual file:

- **Data Resource**: Use [Data Resource](https://specs.frictionlessdata.io/data-resource/) for describing individual files. Data Resource is a format to describe and package a single data resource of any file format, such as an individual table or file. It can also be extended for specific use cases.
- **Tabular Data Resource**: For tabular data, use the Data Resource extension called [Tabular Data Resource](https://specs.frictionlessdata.io/tabular-data-resource/). Tabular Data Resource describes a single *tabular* data resource such as a CSV file. It includes support for metadata and schemas to describe the data content and structure.
- **Table Schema**: To describe only the schema of a tabular data file, use [Table Schema](https://specs.frictionlessdata.io/table-schema/). Table Schema is a format to declare a schema for tabular data. The schema is designed to be expressible in JSON. You can have a schema as independent metadata or use it with a Tabular Data Resource.
- **CSV Dialect**: To specify the CSV dialect within a schema, use [CSV Dialect](https://specs.frictionlessdata.io/csv-dialect/). This defines a format to describe the various dialects of CSV files in a language agnostic manner. This is important because CSV files might be published in different forms, making it harder to read the data without errors. CSV Dialect can be used with a Tabular Data Resource to provide additional information.

<a href="https://specs.frictionlessdata.io/" target="_blank">
  <img src="/img/standards/specs-diagram.png" />
</a>

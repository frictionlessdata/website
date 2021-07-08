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

## Standards Overview

For better understanding of the Frictionless Standards and relations among them please read a short standards overview written to introduce the concept of Data Packaging:

### Data Package

Data Package is a simple **container** format used to describe and package a collection of data. The format provides a simple contract for data interoperability that supports frictionless delivery, installation and management of data.

Data Packages can be used to package any kind of data. At the same time, for specific common data types such as tabular data it has support for providing important additional descriptive metadata -- for example, describing the columns and data types in a CSV.

The following core principles inform our approach:

* Simplicity
* Extensibility and customisation by design
* Metadata that is human-editable and machine-usable
* Reuse of existing standard formats for data
* Language, technology and infrastructure agnostic

### Suite of Specifications

Over time the single Data Package spec has evolved into a suite of specs -- partly through componentization whereby the original spec is in several components and partly through extension.

The main specifications are:

* [Data Package specification][dp], a simple format for packaging data for sharing between tools and people
* [Tabular Data Package][tdp], a format for packaging tabular data that builds on Data Package and which uses:
  * [Table Schema][ts], a specification for defining a *schema* for tabular data
  * [CSV Dialect Description Format][spec-csvddf] (CSV-DDF), a specification for defining a *dialect* for CSV data.

### How Do These Specifications Relate?

A **Data Package** can "contain" any type of file. A **Tabular Data Package** is a type of Data Package specialized for tabular data and which "contains" one or more CSV files.  In a Tabular Data Package, each CSV must have a *schema* defined using **Table Schema** and, optionally, a *dialect* defined using **CSV-DDF**. An application or library that consumes Tabular Data Packages therefore must be able to understand not only the full Data Package specification, but also Table Schema and CSV-DDF.

<a href="https://specs.frictionlessdata.io/" target="_blank">
  <img src="/img/standards/specs-diagram.png" />
</a>

For more information on each specification, see below:

- [Data Package Specification][spec-dp]
- [Tabular Data Package Specification][spec-tdp]
- [Table Schema Specification][spec-ts]
- [CSV Dialect Specification][spec-csvddf]

[dp]: /tooling/data-package-tools
[dp-main]: /data-package
[tdp]: /blog/2016/07/21/publish-tabular/
[ts]: /tooling/table-schema-tools
[ts-types]: https://specs.frictionlessdata.io/table-schema/#field-descriptors
[csv]: /blog/2018/07/09/csv/
[json]: http://en.wikipedia.org/wiki/JSON

[spec-dp]: https://specs.frictionlessdata.io/data-package/
[spec-tdp]: https://specs.frictionlessdata.io/tabular-data-package/
[spec-ts]: https://specs.frictionlessdata.io/table-schema/
[spec-csvddf]: https://specs.frictionlessdata.io/csv-dialect/

[publish]: /docs/publish/
[pub-tabular]: /blog/2016/07/21/publish-tabular/
[pub-online]: /blog/2016/08/29/publish-online/
[pub-any]: /blog/2016/07/21/publish-any/
[pub-geo]: /blog/2016/04/30/publish-geo/
[pub-faq]: /blog/2016/04/20/publish-faq/

[dp-creator]: http://create.frictionlessdata.io
[dp-viewer]: http://create.frictionlessdata.io

### Getting Started with Data Packaging

Creating a Data Package is very easy: all you need to do is put a `datapackage.json` "descriptor" file in the top-level directory of your set of data files.

A minimal example Data Package would look like this on disk:

```
datapackage.json

# Data file(s) (CSV in this case but could be any type of data).
# Data files may go either in data subdirectory or in the main directory
data
data/more-data.csv

# (Optional!) A README (in markdown format)
README.md
```

Any number of additional files such as more data files, scripts (for processing or analyzing the data) and other material may be provided but are not required.

:::tip
There is a full **[RFC-style specification of Data Package format](https://specs.frictionlessdata.io/data-package/)** to complement this quick introduction.

The [Tabular Data Package](/blog/2016/07/21/publish-tabular/) format extends Data Packages for tabular data. It supports providing additional information such as data types of columns.
:::

#### datapackage.json

`datapackage.json` file is the basic building block of a Data Package and is the only required file. It provides:

* General metadata such as the name of the package, its license, its publisher and source, etc
* A "manifest" in the the form of a list of the data resources (data files) included in this data package along with information on those files (e.g. schema)

As its file extension indicates, it must be a [JSON][json] file. Here's a very minimal example of a `datapackage.json` file:

```json
{
  "name": "a-unique-human-readable-and-url-usable-identifier",
  "title": "A nice title",
  "licenses" : [ ... ],
  "sources" : [...],
  "resources": [{
    // see below for what a resource descriptor looks like
  }]
}
```

**Note:** a complete list of potential attributes and their meaning can be found in the [full Data Package spec][spec].

[spec]: https://specs.frictionlessdata.io/data-package/

**Note:** the Data Package format is **extensible**: publishers may add their own additional metadata as well as constraints on the format and type of data by adding their own attributes to the `datapackage.json`.

Here is a much more extensive example of a datapackage JSON file:

```json
{
  "name": "a-unique-human-readable-and-url-usable-identifier",
  "datapackage_version": "1.0-beta",
  "title": "A nice title",
  "description": "...",
  "version": "2.0",
  "keywords": ["name", "My new keyword"],
  "licenses": [{
    "url": "http://opendatacommons.org/licenses/pddl/",
    "name": "Open Data Commons Public Domain",
    "version": "1.0",
    "id": "odc-pddl"
  }],
  "sources": [{
    "name": "World Bank and OECD",
    "web": "http://data.worldbank.org/indicator/NY.GDP.MKTP.CD"
  }],
  "contributors":[{
    "title": "Joe Bloggs",
    "email": "joe@bloggs.com",
    "web": "http://www.bloggs.com"
  }],
  "maintainers": [{
    // like contributors
  }],
  "publishers": [{
    // like contributors
  }],
  "dependencies": {
    "data-package-name": ">=1.0"
  },
  "resources": [
    {
      // ... see below ...
    }
  ],
  // extend your datapackage.json with attributes that are not
  // part of the data package spec
  // we add a views attribute to display Recline Dataset Graph Views
  // in our Data Package Viewer
  "views" : [
    {
      ... see below ...
    }
  ],
  // you can add your own attributes to a datapackage.json, too
  "my-own-attribute": "data-packages-are-awesome",
}
```

#### Resources

You list data files in the resources entry of the datapackage.json.

```json
  {
    // one of url or path should be present
    "path": "relative-path-to-file", // e.g. data/mydata.csv
    "url": "online url" // e.g http://mysite.org/some-data.csv
  }
```

#### Views

The [Data Package Viewer](http://data.okfn.org/tools/view) will display a [Recline Dataset Graph View](http://okfnlabs.org/recline/docs/views.html) when a `views` entry is provided in the datapackage.json.

* Include the `resourceName` property if you have more than one resource and want to display a graph for a resource other than the first resource

* In the `state` property
  * the `group` property is the name of the resource field whose values will be used on the y axis in the `bars` graph type and the x axis in all other graph types
  * the `series` property is an array of one or more names of resource fields whose values will be used on the x axis in the `bars` graph type and the y axis in all other graph types
  * the `graphType` may be one of `lines-and-points`, `lines`, `points`, `bars`, or `columns`

```json
{
  "id": "graph",
  "label": "Graph",
  "resourceName": "a-resource-name",
  "type": "Graph",
  "state": {
    "group": "a-resource-field-name",
    "series": [
      "another-resource-field-name"
    ],
    "graphType": "lines-and-points"
  }
}
```

#### Examples

Many exemplar data packages can be found on [datahub][datahub]. Specific examples:

##### World GDP

A Data Package which includes the data locally in the repo (data is CSV).

<http://datahub.io/core/gdp>

Here's the `datapackage.json`:

https://pkgstore.datahub.io/core/gdp/9/datapackage.json

##### S&P 500 Companies Data

This is an example with more than one resource in the data package.

<http://datahub.io/core/s-and-p-500-companies>

Here's the `datapackage.json`:

https://pkgstore.datahub.io/core/s-and-p-500-companies/10/datapackage.json

##### GeoJSON and TopoJSON

You can see an example on how to package GeoJSON files [here](https://datahub.io/examples/geojson-tutorial).

DataHub does not currently support the TopoJSON format. You can use “Vega Graph Spec” and display your TopoJSON data using the [Vega specification][vega]. See an example [here](https://datahub.io/examples/vega-views-tutorial-topojson).

[datahub]: https://datahub.io/core
[vega]: https://vega.github.io/vega/
[ISO 3166-2 country codes]: https://github.com/datasets/country-codes

[dp]: /products/data-package
[dp-main]: /data-package
[tdp]: /blog/2016/07/21/publish-tabular/
[ts]: /products/table-schema/
[ts-types]: https://specs.frictionlessdata.io/table-schema/#field-descriptors
[csv]: /blog/2018/07/09/csv/
[json]: http://en.wikipedia.org/wiki/JSON

[spec-dp]: https://specs.frictionlessdata.io/data-package/
[spec-tdp]: https://specs.frictionlessdata.io/tabular-data-package/
[spec-ts]: https://specs.frictionlessdata.io/table-schema/
[spec-csvddf]: https://specs.frictionlessdata.io/csv-dialect/

[publish]: /docs/publish/
[pub-tabular]: /blog/2016/07/21/publish-tabular/
[pub-online]: /blog/2016/08/29/publish-online/
[pub-any]: /blog/2016/07/21/publish-any/
[pub-geo]: /blog/2016/04/30/publish-geo/
[pub-faq]: /blog/2016/04/20/publish-faq/

[dp-creator]: http://create.frictionlessdata.io
[dp-viewer]: http://create.frictionlessdata.io

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

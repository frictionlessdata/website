---
title: Table Schema
tagline: A simple and intuitive way to declare a schema for your tabular data that works with your existing tools.
layout: product
---
 
**{{ $page.frontmatter.tagline }}**
 
Table Schema provides a way to declare types, formats, and constraints for fields in a tabular data set. The data set can be in any format, from a simple text file to a database, and the Table Schema descriptor can be represented as JSON or any other simple data format that a programming language supports.
 
Working with data invariably means moving data between systems and serialization formats. The lifecycle of a dataset may mean it moves from Excel, to CSV, to a database, to a search index, to a visualization framework, and so on.
 
Table Schema provides a way to reliably declare the shape of the data across such a variety of storage and display platforms in a completely platform-agnostic way. Data described by Table Schema can be validated for consistency and quality.
 
Table Schema is part of [Frictionless Data](https://frictionlessdata.io), a project funded and maintained by the [Open Knowledge Foundation](https://okfn.org) and [Datopian](https://datopian.com).
 
*Affordances for data described by Table Schema*
 
- Data quality
- Data interoperability
 
[IMAGE]
 
## Check it out
 
- [Read the specification](https://frictionlessdata.io/specs/table-schema/)
- [Download for your programming language](https://github.com/frictionlessdata?utf8=✓&q=tableschema&type=&language=)
 
## Where it is used
 
Table Schema is a useful solution at various stages of data work. Ensuring your data is well-formed towards a set of expectations is critical to doing meaningful work with data, and is exactly the role Table Schema can play.
 
[HEXAGONS: highlight the steps that are related to this solution]
 
In addition to the core software we develop for Frictionless Data, Table Schema has seen adoption among widely used tools for working with data such as [Pandas](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.io.json.build_table_schema.html).
 
## A simple example
 
```
{
  "name": "my-table-schema",
  "fields": [
    {
      "name": "age",
      "type": "integer",
    },
    {
      "name": "vocation",
      "type": "string"
    }
  ]
}
```

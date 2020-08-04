---
title: GoodTables
tagline: A simple yet powerful tool to ensure the quality of tabular data, in Python and on the command line.
description: A simple yet powerful tool to ensure the quality of tabular data, in Python and on the command line.
hexagon: 
github: goodtables-py, goodtables.io, goodtables-ui, goodtables-js
layout: product
---
 
GoodTables is a tool to validate tabular data, for use on the command line and as a Python library. It can check the structure of your data (e.g. all rows have the same number of columns), and its contents (e.g. all dates are valid). Internally, it uses the [Data Quality Spec](https://github.com/frictionlessdata/data-quality-spec) for common tabular data errors, and it is completely customizable with an [API for creating custom checks](https://github.com/frictionlessdata/goodtables-py#check). GoodTables also supports data described by [Data Package](/tooling/data-package-tools/) and [Table Schema](/tooling/table-schema-tools/).
 
Work with data often involves ensuring that data is interoperable between different systems. Key to interoperability are assurances as to what the data looks like, and conformation that a payload conforms to these expectations. That is exactly the role that GoodTables plays - ensuring your data exactly matches your expectations, and giving helpful, specific insight into where and how it does not.
 
GoodTables is part of [Frictionless Data](https://frictionlessdata.io), a project funded and maintained by the [Open Knowledge Foundation](https://okfn.org) and [Datopian](https://datopian.com).
 
*Affordances in data work with goodtables*
 
- Data quality
- Data interoperability
- Actionable reports
 
## Check it out
 
- [Get the code](https://github.com/frictionlessdata/goodtables-py/)
 
## Where it is used
 
GoodTables is a useful solution when building data pipelines, and particularly for data that goes through human and machine processing.
 
## A simple example
 
In Python
 
```
import goodtables
 
report = goodtables.validate('invalid.csv')
```
 
Also as a CLI
 
```
$ goodtables data.csv
```

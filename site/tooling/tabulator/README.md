---
title: Tabulator
tagline: A consistent interface for reading and writing streams of tabular data, in Python and on the command line.
description: A consistent interface for reading and writing streams of tabular data, in Python and on the command line.
hexagon: 
github: tabulator-py
layout: product
---
 
Data comes in a multitude of formats. When dealing with data flows from heterogeneous sources, we often work with data that is human generated as well as machine generated, and need to handle a range of issues related to encoding, formatting, and markup. Tabulator is a tool designed exactly for this problem. It provides great abstractions for just about any Tabulator data source, smoothing over the inconsistencies and idiosyncrasies and gives you a clean, structured stream of data to work with. From Excel to SQL, from CSV to S3, Tabulator makes working with raw data a breeze.
 
Tabulator is part of [Frictionless Data](https://frictionlessdata.io), a project funded and maintained by the [Open Knowledge Foundation](https://okfn.org) and [Datopian](https://datopian.com).
 
*Affordances in data work with Tabulator*
 
- Simpler data pipelines
- Focus on data, not on structure and format of the source
 
[IMAGE]
 
## Check it out
 
- [Get the code](https://github.com/frictionlessdata/tabulator-py)
 
## Where it is used
 
Tabulator is useful as the core building block for your data fetching and data processing code.
 
Tabulator is used at the core of several other Frictionless Data tools, such as [GoodTables](/tooling/goodtables/) and [DataFlows](https://www.dataflows.org/).
 
## A simple example
 
In Python
 
```
import tabulator
 
with tabulator.Stream('data.csv', headers=1) as stream:
    stream.headers # [header1, header2, ..]
    for row in stream:
        print(row)  # [value1, value2, ..]
```
 
Also as a CLI
 
```
$ tabulator https://github.com/frictionlessdata/tabulator-py/raw/4c1b3943ac98be87b551d87a777d0f7ca4904701/data/table.csv.gz
```

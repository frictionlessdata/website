# Guide

:::tip
This guide is still early-stage. We are still bringing consolidating our existing materials into one place here. Thus, in addition to this guide, you may want to check out these other resources:

* [Introduction to Table Schema][ts]
* [Introduction to Data Package][dp]
:::

[ts]: /table-schema/
[dp]: /data-package/

## Introduction

### What is Frictionless Data?

Frictionless Data is a progressive framework for building data infrastructure -- data management, integration, flows etc.

Unlike some other frameworks, Frictionless is designed from the ground up to be both incrementally adoptable and "progressive", that is to work with, build on and enhance your existing data and tooling (rather than replacing it). It is also extremely lightweight!

The core of the framework is a suite of ultra-simple patterns to describe and organize data so that it can flow fluidly between tools and across teams. The patterns have been refined to zen-like simplicity and can be picked up in minutes and immediately integrated with other libraries or existing projects.

<!--
[These patterns are language and platform agnostic so you can use and integrate them with your favourite language, tool or platform. We also have a rich set of libraries and tooling to help you do that e.g. bindings in Python, R, Ruby, Go, Swift ...]
-->

At the same time, Frictionless Data is also perfectly capable of powering sophisticated data workflows when used in combination with modern tooling and supporting libraries. This is possible because the framework follow an "atomic" design"[^atomic]: you can both use just what you need *and* combine elements together to make more complex solutions.

If you’d like to learn more about Frictionless before diving in, we created a video walking through the core principles.

<!-- TODO: insert video -->

<!-- TODO: If you are an experienced data developer [engineer] and want to know how Frictionless compares to other libraries/frameworks, check out the Comparison with Other Frameworks and Tools. -->

[^atomic]: We have borrowed the concept of Atomic Data from the web design field. For us it means, tools or specs are a) broken down into minimum viable components b) these components are combinable into larger and more complex components and systems. The Atomic approach is what underpins the incremental adoptablity and the ability to scale from the simplest sitution to highly complex data engineering.

### Getting Started

:::warning
The official guide assumes some basic knowledge about data. If you are totally new to data work -- for example, you haven't heard of CSV or JSON or have never used a spreadsheet, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back! A good starting point would be the first module at [School of Data][scoda].
:::

[scoda]: https://schoolofdata.org/

The easiest way to try out Frictionless is using the Hello World example. Feel free to open it in another tab and follow along as we go through some basic examples. Or, you can create your own CSV file.

<!--
[TODO: maybe install a tool to play along - either the CLI or maybe in python, JS or R. However, worry that this always a bit of an obstacle for people]
-->

<!--
### Declarative Data
-->

### Declarative Data

At the core of Frictionless is a system that enables us to declaratively describe data (and datasets) using a straightforward syntax.

### Table Schema

Table Schema is a specification for providing a “schema” (similar to a [database schema](https://en.wikipedia.org/wiki/Database_schema)) for tabular data. This information includes the expected type of each value in a column *(“string”, “number”, “date”, etc.)*, constraints on the value *(“this string can only be at most 10 characters long”)*, and the expected format of the data *(“this field should only contain strings that look like email addresses)*. Table Schema can also specify relations between tables.

Here's our simple `helloworld.csv` CSV (you can paste this in a local file):

```csv
Name,Email,Age
Jill,jill@foo.com,25
Jack,jack@bar.com,33
```

As a table, it looks like this:

| Name | Email        | Age |
|------|--------------|-----|
| Jill | jill@foo.com |  25 |
| Jack | jack@bar.com |  33 |

And here's a **Table Schema** (in JSON) to describe that file. Note that a minimum age of 18 is specified in the `Age` column and a string that looks like an email address must be present in the `Email` column:

```json
{
  "fields": [
    {
      "name": "Name",
      "type": "string",
      "description": "User’s name"
    },
    {
      "name": "Email",
      "type": "string",
      "format": "email",
      "description": "User’s email"
    },
    {
      "name": "Age",
      "type": "integer",
      "description": "User’s age",
      "constraints": {
        "minimum": 18
      }
    }
  ]
}
```

Copy and paste this into a file called tableschema.json next to your CSV file.

Well done 👏 You have just created your very first Frictionless Data!

<!--
TODO: mention you can use Frictionless with other (non-tabular) types of data ...

TODO: maybe a discussion of why this vs anything else ...
-->

<!--
### Validating Your Data

? Validate example using runkit to do JS ... (also python examples)

Have an example where it is invalid ...

Point to GoodTables ...

### Resources and Packages

-->

<!--

### Next ...

TODO: what other things to do ... Here are some ideas 

* pushing e.g. to db
* inference (of table schema and package)
* displaying / presenting data
* views (graphs etc)
* flows (? - this is a whole section)
* pulling e.g. from a spreadsheet
* publishing

-->


---
title: Publish Any Kind of Data as a Data Package
pub_date: 2016-07-21
doc_category: publishing-data
sidebar: false
---


You can publish **all and any kind of data** as Data packages. It's as simple as 1-2-3:

1. Get your data together
2. Add a `datapackage.json` file to wrap those data files up into a useful
   whole (with key information like the license, title and format)
3. [optional] Share it with others, for example, by uploading the data package online

## 1. Get your data together

Get your data together in one folder (you can have data in subfolders of that
folder too, if you wish).

## 2. Add a datapackage.json file

The `datapackage.json` is a small file in [JSON][json] format that describes
your dataset. You'll need to create this file and then place it in the
directory you created.

!!! *Don't worry if you don't know what JSON is - we provide some tools such as [Data Package Creator][dp-creator] that can
automatically create your this file for you.*

There are 2 options for creating the `datapackage.json`:

**Option 1**: Use the online [datapackage.json creator tool][dp-creator] - just
answer a few questions and give it your data files and it will spit out a
datapackage.json for you to include in your project

**Option 2**: Do it yourself - if you're familiar with JSON you can just create
this yourself. Take a look at the [Data Package][dp] tutorial.

## 3. Put the data package online

See the [step-by-step instructions for putting your Data Package online][pub-online].

!! Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive [Frictionless Data Field Guide][field-guide].


[dp]: /docs/data-package
[dp-main]: /data-packages
[tdp]: /docs/tabular-data-package/
[ts]: /docs/table-schema/
[ts-types]: /specs/table-schema/#field-descriptors
[csv]: /docs/csv/
[json]: http://en.wikipedia.org/wiki/JSON

[spec-dp]: /specs/data-package/
[spec-tdp]: /specs/tabular-data-package/
[spec-ts]: /specs/table-schema/
[spec-csvddf]: /specs/csv-dialect/

[publish]: /docs/publish/
[pub-tabular]: /docs/publish-tabular/
[pub-online]: /docs/publish-online/
[pub-any]: /docs/publish-any/
[pub-geo]: /docs/publish-geo/
[pub-faq]: /docs/publish-faq/
[field-guide]: /field-guide

[tools]: /software/
[dp-creator]: http://create.frictionlessdata.io
[dp-viewer]: http://create.frictionlessdata.io
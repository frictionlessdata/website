---
title: Publishing Geospatial Data as a Data Package
date: 2016-04-30
tags:
category: publishing-data
---
    
Publishing your Geodata as Data Packages is very easy.

You have two options for publishing your geodata:

* **Geo Data Package** (Recommended). This is a basic Data Package with the
  requirement that data be in GeoJSON and with a few special additions to the
  metadata for geodata. See the next section for instructions on how to do
  this - test
* **Generic Data Package**. This allows you to publish geodata in any kind of
  format (KML, Shapefiles, Spatialite etc). If you choose this option you will
  want to follow the standard [instructions for packaging any kind of data as a
  Data Package][pub-any].

We recommend Geo Data Package if that is possible as it makes it much easier
for you to use 3rd party tools with your Data Package. For example, the [data
package viewer][dp-viewer] on this site will automatically preview a Geo Data Package.

::: tip
*Note: this document focuses on *vector* geodata &ndash; i.e. points, lines polygons etc (not
imagery or raster data).*
:::


## Geo Data Packages

### Examples

#### [Traffic signs of Hansbeke, Belgium](https://github.com/peterdesmet/traffic-signs-hansbeke)

Example of using `point` geometries with described properties in real world situation.

[View it with the Data Package Viewer][view-2]

[view-2]: http://data.okfn.org/tools/view?url=https%3A%2F%2Fgithub.com%2Fpeterdesmet%2Ftraffic-signs-hansbeke

#### [GeoJSON example on DataHub](https://datahub.io/examples/geojson-tutorial)

#### See more Geo Data Packages in the [example data packages](https://github.com/frictionlessdata/example-data-packages) GitHub repository.

::: tip
Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive [Frictionless Data Field Guide][field-guide].
:::

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

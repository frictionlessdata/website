---
title: Data Package
tagline: A simple and intuitive way to define and ship metadata with your data that works with your existing tools.
image: /data-package-diagram.png
hexagon: Data Audit, Data API
github: datapackage-py, datapackage-js, datapackage-ui, datapackage-php, datapackage-r, datapackage-rb, datapackage-java, DataPackage.jl, datapackage-go, datapackage-clj
layout: product
---

Data Package provides a way to declare metadata for one or many datasets. The Data Package descriptor can be represented as JSON or any other simple data format that a programming language supports.
 
Metadata about a dataset is arguably as important as the data itself. Metadata allows us to understand something about the context of the data, and this is critical to our understanding of what we know about the data we are working with (is it from a reliable source?), and how it can be used.
 
Data Package provides a way to reliably provide metadata about a dataset, in a simple key-value format that can be used across both consumer and professional data platforms.
 
Data Package is thoroughly extensible. For example, [Tabular Data Package](https://frictionlessdata.io/specs/tabular-data-package/) is a specification that builds on Data Package and Table Schema to provide a platform-agnostic approach to storing metadata and type information for collections of tabular data sets. [Read more](https://frictionlessdata.io/specs/tabular-data-package/).
 
Data Package is part of [Frictionless Data](https://frictionlessdata.io), a project funded and maintained by the [Open Knowledge Foundation](https://okfn.org) and [Datopian](https://datopian.com).
 
*Affordances for data described by Data Package*
 
- Metadata conventions
- Data provenance
- Relationships between datasets
 
## Check it out
 
- [Read the specification](https://frictionlessdata.io/specs/data-package/)
- [Download for your programming language](https://github.com/frictionlessdata?utf8=✓&q=datapackage&type=&language=)
 
See the following for extensions to the core Data Package specification:
 
- [Tabular Data Package](https://frictionlessdata.io/specs/tabular-data-package/)
- [Data Package Views](https://frictionlessdata.io/specs/views/)
- [Data Package Identifier](https://frictionlessdata.io/specs/data-package-identifier/)
 
## Where it is used
 
Data Package is a useful solution at various stages of data work. From the moment data is sourced, or created, it is useful to be able to declare and co-locate information such as creation date, source location, and so on. As data moves through a workflow, additional useful metadata can be captured about how transformations are made, or how the data is contextualized with additional data sources.
 
[HEXAGONS: highlight the steps that are related to this solution]
 
In addition to the core software we develop for Frictionless Data, Data Package has seen adoption as a data and metadata format in tools such as [Kaggle](https://www.kaggle.com/docs/api).
 
## A simple example
 
```
{
  "name": "my-data-package",
  "resources": [
    {
      "name": "my-data-package-resource",
      "path": "my-file.json"
    }
  ]
}
```

---

<label for="data-package-language">Choose your programming language:</label>
<select id="data-package-language">
	<option value="clojure">Clojure</option>
	<option value="go">Go</option>
	<option value="java">Java</option>
	<option value="javascript">Javascript</option>
	<option value="julia">Julia</option>
	<option value="matlab">MATLAB</option>
	<option value="php">PHP</option>
	<option value="python" selected>Python</option>
	<option value="r">R</option>
	<option value="ruby">Ruby</option>
</select>

```python
from datapackage import Package

package = Package('datapackage.json')
package.get_resource('resource').read()
```

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/lWHKVXxuci0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

[Full Specification](/specs/data-package)

[Tutorials](/blog/data-package)

[How to write a Data Package](/blog/2018-03-07-well-packaged-datasets)

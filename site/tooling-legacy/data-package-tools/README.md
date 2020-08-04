---
title: Data Package Tools
tagline: A simple and intuitive way to define and ship metadata with your data that works with your existing tools.
description: A simple and intuitive way to define and ship metadata with your data that works with your existing tools.
image: /data-package-diagram.png
hexagon: Data Audit, Data API
github: datapackage-py, datapackage-js, datapackage-ui, datapackage-php, datapackage-r, datapackage-rb, datapackage-java, DataPackage.jl, datapackage-go, datapackage-clj
layout: product
---

Data Package is a simple container format used to describe and package a collection of data. The full specification is available [here](https://specs.frictionlessdata.io/data-package).

## Tools

There is a growing set of online and offline software for working with Data Packages. You will find tools for creating, viewing, validating, publishing and managing them.

| Language | URL |
|----------|-----|
| Clojure | https://github.com/frictionlessdata/datapackage-clj |
| Go | https://github.com/frictionlessdata/datapackage-go |
| Java | https://github.com/frictionlessdata/datapackage-java |
| Javascript | https://github.com/frictionlessdata/datapackage-js |
| Julia | https://github.com/frictionlessdata/DataPackage.jl |
| MATLAB | https://github.com/KrisKusano/datapackage |
| PHP | https://github.com/frictionlessdata/datapackage-php |
| Python | https://github.com/frictionlessdata/datapackage-py |
| R | https://github.com/frictionlessdata/datapackage-r |
| Ruby | https://github.com/frictionlessdata/datapackage-rb |

## Examples

One of the most common use cases of Data Packages is to serve as an interface to datasets. Like a container for data. It gets easier to support a wider community when everyone follows the same interface.

Let's create Data Package to support multiple formats of user tables with the same fields:

### Files

**australia_users.csv**

```bash
Name,Email,Age
Jill,jill@example.com,25
Jack,jack@example.com,33
```

**germany_users.json**

```json
[
  {
    "Name": "julia",
    "Email": "julia@example.com",
    "Age": 70
  },
  {
    "Name": "anna",
    "Email": "anna@example.com",
    "Age": 48
  }
]
```

### In Python

```python
from datapackage import Package

package1 = Package()
package1.infer("australia_users.csv")
# {'profile': 'tabular-data-package',
#  'resources': [{'path': 'australia_users.csv',
#    'profile': 'tabular-data-resource',
#    'name': 'australia_users',
#    'format': 'csv',
#    'mediatype': 'text/csv',
#    'encoding': 'utf-8',
#    'schema': {'fields': [{'name': 'Name',
#       'type': 'string',
#       'format': 'default'},
#      {'name': 'Email', 'type': 'string', 'format': 'default'},
#      {'name': 'Age', 'type': 'integer', 'format': 'default'}],
#     'missingValues': ['']}}]}
package1.save("australia_users.zip")

package2 = Package()
package2.infer("germany_users.json")
# {'profile': 'data-package',
#  'resources': [{'path': 'germany_users.json',
#    'profile': 'data-resource',
#    'name': 'germany_users',
#    'format': 'json',
#    'mediatype': 'text/json',
#    'encoding': 'utf-8'}]}
package2.descriptor["resources"][0]["schema"] = package1.descriptor["resources"][0]["schema"]
package2.commit()
package2.save("germany_users.zip")
```

```sh
$ unzip australia_users.zip -d australia_users
$ unzip germany_users.zip -d germany_users
$ tree *_users
australia_users
├── data
│   └── australia_users.csv
└── datapackage.json
germany_users
├── data
│   └── germany_users.json
└── datapackage.json

2 directories, 4 files
```

### In Javascript

```javascript
const fs = require("fs");
const { Package } = require("datapackage");

let schema;
Package.load().then((package) => {
  package.infer("australia_users.csv").then(() => {
    const folder = "./australia_users";
    fs.mkdirSync(folder);
    package.save(folder + "/datapackage.json");

    schema = package.descriptor.resources[0].schema;
  });
});

Package.load().then((package) => {
  package.infer("germany_users.json").then(() => {
    package.descriptor.resources[0].schema = schema;
    package.commit();
    const folder = "./germany_users";
    fs.mkdirSync(folder);
    package.save(folder + "/datapackage.json");
  });
});
```

```sh
$ tree *_users
australia_users
└── datapackage.json
germany_users
└── datapackage.json

0 directories, 2 files
```

## Next Steps

* Learn [how to write a Data Package](/blog/2018/03/07/well-packaged-datasets/) using the Data Package Creator.

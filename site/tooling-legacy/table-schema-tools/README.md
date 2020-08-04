---
title: Table Schema Tools
tagline: A simple and intuitive way to declare a schema for your tabular data that works with your existing tools.
description: A simple and intuitive way to declare a schema for your tabular data that works with your existing tools.
hexagon: 
github: tableschema-js, tableschema-py, tableschema-sql-py, tableschema-go, tableschema-pandas-py, tableschema-rb, tableschema-java, tableschema-php, TableSchema.jl, tableschema-r, tableschema-bigquery-py, tableschema-clj, tableschema-elasticsearch-py, tableschema-ui, tableschema-spss-py, tableschema-ckan-datastore-py
layout: product
---

:::tip
This page assumes knowledge about the how Table Schema can be useful.

If you don't have it, please read [this page](/table-schema) first.
:::
 
Table Schema is a specification for providing a “schema” (similar to a database schema) for tabular data. The full specification is available [here](https://specs.frictionlessdata.io/table-schema/).
 
## Tools

You will find multiple languages supporting Table Schema through libraries.

| Language | URL |
|----------|-----|
| Clojure | https://github.com/frictionlessdata/tableschema-clj |
| Go | https://github.com/frictionlessdata/tableschema-go |
| Java | https://github.com/frictionlessdata/tableschema-java |
| Javascript | https://github.com/frictionlessdata/tableschema-js |
| Julia | https://github.com/frictionlessdata/TableSchema.jl |
| PHP | https://github.com/frictionlessdata/tableschema-php |
| Python | https://github.com/frictionlessdata/tableschema-py |
| R | https://github.com/frictionlessdata/tableschema-r |
| Ruby | https://github.com/frictionlessdata/tableschema-rb |

Also, it's worth looking to other libraries with specific use cases in mind.

| Use case | Language | URL |
|----------|----------|-----|
| CKAN Datastore | Python | https://github.com/frictionlessdata/tableschema-datashape |
| DataShape | Python | https://github.com/frictionlessdata/tableschema-elasticsearch-py |
| Google BigQuery | Python | https://github.com/frictionlessdata/tableschema-bigquery-py |
| OpenRefine | Python | https://github.com/frictionlessdata/tableschema-openrefine-py |
| ORM | Javascript | https://github.com/frictionlessdata/tableschema-models-js |
| Pandas | Python | https://github.com/frictionlessdata/tableschema-pandas-py |
| SPSS | Python | https://github.com/frictionlessdata/tableschema-spss-py |
| SQL | Javascript | https://github.com/frictionlessdata/tableschema-sql-js |
| SQL | Python | https://github.com/frictionlessdata/tableschema-sql-py |

## Examples

One of the possible uses of Table Schema is to do type checking in a dataset. In the following example, ages should be integers, while Jack was mistakenly inputted as `33.5`. Let's see how to perform this check in both Python and Javascript. For other languages, you should refer to their own documentation.

### Files

**users.csv**

```bash
Name,Email,Age
Jill,jill@example.com,25
Jack,jack@example.com,33.5
```

**schema.json**

```
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

### In Python

```python
from tableschema import Table

table = Table("users.csv", schema="schema.json")
table.schema.valid
# True

for row in table.iter():
  print(row)
# ['Jill', 'jill@foo.com', 25]
# CastError                                 Traceback (most recent call last)
# ...
# CastError: There are 1 cast errors (see exception.errors) for row "3"
```

### In Javascript

```javascript
const { Table } = require("tableschema");

Table.load("users.csv", { schema: "schema.json" }).then((table) => {
  table.iter({ stream: true }).then((stream) => {
    stream.on("data", (row) => {
      console.log(row);
    })
  });
});
// [ 'Jill', 'jill@foo.com', 25 ]
// Uncaught:
// TableSchemaError: There are 1 type and format mismatch errors (see 'error.errors')
// ...
// TableSchemaError: The value "33.5" in column "Age" is not type "integer" and format "default"
```

# Table Schema

Table Schema is a specification for providing a “schema” (similar to a [database schema](https://en.wikipedia.org/wiki/Database_schema)) for tabular data.  This information includes the expected type of each value in a column *(“string”, “number”, “date”, etc.)*, constraints on the value *(“this string can only be at most 10 characters long”)*, and the expected format of the data *(“this field should only contain strings that look like email addresses)*. Table Schema can also specify relations between tables.

Given the following table of user information:

| Name | Email        | Age |
|------|--------------|-----|
| Jill | jill@foo.com |  25 |
| Jack | jack@bar.com |  33 |

An example schema would look like the following.  Note that a minimum age of 18 is specified in the `Age` column and a string that looks like an email address must be present in the `Email` column:


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

[Software](/software) that supports reading and validating tabular data against a Table Schema can help publishers and ordinary users improve the quality of CSV and Excel files online by flagging validation errors based on the types, formats, and constraints specified in the schema.  For an example, see [goodtables](/docs/validating-data).

Read the [full specification](/specs/table-schema/).

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

[tools]: /software/
[dp-creator]: http://create.frictionlessdata.io
[dp-viewer]: http://create.frictionlessdata.io


(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{259:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This guide explores the options available to represent point location data in a CSV file within a Data Package.")]),e._v(" "),a("p",[e._v("First, some key concepts:")]),e._v(" "),a("ul",[a("li",[e._v("A "),a("router-link",{attrs:{to:"/specs/table-schema/"}},[e._v("Table Schema")]),e._v(" describes tabular data.")],1),e._v(" "),a("li",[e._v("Tabular data is often provided in a "),a("router-link",{attrs:{to:"/docs/csv/"}},[e._v("CSV - Comma Separated Values")]),e._v(" file.")],1),e._v(" "),a("li",[e._v("Tabular data may include data about locations.")]),e._v(" "),a("li",[e._v("Locations can be represented by points, lines, polygons and more complex geometry.")]),e._v(" "),a("li",[e._v("Points are often represented by a longitude, latitude coordinate pair. There is much debate on "),a("a",{attrs:{href:"https://macwright.org/2015/03/23/geojson-second-bite.html#position",target:"_blank",rel:"noopener noreferrer"}},[e._v("which value should go first"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://macwright.org/lonlat/",target:"_blank",rel:"noopener noreferrer"}},[e._v("tools have their own preferences"),a("OutboundLink")],1),e._v(". Explicitly stating the "),a("a",{attrs:{href:"https://www.w3.org/TR/sdw-bp/#bp-crs",target:"_blank",rel:"noopener noreferrer"}},[e._v("axis-order"),a("OutboundLink")],1),e._v(" of coordinates is important so when the data is used, it represents the correct location.")]),e._v(" "),a("li",[e._v("To keep things simple, you should use "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Decimal_degrees",target:"_blank",rel:"noopener noreferrer"}},[e._v("digital degrees"),a("OutboundLink")],1),e._v(" "),a("code",[e._v("-27.1944, 151.32660")]),e._v(", not "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Latitude#Preliminaries",target:"_blank",rel:"noopener noreferrer"}},[e._v("degrees, minutes, seconds"),a("OutboundLink")],1),e._v(" or Northing and Eastings "),a("code",[e._v("27.1944° S, 151.2660° E")]),e._v(".")]),e._v(" "),a("li",[e._v("Representing locations other than points in a CSV can be complicated as the shape is represented by many coordinate pairs that combine to make the shape (think joining the dots).")]),e._v(" "),a("li",[e._v("A coordinate pair is inadequate to accurately show a location on a map. You also need a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Spatial_reference_system",target:"_blank",rel:"noopener noreferrer"}},[e._v("coordinate reference system"),a("OutboundLink")],1),e._v(" and sometimes a date.")]),e._v(" "),a("li",[e._v("A coordinate reference system describes the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Datum_(geodesy)"}},[e._v("datum")]),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Geoid",target:"_blank",rel:"noopener noreferrer"}},[e._v("geoid"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinate_system",target:"_blank",rel:"noopener noreferrer"}},[e._v("coordinate system"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Map_projection",target:"_blank",rel:"noopener noreferrer"}},[e._v("map projection"),a("OutboundLink")],1),e._v(" of the location data.")]),e._v(" "),a("li",[e._v("Dates detailing when the location was recorded are also important because things change over time, e.g. the shape of an "),a("a",{attrs:{href:"https://www.ecq.qld.gov.au/__data/assets/pdf_file/0009/70956/26.5.17_Extraordinary-Gazette_QRC-Final-Determination.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("electoral boundary"),a("OutboundLink")],1),e._v(", or the "),a("a",{attrs:{href:"http://www.icsm.gov.au/datum/what-gda2020",target:"_blank",rel:"noopener noreferrer"}},[e._v("location of a continent"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("The key information to describe a point location is a:")]),e._v(" "),a("ul",[a("li",[e._v("coordinate pair and their axis order")]),e._v(" "),a("li",[e._v("coordinate reference system")]),e._v(" "),a("li",[e._v("date")])]),e._v(" "),a("p",[e._v("Assumptions are often made about coordinate reference systems and dates, e.g.")]),e._v(" "),a("ul",[a("li",[e._v("The coordinate reference system may be assumed to be the World Geodetic System 1984 ("),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/World_Geodetic_System",target:"_blank",rel:"noopener noreferrer"}},[e._v("WGS84"),a("OutboundLink")],1),e._v("), which is currently used for the Global Positioning System (GPS) satellite navigation system. This coordinate reference system used by the majority of interactive maps on the web.")]),e._v(" "),a("li",[e._v("The date is often assumed to be today.")])]),e._v(" "),a("h2",{attrs:{id:"point-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#point-data"}},[e._v("#")]),e._v(" Point data")]),e._v(" "),a("p",[e._v("How can point location data be:")]),e._v(" "),a("ol",[a("li",[e._v("represented in a CSV file?")]),e._v(" "),a("li",[e._v("described as part of a Data Package?")])]),e._v(" "),a("p",[e._v("The options for representing point locations in a CSV file are to define a field(s) of type:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#1-geopoint-default"}},[e._v("geopoint, format: default")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#2-geopoint-array"}},[e._v("geopoint, format: array")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#3-geopoint-object"}},[e._v("geopoint, format: object")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#4-numbers-with-constraints"}},[e._v("number with constraints")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#5-string-and-foreign-key-reference-to-well-known-place-name"}},[e._v("string, format: default")]),e._v(" and a foreign key reference")]),e._v(" "),a("li",[a("a",{attrs:{href:"#6-use-a-uniform-resource-identifier-to-reference-a-location"}},[e._v("string, format: uri")]),e._v(" reference to an external resource with the geometry")]),e._v(" "),a("li",[a("a",{attrs:{href:"#7-geojson"}},[e._v("geojson, format: default")])])]),e._v(" "),a("p",[e._v("Each option is described below with a sample CSV file, Data Package fragment and some thoughts on pros and cons.")]),e._v(" "),a("p",[e._v("Each option should, in a human and machine-readable way, specify:")]),e._v(" "),a("ul",[a("li",[e._v("the coordinate reference system")]),e._v(" "),a("li",[e._v("the axis order of the coordinates (if not specified by the coordinate reference system)")]),e._v(" "),a("li",[e._v("the date associated with the location data")])]),e._v(" "),a("p",[e._v("(Out of scope for the moment - geocoding using address but similar techniques will apply.)")]),e._v(" "),a("h3",{attrs:{id:"_1-geopoint-default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-geopoint-default"}},[e._v("#")]),e._v(" 1. Geopoint, default")]),e._v(" "),a("p",[e._v("The type "),a("router-link",{attrs:{to:"/specs/table-schema/#geopoint"}},[e._v("Geopoint")]),e._v(", format: default is a string of the pattern "),a("code",[e._v('"lon, lat"')]),e._v(", where lon is the longitude and lat is the latitude (note the space is optional after the ,). E.g. "),a("code",[e._v('"90, 45"')]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Office")]),e._v(" "),a("th",[e._v("Location (Lon, Lat)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dalby")]),e._v(" "),a("td",[e._v("“151.2660, -27.1944”")])])])]),e._v(" "),a("h4",{attrs:{id:"data-package-fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-package-fragment"}},[e._v("#")]),e._v(" Data Package fragment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "fields": [\n    {\n      "name": "Office",\n      "type": "string"\n    },\n    {\n      "name": "Location (Lon, Lat)",\n      "type": "geopoint"\n    }\n  ]\n}\n')])])]),a("p",[a("strong",[e._v("Thoughts")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/345",target:"_blank",rel:"noopener noreferrer"}},[e._v("Currently"),a("OutboundLink")],1),e._v(" you cannot use the "),a("code",[e._v("minimum")]),e._v(" or "),a("code",[e._v("maximum")]),e._v(" constraint to limit longitude or latitude values to a to a minimum bounding rectangle")]),e._v(" "),a("li",[e._v("The order of Lon, Lat is defined in the standard but:\n"),a("ul",[a("li",[e._v("may not be obvious to the person looking at the file")]),e._v(" "),a("li",[e._v("may not be machine-readable without referring to resources outside the Data Package")])])])]),e._v(" "),a("h3",{attrs:{id:"_2-geopoint-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-geopoint-array"}},[e._v("#")]),e._v(" 2. Geopoint, array")]),e._v(" "),a("p",[e._v("An array of exactly two items, where each item is a number, and the first item is longitude and the second item is latitude e.g. "),a("code",[e._v("[90, 45]")])]),e._v(" "),a("h4",{attrs:{id:"csv-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-2"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Office")]),e._v(" "),a("th",[e._v("Location (Lon, Lat)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dalby")]),e._v(" "),a("td",[e._v("[151.2660, -27.1944]")])])])]),e._v(" "),a("h4",{attrs:{id:"data-package-fragment-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-package-fragment-2"}},[e._v("#")]),e._v(" Data Package fragment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "fields": [\n    {\n      "name": "Office)",\n      "type": "string"\n    },\n    {\n      "name": "Location (Lon, Lat)",\n      "type": "geopoint",\n      "format": "array"\n    }\n  ]\n}\n')])])]),a("p",[e._v("** Thoughts **")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/345",target:"_blank",rel:"noopener noreferrer"}},[e._v("Currently"),a("OutboundLink")],1),e._v(" you cannot use the "),a("code",[e._v("minimum")]),e._v(" or "),a("code",[e._v("maximum")]),e._v(" constraint to limit longitude or latitude values to a to a minimum bounding rectangle")]),e._v(" "),a("li",[e._v("The order of Lon, Lat is defined in the standard but:\n"),a("ul",[a("li",[e._v("may not be obvious to the person looking at the file")]),e._v(" "),a("li",[e._v("may not be machine-readable without referring to resources outside the Data Package")])])])]),e._v(" "),a("h3",{attrs:{id:"_3-geopoint-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-geopoint-object"}},[e._v("#")]),e._v(" 3. Geopoint, object")]),e._v(" "),a("p",[e._v("A JSON object with exactly two keys, lat and lon and each value is a number e.g. "),a("code",[e._v('{"lon": 90, "lat": 45}')])]),e._v(" "),a("h4",{attrs:{id:"csv-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-3"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Office")]),e._v(" "),a("th",[e._v("Location (Lon, Lat)")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dalby")]),e._v(" "),a("td",[e._v("{“lon”:151.2660, “lat”: -27.1944}")])])])]),e._v(" "),a("h4",{attrs:{id:"data-package-fragment-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-package-fragment-3"}},[e._v("#")]),e._v(" Data Package fragment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "fields": [\n    {\n      "name": "Office)",\n      "type": "string"\n    },\n    {\n      "name": "Location (Lon, Lat)",\n      "type": "geopoint",\n      "format": "object"\n    }\n  ]\n}\n')])])]),a("p",[e._v("** Thoughts **")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/345",target:"_blank",rel:"noopener noreferrer"}},[e._v("Currently"),a("OutboundLink")],1),e._v(" you cannot use the "),a("code",[e._v("minimum")]),e._v(" or "),a("code",[e._v("maximum")]),e._v(" constraint to limit longitude or latitude values to a to a minimum bounding rectangle")]),e._v(" "),a("li",[e._v("The axis order is explicit. "),a("a",{attrs:{href:"https://www.w3.org/TR/sdw-bp/#bp-crs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stating how coordinate values are encoded"),a("OutboundLink")],1),e._v(" is a W3C spatial data on the web best practice.")])]),e._v(" "),a("h3",{attrs:{id:"_4-numbers-with-constraints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-numbers-with-constraints"}},[e._v("#")]),e._v(" 4. Numbers with constraints")]),e._v(" "),a("p",[e._v("Two columns of type "),a("router-link",{attrs:{to:"/specs/table-schema/#number"}},[e._v("number")]),e._v(" with "),a("router-link",{attrs:{to:"/specs/table-schema/#constraints"}},[e._v("constraints")]),e._v(" to limit latitude and longitude values")],1),e._v(" "),a("h4",{attrs:{id:"csv-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-4"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Office")]),e._v(" "),a("th",[e._v("Lat")]),e._v(" "),a("th",[e._v("Lon")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dalby")]),e._v(" "),a("td",[e._v("-27.1944")]),e._v(" "),a("td",[e._v("151.2660")])])])]),e._v(" "),a("h4",{attrs:{id:"data-package-fragment-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-package-fragment-4"}},[e._v("#")]),e._v(" Data Package fragment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "fields": [\n    {\n      "name": "Office",\n      "type": "string"\n    },\n    {\n      "name": "Lat",\n      "type": "number",\n      "contraints": {\n        "minimum": -90,\n        "maximum": 90\n      }\n    },\n    {\n      "name": "Lon",\n      "type": "number",\n      "contraints": {\n        "minimum": -180,\n        "maximum": 180\n      }\n    }\n  ]\n}\n')])])]),a("p",[e._v("** Thoughts **")]),e._v(" "),a("ul",[a("li",[e._v("You can constrain latitude and longitude values to a minimum bounding rectangle")]),e._v(" "),a("li",[e._v("Constraints not required so invalid values possible")]),e._v(" "),a("li",[e._v("Not obvious to software that the columns are location data unless specific names are used X,Y; Lat,Lon; Latitude,Longitude; and "),a("a",{attrs:{href:"http://doc.arcgis.com/en/arcgis-online/reference/csv-gpx.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("many other combinations"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Lat, Lon or Lon, Lat - you choose the order")]),e._v(" "),a("li",[e._v("No way to force a pair of coordinates and support missing values.\n"),a("ul",[a("li",[e._v("If you add a required constraint to both, you can’t have a missing location.")]),e._v(" "),a("li",[e._v("If you don’t add required constraint, you could have lat without lon or vice versa.")])])])]),e._v(" "),a("h3",{attrs:{id:"_5-string-and-foreign-key-reference-to-well-known-place-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-string-and-foreign-key-reference-to-well-known-place-name"}},[e._v("#")]),e._v(" 5. String and Foreign key reference to well-known place-name")]),e._v(" "),a("p",[e._v("All the previous examples assume you know the coordinates of the location. What if you only know the name? You can use a name, of type: "),a("router-link",{attrs:{to:"/specs/table-schema/#string"}},[e._v("string")]),e._v(", to refer to an another data resource and use the name to determine the coordinates. This data resource is often called a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Gazetteer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazetteer"),a("OutboundLink")],1),e._v(". "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Gazetteer#List_of_gazetteers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Often"),a("OutboundLink")],1),e._v(" a website or API is placed in front of the data so you can provide a name and the location data is returned")],1),e._v(" "),a("p",[e._v("A date may be an additional field included in the foreign key relationship.")]),e._v(" "),a("h4",{attrs:{id:"csv-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-5"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),a("p",[e._v("Offices.csv")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("office-name")]),e._v(" "),a("th",[e._v("town")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dalby Drop In Centre")]),e._v(" "),a("td",[e._v("Dalby")])])])]),e._v(" "),a("p",[e._v("Gazetteer.csv")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("city-or-town")]),e._v(" "),a("th",[e._v("location")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dalby")]),e._v(" "),a("td",[e._v("{“lon”:151.2660, “lat”: -27.1944}")])])])]),e._v(" "),a("h4",{attrs:{id:"data-package-fragment-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-package-fragment-5"}},[e._v("#")]),e._v(" Data Package fragment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "resources": [\n    {\n      "name": "office-locations",\n      "path": "offices.csv",\n      "schema": {\n        "fields": [\n          {\n            "name": "office-name",\n            "title": "Office Name",\n            "type": "string"\n          },\n          {\n            "name": "town",\n            "title": "Town",\n            "description": "Town name in gazetteer",\n            "type": "string"\n          }\n        ]\n      },\n      "foreignKeys": [\n        {\n          "fields": "town",\n          "reference": {\n            "resource": "gazetteer",\n            "fields": "city-or-town"\n          }\n        }\n      ]\n    },\n    {\n      "name": "gazetteer",\n      "description": "External Gazetteer",\n      "url": "https://example.com/gazetteer.csv",\n      "schema": {\n        "fields": [\n          {\n            "name": "city-or-town",\n            "type": "string",\n            "constraints": {\n              "unique": true,\n              "required": true\n            }\n          },\n          {\n            "name": "location",\n            "type": "geopoint",\n            "format": "object"\n          }\n        ]\n      },\n      "primaryKey": [\n        "city-or-town"\n      ]\n    }\n  ]\n}\n')])])]),a("p",[e._v("** Thoughts **")]),e._v(" "),a("ul",[a("li",[e._v("Haven’t come across many Gazetteers in CSV format")])]),e._v(" "),a("h3",{attrs:{id:"_6-use-a-uniform-resource-identifier-to-reference-a-location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-use-a-uniform-resource-identifier-to-reference-a-location"}},[e._v("#")]),e._v(" 6. Use a Uniform Resource Identifier to reference a location")]),e._v(" "),a("p",[e._v("Use a type: "),a("router-link",{attrs:{to:"/specs/table-schema/#string"}},[e._v("string")]),e._v(", format: uri, to provide a link to a resource that includes the geometry.")],1),e._v(" "),a("h4",{attrs:{id:"csv-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-6"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("office-name")]),e._v(" "),a("th",[e._v("Location uri")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dalby")]),e._v(" "),a("td",[a("a",{attrs:{href:"http://nominatim.openstreetmap.org/details.php?place_id=114278",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://nominatim.openstreetmap.org/details.php?place_id=114278"),a("OutboundLink")],1)])])])]),e._v(" "),a("h4",{attrs:{id:"data-package-fragment-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-package-fragment-6"}},[e._v("#")]),e._v(" Data Package fragment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"schema": {\n\t"fields": [\n        {\n        "name": "office-name",\n        "type": "string"\n        },\n        {\n        "name": "Location uri",\n        "type": "string",\n        "format": "uri"\n        }\n   ]\n }\n')])])]),a("p",[e._v("** Thoughts **")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.w3.org/TR/sdw-bp/#bp-linking-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Link to Spatial Things from popular repositories"),a("OutboundLink")],1),e._v(" is a W3C spatial data on the web best practice.")]),e._v(" "),a("li",[e._v("Things can move over time, consider "),a("a",{attrs:{href:"https://www.w3.org/TR/sdw-bp/#bp-dataversioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("data versioning"),a("OutboundLink")],1),e._v(", another W3C spatial data on the web best practice.")]),e._v(" "),a("li",[e._v("Is there a way to define the bulk of the uri outside of the column and reduce the column entry to the id? Is this wise or desirable?")])]),e._v(" "),a("h3",{attrs:{id:"_7-geojson"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-geojson"}},[e._v("#")]),e._v(" 7. GeoJSON")]),e._v(" "),a("p",[e._v("Use a field of type "),a("router-link",{attrs:{to:"/specs/table-schema/#geojson"}},[e._v("GeoJSON")]),e._v(" to represent location")],1),e._v(" "),a("h4",{attrs:{id:"csv-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-7"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Office")]),e._v(" "),a("th",[e._v("Location")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dalby")]),e._v(" "),a("td",[e._v("{“type”:“Point”,“coordinates”:[151.2660,-27.1994]}")])])])]),e._v(" "),a("h4",{attrs:{id:"data-package-fragment-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-package-fragment-7"}},[e._v("#")]),e._v(" Data Package fragment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "fields": [\n    {\n      "name": "Office",\n       "type": "string"\n    },\n    {\n      "name": "Location",\n      "type": "geojson",\n      "format": "default"\n    }\n  ]\n}\n')])])]),a("p",[e._v("** Thoughts **")]),e._v(" "),a("ul",[a("li",[e._v("Geometry isn’t constrained to a point; it could be a line or polygon.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946#page-12",target:"_blank",rel:"noopener noreferrer"}},[e._v("GeoJSON"),a("OutboundLink")],1),e._v(" only supports the WGS84 coordinate reference system.")]),e._v(" "),a("li",[e._v("The axis order is explicit. "),a("a",{attrs:{href:"https://www.w3.org/TR/sdw-bp/#bp-crs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stating how coordinate values are encoded"),a("OutboundLink")],1),e._v(" is a W3C spatial data on the web best practice. GeoJSON only supports lon, lat axis order.")])]),e._v(" "),a("h2",{attrs:{id:"related-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-work"}},[e._v("#")]),e._v(" Related Work")]),e._v(" "),a("h3",{attrs:{id:"frictionless-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frictionless-data"}},[e._v("#")]),e._v(" Frictionless data")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/specs/table-schema/"}},[e._v("Table Schema")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/docs/publish-geo/"}},[e._v("Publishing Geospatial Data as a Data Package")])],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://research.okfn.org/spatial-data-package-investigation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spatial Data Package investigation - research and report by Steve Bennett"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"world-wide-web-consortium-w3c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#world-wide-web-consortium-w3c"}},[e._v("#")]),e._v(" World Wide Web Consortium (W3C)")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.w3.org/TR/dwbp/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data on the Web Best Practices"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.w3.org/TR/sdw-bp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spatial Data on the Web Best Practices"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("These documents advise on best practices related to the publication of data and spatial data on the web.")]),e._v(" "),a("h3",{attrs:{id:"australian-government-csv-geo-au"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#australian-government-csv-geo-au"}},[e._v("#")]),e._v(" Australian Government - CSV GEO AU")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/TerriaJS/nationalmap/wiki/csv-geo-au",target:"_blank",rel:"noopener noreferrer"}},[e._v("csv-geo-au"),a("OutboundLink")],1),e._v(" is a specification for publishing point or region-mapped Australian geospatial data in CSV format to "),a("a",{attrs:{href:"http://data.gov.au",target:"_blank",rel:"noopener noreferrer"}},[e._v("data.gov.au"),a("OutboundLink")],1),e._v(" and other open data portals.")]),e._v(" "),a("h3",{attrs:{id:"ietf-geojson"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ietf-geojson"}},[e._v("#")]),e._v(" IETF - GeoJSON")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7946",target:"_blank",rel:"noopener noreferrer"}},[e._v("GeoJSON"),a("OutboundLink")],1),e._v(" is a geospatial data interchange format based on JavaScript Object Notation (JSON).")]),e._v(" "),a("h3",{attrs:{id:"ogc-simple-feature-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ogc-simple-feature-access"}},[e._v("#")]),e._v(" OGC - Simple Feature Access")]),e._v(" "),a("p",[e._v("The Open Geospatial Consortium - "),a("a",{attrs:{href:"http://www.opengeospatial.org/standards/sfa",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenGIS Simple Feature Access"),a("OutboundLink")],1),e._v(" is also called ISO 19125. It provides a model for geometric objects associated with a Spatial Reference System.")]),e._v(" "),a("p",[e._v("!! Recommended reading: We recently commissioned research work to determine how necessary and useful it would be to create a Geo Data Package as a core Frictionless Data offering. Follow the discussions "),a("a",{attrs:{href:"https://discuss.okfn.org/t/geo-data-package/6143",target:"_blank",rel:"noopener noreferrer"}},[e._v("here on Discuss"),a("OutboundLink")],1),e._v(" and read "),a("a",{attrs:{href:"https://research.okfn.org/spatial-data-package-investigation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the final report into the spatial data package investigation by Steve Bennett"),a("OutboundLink")],1),e._v(". Examples following the recommendations in this research will be added in due course.")])])}),[],!1,null,null,null);t.default=n.exports}}]);
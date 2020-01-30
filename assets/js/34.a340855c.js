(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{254:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("! Georges Labrèche was one of 2017’s "),s("a",{attrs:{href:"https://toolfund.frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Data Tool Fund"),s("OutboundLink")],1),t._v(" grantees tasked with extending implementation of core Frictionless Data libraries in Java programming language. You can read more about this in "),s("router-link",{attrs:{to:"/articles/georges-labreche/"}},[t._v("his grantee profile")]),t._v(".")],1),t._v(" "),s("p",[t._v("In this post, Labrèche will show you how to install and use the "),s("a",{attrs:{href:"https://www.java.com/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java"),s("OutboundLink")],1),t._v(" libraries for working with "),s("a",{attrs:{href:"https://frictionlessdata.io/specs/tabular-data-package/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tabular Data Packages"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Our goal in this tutorial is to load tabular data from a CSV file, infer data types and the table’s schema.")]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("First things first, you’ll want to grab "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage-java"),s("OutboundLink")],1),t._v(" and the "),s("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-java",target:"_blank",rel:"noopener noreferrer"}},[t._v("tableschema-java"),s("OutboundLink")],1),t._v(" libraries.")]),t._v(" "),s("h2",{attrs:{id:"the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-data"}},[t._v("#")]),t._v(" The Data")]),t._v(" "),s("p",[t._v("For our example, we will use a "),s("a",{attrs:{href:"https://frictionlessdata.io/specs/tabular-data-package/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tabular Data Package"),s("OutboundLink")],1),t._v(" containing the periodic table. You can find the "),s("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("data package descriptor"),s("OutboundLink")],1),t._v(" and the "),s("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("data"),s("OutboundLink")],1),t._v(" on GitHub.")]),t._v(" "),s("p",[t._v("A "),s("a",{attrs:{href:"https://frictionlessdata.io/specs/data-package/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Package"),s("OutboundLink")],1),t._v(" is a simple container format used to describe and package a collection of data. It consists of two parts:")]),t._v(" "),s("ul",[s("li",[t._v("Metadata that describes the structure and contents of the package")]),t._v(" "),s("li",[t._v("Resources such as data files that form the contents of the package")])]),t._v(" "),s("h2",{attrs:{id:"packaging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#packaging"}},[t._v("#")]),t._v(" Packaging")]),t._v(" "),s("p",[t._v("Let’s start by fetching and packaging the data:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fetch the data")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/datapackage.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package the data")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Package")]),t._v(" dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Package")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("That’s it, you’re all set to start playing with the packaged data. There are parameters you can set such as loading a schema or imposing strict validation so be sure to go through the project’s "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-java/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),s("OutboundLink")],1),t._v(" for more detail.")]),t._v(" "),s("h2",{attrs:{id:"iterating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iterating"}},[t._v("#")]),t._v(" Iterating")]),t._v(" "),s("p",[t._v("Now that you have a Data Package instance, let’s see what the data looks like. A data package can contain more than one resource so you have to use the "),s("code",[t._v("Package.getResource()")]),t._v(" method to specify which resource you’d like to access.")]),t._v(" "),s("p",[t._v("Let’s iterate over the data:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get a resource named data from the data package")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Resource")]),t._v(" resource "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pkg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the Iterator")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" iter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Iterate")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" row "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" atomicNumber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" symbol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" atomicMass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" metalOrNonMetal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("Notice how we’re fetching all values as "),s("code",[t._v("String")]),t._v(". This may not be what you want, particularly for the atomic number and mass. Alternatively, you can trigger data type inference and casting like this:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get Iterator")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Third boolean is the cast flag.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" iter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" resource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Iterator")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" row "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" atomicNumber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" symbol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" atomicMass "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   \t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" metalOrNonMetal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("And that’s it, your data is now associated with the appropriate data types!")]),t._v(" "),s("h2",{attrs:{id:"inferring-the-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inferring-the-schema"}},[t._v("#")]),t._v(" Inferring the Schema")]),t._v(" "),s("p",[t._v("We wouldn’t have had to infer the data types if we had included a "),s("a",{attrs:{href:"https://frictionlessdata.io/docs/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Table Schema"),s("OutboundLink")],1),t._v(" when creating an instance of our Data Package. If a Table Schema is not available, then it’s something that can also be inferred and created with "),s("code",[t._v("tableschema-java")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("URL")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/62d47b454d95a95b6029214b9533de79401e953a/periodic-table/data.csv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Table")]),t._v(" table "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schema")]),t._v(" schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inferSchema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nschema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/write/schema.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("The type inference algorithm tries to cast to available types and each successful type casting increments a popularity score for the successful type cast in question. At the end, the best score so far is returned.")]),t._v(" "),s("p",[t._v("The inference algorithm traverses all of the table’s rows and attempts to cast every single value of the table. When dealing with large tables, you might want to limit the number of rows that the inference algorithm processes:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Only process the first 25 rows for type inference.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schema")]),t._v(" schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inferSchema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Be sure to go through "),s("code",[t._v("tableschema-java")]),t._v("'s "),s("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-java/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),s("OutboundLink")],1),t._v(" as well to learn more about how to operate with "),s("a",{attrs:{href:"https://frictionlessdata.io/docs/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Table Schema"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),s("p",[t._v("In case you discovered an issue that you’d like to contribute a fix for, or if you would like to extend functionality:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install jabba and maven2")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tableschema-java\n$ jabba "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("\n$ jabba use "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("\n$ mvn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -DskipTests"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -Dmaven.javadoc.skip"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -B -V\n$ mvn "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -B\n\n")])])]),s("p",[t._v("Make sure that all tests pass, and submit a PR with your contributions once you’re ready.")]),t._v(" "),s("p",[t._v("We also welcome your feedback and questions via our "),s("a",{attrs:{href:"http://gitter.im/frictionlessdata/chat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frictionless Data Gitter chat"),s("OutboundLink")],1),t._v(" or via "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-java/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub issues"),s("OutboundLink")],1),t._v(" on the datapackage-java repository.")])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{239:function(a,e,t){"use strict";t.r(e);var r=t(0),o=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"data-curator-share-usable-open-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-curator-share-usable-open-data"}},[a._v("#")]),a._v(" Data Curator - share usable open data")]),a._v(" "),t("p",[a._v("Open data producers are increasingly focusing on improving open data so  it can be easily used to create insight and drive positive change.")]),a._v(" "),t("p",[a._v("Open data is more likely to be used if data consumers can:")]),a._v(" "),t("ul",[t("li",[a._v("understand the structure of the data")]),a._v(" "),t("li",[a._v("understand the quality of the data")]),a._v(" "),t("li",[a._v("understand why and how the data was collected")]),a._v(" "),t("li",[a._v("look up the meaning of codes used in the data")]),a._v(" "),t("li",[a._v("access the data in an open machine-readable format")]),a._v(" "),t("li",[a._v("know how the data is licensed and how it can be reused")])]),a._v(" "),t("p",[a._v("Data Curator enables open data producers to define all this information using their desktop computer, prior to publishing it on the Internet.")]),a._v(" "),t("p",[a._v("Data Curator uses the "),t("router-link",{attrs:{to:"/specs/"}},[a._v("Frictionless Data specification")]),a._v(" and "),t("router-link",{attrs:{to:"/software/",title:"Frictionless Data platforms, applications, and software libraries"}},[a._v("software")]),a._v(" to package the data and supporting information in a "),t("router-link",{attrs:{to:"/specs/tabular-data-package/",title:"Tabular Data Package specification"}},[a._v("Tabular Data Package")]),a._v(".")],1),a._v(" "),t("p",[t("img",{attrs:{src:"data-curator.png",alt:"Data Curator screenshot"}})]),a._v(" "),t("h2",{attrs:{id:"using-data-curator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-data-curator"}},[a._v("#")]),a._v(" Using Data Curator")]),a._v(" "),t("p",[a._v("Here’s how to use Data Curator to share usable open data in a data package:")]),a._v(" "),t("ol",[t("li",[a._v("Download "),t("a",{attrs:{href:"https://github.com/ODIQueensland/data-curator/releases/latest",title:"Download Data Curator for Windows or macOS",target:"_blank",rel:"noopener noreferrer"}},[a._v("Data Curator"),t("OutboundLink")],1),a._v(" for Windows or macOS")]),a._v(" "),t("li",[a._v("In Data Curator, either:\n"),t("ul",[t("li",[a._v("create some data")]),a._v(" "),t("li",[a._v("open an Excel sheet")]),a._v(" "),t("li",[a._v("open a separated value file (e.g. CSV, TSV)")])])]),a._v(" "),t("li",[a._v("Follow the steps below…")])]),a._v(" "),t("h3",{attrs:{id:"describe-the-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#describe-the-data"}},[a._v("#")]),a._v(" Describe the data")]),a._v(" "),t("p",[a._v("The Frictionless Data specification allows you to describe tabular data using a "),t("router-link",{attrs:{to:"/specs/table-schema/",title:"Table Schema specification"}},[a._v("Table Schema")]),a._v(".  A Table Schema allows each field in the data to be given:")],1),a._v(" "),t("ul",[t("li",[a._v("a "),t("code",[a._v("name")]),a._v(", "),t("code",[a._v("title")]),a._v(" and "),t("code",[a._v("description")])]),a._v(" "),t("li",[a._v("a data "),t("code",[a._v("type")]),a._v(" (e.g. "),t("code",[a._v("string")]),a._v(", "),t("code",[a._v("integer")]),a._v(") and "),t("code",[a._v("format")]),a._v(" (e.g. "),t("code",[a._v("uri")]),a._v(", "),t("code",[a._v("email")]),a._v(")")]),a._v(" "),t("li",[a._v("one or more "),t("code",[a._v("constraints")]),a._v(" (e.g. "),t("code",[a._v("required")]),a._v(", "),t("code",[a._v("unique")]),a._v(") to limit data values and improve data validation")])]),a._v(" "),t("p",[a._v("The Table Schema also allows you to describe the characters used to represent missing values (e.g. "),t("code",[a._v("n/a")]),a._v(", "),t("code",[a._v("tba")]),a._v("), primary keys, and foreign key relationships.")]),a._v(" "),t("p",[a._v("After adding data in Data Curator, to create a Table Schema:")]),a._v(" "),t("ul",[t("li",[a._v("Give your data a header row, if it doesn’t have one")]),a._v(" "),t("li",[a._v("Set the header row to give each field a "),t("code",[a._v("name")])]),a._v(" "),t("li",[a._v("Guess column properties to give each field a  "),t("code",[a._v("type")]),a._v(" and "),t("code",[a._v("format")])]),a._v(" "),t("li",[a._v("Set column properties to improve the data "),t("code",[a._v("type")]),a._v(" and "),t("code",[a._v("format")]),a._v(" guesses, and add a "),t("code",[a._v("title")]),a._v(", "),t("code",[a._v("description")]),a._v(" and "),t("code",[a._v("constraints")])]),a._v(" "),t("li",[a._v("Set table properties to give the table a "),t("code",[a._v("name")]),a._v(",  define missing values, a primary key, and foreign keys.")])]),a._v(" "),t("h3",{attrs:{id:"validate-the-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validate-the-data"}},[a._v("#")]),a._v(" Validate the data")]),a._v(" "),t("p",[a._v("Using Data Curator, you can validate if the data complies with the field’s "),t("code",[a._v("type")]),a._v(", "),t("code",[a._v("format")]),a._v(" and "),t("code",[a._v("contraints")]),a._v(". Errors found can be filtered in different ways so you can correct errors by row, by column or by error type.")]),a._v(" "),t("p",[a._v("In some cases data errors cannot be corrected, as they should be corrected in the source system and not as part of the data packaging process. If you’re happy to publish the data with errors, the error messages can be appended to the provenance information.")]),a._v(" "),t("h3",{attrs:{id:"provide-context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provide-context"}},[a._v("#")]),a._v(" Provide context")]),a._v(" "),t("p",[a._v("Data Curator lets you add provenance information to help people understand why and how the data was collected and determine if it is fit for their purpose.")]),a._v(" "),t("p",[a._v("Provenance information can be entered using "),t("a",{attrs:{href:"http://commonmark.org",title:"Markdown specification",target:"_blank",rel:"noopener noreferrer"}},[a._v("Markdown"),t("OutboundLink")],1),a._v(". You can preview the Markdown formatting in Data Curator.")]),a._v(" "),t("p",[t("img",{attrs:{src:"data-curator-2.png",alt:"Add provenance information screenshot"}})]),a._v(" "),t("p",[a._v("You should follow the "),t("router-link",{attrs:{to:"/docs/publish-faq/#readme",title:"Publishing Data Packages - FAQ"}},[a._v("Readme FAQ")]),a._v(" when writing provenance information or, even easier, cut and paste from this "),t("a",{attrs:{href:"https://github.com/ODIQueensland/data-curator/blob/develop/test/features/tools/sample-provenance-information.md",title:"Sample Provenance Information Markdown file on GitHub",target:"_blank",rel:"noopener noreferrer"}},[a._v("sample"),t("OutboundLink")],1),a._v(".")],1),a._v(" "),t("h3",{attrs:{id:"explain-the-meaning-of-codes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explain-the-meaning-of-codes"}},[a._v("#")]),a._v(" Explain the meaning of codes")]),a._v(" "),t("p",[a._v("Data Curator supports foreign key relationships between data. Often a set of codes is used in a column of data and the list of valid codes and their description is in another table. The Frictionless Data specification enables linking this data within a table or across two tables in the same data package.")]),a._v(" "),t("p",[a._v("We’ve implemented the "),t("router-link",{attrs:{to:"/specs/patterns/#table-schema:-foreign-keys-to-data-packages",title:"The Foreign Keys to Data Packages pattern"}},[a._v("Foreign Keys to Data Packages pattern")]),a._v(" so you can have foreign key relationships across two data packages. This is really useful if you want to share code-lists across organisations.")],1),a._v(" "),t("p",[a._v("You can define foreign key relationships in Data Curator in the table properties and the relationships are checked when you validate the data.")]),a._v(" "),t("h3",{attrs:{id:"save-the-data-in-an-open-format"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#save-the-data-in-an-open-format"}},[a._v("#")]),a._v(" Save the data in an open format")]),a._v(" "),t("p",[a._v("Data Curator lets you save data as a comma, semicolon, or tab separated value file. A matching "),t("router-link",{attrs:{to:"/specs/csv-dialect/",title:"The CSV Dialect specification"}},[a._v("CSV Dialect")]),a._v(" is added to the data package.")],1),a._v(" "),t("h3",{attrs:{id:"apply-an-open-license"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply-an-open-license"}},[a._v("#")]),a._v(" Apply an open license")]),a._v(" "),t("p",[a._v("Applying a license, waiver, or public domain mark to a "),t("router-link",{attrs:{to:"/specs/data-package/#licenses",title:"The licenses property in the Data Package specification"}},[a._v("data package")]),a._v(" and its "),t("router-link",{attrs:{to:"/specs/data-resource/#optional-properties",title:"The licenses property in the Data Resource specification"}},[a._v("resources")]),a._v(" helps people understand how they can use, modify, and share the contents of the data package.")],1),a._v(" "),t("p",[t("img",{attrs:{src:"data-curator-3.png",alt:"Apply open license to data package screenshot"}})]),a._v(" "),t("p",[a._v("Although there are many ways to "),t("router-link",{attrs:{to:"/docs/applying-licenses/",title:"Guide to applying licenses, waivers or public domain marks to data packages"}},[a._v("apply a licence, waiver or public domain mark")]),a._v(" to a data package, Data Curator only allows you to use open licences - after all, its purpose is to share usable open data.")],1),a._v(" "),t("h3",{attrs:{id:"export-the-data-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-the-data-package"}},[a._v("#")]),a._v(" Export the data package")]),a._v(" "),t("p",[a._v("To ensure only usable open data is shared, Data Curator applies some checks before allowing a data package to be exported. These go beyond the mandatory requirements* in the Frictionless Data specification.")]),a._v(" "),t("p",[a._v("To export a tabular data package, it must have:")]),a._v(" "),t("ul",[t("li",[a._v("a header row")]),a._v(" "),t("li",[a._v("a table schema*")]),a._v(" "),t("li",[a._v("a table (resource) "),t("code",[a._v("name")]),a._v("*")]),a._v(" "),t("li",[a._v("a data package "),t("code",[a._v("name")]),a._v("*")]),a._v(" "),t("li",[a._v("provenance information")]),a._v(" "),t("li",[a._v("an open licence applied to the data package")])]),a._v(" "),t("p",[a._v("If a data package "),t("code",[a._v("version")]),a._v(" is used, it must follow the "),t("router-link",{attrs:{to:"/specs/patterns/#data-package-version",title:"Data Package Version pattern"}},[a._v("data package version pattern")]),a._v(".")],1),a._v(" "),t("p",[a._v("Before exporting a data package you should:")]),a._v(" "),t("ul",[t("li",[a._v("add a "),t("code",[a._v("title")]),a._v(" and "),t("code",[a._v("description")]),a._v(" to each field, table and data package")]),a._v(" "),t("li",[a._v("acknowledge any data sources and contributors")]),a._v(" "),t("li",[a._v("validate the data and add any known errors to the provenance information")])]),a._v(" "),t("p",[a._v("The data package is exported as a "),t("code",[a._v("datapackage.zip")]),a._v(" file that contains the:")]),a._v(" "),t("ul",[t("li",[a._v("data files in a "),t("code",[a._v("/data")]),a._v(" directory")]),a._v(" "),t("li",[a._v("data package, table (resource), table schema, and csv dialect properties in a"),t("code",[a._v("datapackage.json")]),a._v(" file")]),a._v(" "),t("li",[a._v("provenance information in a "),t("code",[a._v("README.md")]),a._v(" file")])]),a._v(" "),t("h3",{attrs:{id:"share-the-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#share-the-data"}},[a._v("#")]),a._v(" Share the data")]),a._v(" "),t("p",[a._v("Share the "),t("code",[a._v("datapackage.zip")]),a._v(" with open data consumers by publishing it on the Internet or on an open data platform. Some platforms support uploading, displaying, and downloading data packages.")]),a._v(" "),t("p",[a._v("Open data consumers will be able to read the data package with one of the "),t("router-link",{attrs:{to:"/software/",title:"Frictionless Data platforms, applications, and software libraries"}},[a._v("many applications and software libraries that work with data packages")]),a._v(", including Data Curator.")],1),a._v(" "),t("h2",{attrs:{id:"get-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[a._v("#")]),a._v(" Get Started")]),a._v(" "),t("p",[t("strong",[t("a",{attrs:{href:"https://github.com/ODIQueensland/data-curator/releases/latest",title:"Download Data Curator for Windows or macOS",target:"_blank",rel:"noopener noreferrer"}},[a._v("Download Data Curator"),t("OutboundLink")],1)]),a._v(" for Windows or macOS and start sharing usable open data.")]),a._v(" "),t("h2",{attrs:{id:"who-made-data-curator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#who-made-data-curator"}},[a._v("#")]),a._v(" Who made Data Curator?")]),a._v(" "),t("p",[a._v("Data Curator was made possible with funding from  the "),t("a",{attrs:{href:"https://www.qld.gov.au",target:"_blank",rel:"noopener noreferrer"}},[a._v("Queensland Government"),t("OutboundLink")],1),a._v(" and the guidance of the Open Data Policy team within the Department of Housing and Public Works. We’re grateful for the ideas and testing provided by open data champions in the  Department of Environment and Science, and the  Department of Transport and Main Roads.")]),a._v(" "),t("p",[a._v("The project was led by "),t("a",{attrs:{href:"https://theodi.org.au/stephen-gates/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Stephen Gates"),t("OutboundLink")],1),a._v(" from the "),t("a",{attrs:{href:"https://theodi.org.au",target:"_blank",rel:"noopener noreferrer"}},[a._v("ODI Australian Network"),t("OutboundLink")],1),a._v(". Software development was coordinated by Gavin Kennedy and performed by Matt Mulholland from the "),t("a",{attrs:{href:"https://www.qcif.edu.au",target:"_blank",rel:"noopener noreferrer"}},[a._v("Queensland Cyber Infrastructure Foundation"),t("OutboundLink")],1),a._v(" (QCIF).")]),a._v(" "),t("p",[a._v("Data Curator uses the "),t("router-link",{attrs:{to:"/software/"}},[a._v("Frictionless Data software libraries")]),a._v(" maintained by "),t("a",{attrs:{href:"https://okfn.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("Open Knowledge International"),t("OutboundLink")],1),a._v(" and we’re extremely grateful for the support provided by "),t("a",{attrs:{href:"https://github.com/orgs/frictionlessdata/teams/core/members",target:"_blank",rel:"noopener noreferrer"}},[a._v("the team"),t("OutboundLink")],1),a._v(".")],1),a._v(" "),t("p",[a._v("Data Curator started life as "),t("a",{attrs:{href:"http://comma-chameleon.io",title:"Comma Chameleon - A desktop CSV editor for data publishers\n",target:"_blank",rel:"noopener noreferrer"}},[a._v("Comma Chameleon"),t("OutboundLink")],1),a._v(", an "),t("a",{attrs:{href:"https://youtu.be/wIIw0cTeUG0",title:"Stuart Harrison explains Comma Chameleon at CSVConf",target:"_blank",rel:"noopener noreferrer"}},[a._v("experiment"),t("OutboundLink")],1),a._v(" by "),t("a",{attrs:{href:"https://theodi.org",title:"The Open Data Institute",target:"_blank",rel:"noopener noreferrer"}},[a._v("the ODI"),t("OutboundLink")],1),a._v(". The ODI and the ODI Australian Network agreed to take the software in "),t("a",{attrs:{href:"https://theodi.org/article/odi-toolbox-application-experiments-from-comma-chameleon-to-data-curator/",title:"Stephen Fortune explains why Data Curator is a fork of Comma Chameleon",target:"_blank",rel:"noopener noreferrer"}},[a._v("different directions"),t("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);
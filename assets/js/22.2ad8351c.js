(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{510:function(e,t,a){e.exports=a.p+"assets/img/figure1.8ca2ebc2.png"},511:function(e,t,a){e.exports=a.p+"assets/img/figure2.581442ee.png"},512:function(e,t,a){e.exports=a.p+"assets/img/figure3.985e7aff.png"},661:function(e,t,a){"use strict";a.r(t);var o=a(29),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Scientific work produces a wealth of data every year - ranging from electrical signals in neurons to maze-running in mice to hospital readmission counts in patients. Taken as a whole, this data could be queried to discover new connections that could lead to new breakthroughs – how does that increased neuronal activity lead to better memory performance in a mouse, and does that relate to improved Alzheimer’s outcomes in humans? The data is there, but it is often difficult to find and mobilize.")]),e._v(" "),o("p",[e._v("A main reason that this data is under-utilized is because datasets are often created in fragmented, domain-specific, or proprietary formats that aren’t easily used by others. The Frictionless Data team has been working with Dr. Philippe Rocca-Serra on some of these key challenges – increasing data set discoverability and highlighting how disparate data can be combined. Establishing a dataset catalogue, or index, represents a solution for helping scientists discover data. But, this requires some level of data standardization from different sources. To accomplish this, Dr. Rocca-Serra with the NIH Common Fund Data Ecosystem (NIH CFDE) opted for the Frictionless Data for Reproducible Research Project at the Open Knowledge Foundation (OKF).")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://www.nih-cfde.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("NIH Common Fund Data Ecosystem"),o("OutboundLink")],1),e._v(" project launched in 2019 with the aim of providing a data discovery portal in the form of a single venue where all data coordinating centers (DCC) funded by the NIH would index their experimental metadata. Therefore, the "),o("a",{attrs:{href:"https://www.nih-cfde.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("NIH-CFDE"),o("OutboundLink")],1),e._v(" is meant to be a data catalogue (Figure 1), allowing users to search the entire set of NIH funded programs from one single data aggregating site. Achieving this goal is no mean feat, requiring striking a balance between functional simplicity and useful detail. Data extraction from individual coordinating centers (for example LINCS DCC) into the selected format should be as straightforward as possible yet the underlying object model needs to be rich enough to allow meaningful structuring of the information.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(510),alt:"Figure 1"}}),o("br")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Figure 1")]),e._v(" shows the landing page of the NIH-CFDE data portal which welcomes visitors to a histogram detailing the datasets distribution based on data types and file counts by default. This settings may be changes to show sample counts, species or anatomical location for instance."),o("br"),e._v("\nurl: "),o("a",{attrs:{href:"https://www.nih-cfde.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.nih-cfde.org/"),o("OutboundLink")],1),o("br")])]),e._v(" "),o("p",[e._v("Furthermore, it is highly desirable to ensure that structural and content validation is performed prior to upload, so only valid submissions are sent to the Deriva-based NIH CFDE catalogue. How could the team achieve these goals while keeping the agility and flexibility required to allow for iterations to occur, adjustments to be made, and integration of user feedback to be included without major overhauls?")]),e._v(" "),o("p",[e._v("Owing to the nature of the defined backend, the Deriva System, and the overall consistency of data stored by most DCCs, an object model was built around key objects, connected together via linked tables, very much following the "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/OLAP_cube",target:"_blank",rel:"noopener noreferrer"}},[e._v("RDBMS / OLAP cubes paradigm"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("With this as a background, the choice of using "),o("a",{attrs:{href:"https://frictionlessdata.io/standards/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OKF Frictionless data packages framework"),o("OutboundLink")],1),e._v(" came to the fore. The Frictionless specifications are straightforward to understand, supported by libraries available in different languages, allowing creation, I/O operations and validations of objects models as well as instance data.")]),e._v(" "),o("p",[e._v("Frictionless specifications offer several features which assist several aspects of data interoperation and reuse. The tabular data is always shipped with a JSON-formated definition of the field headers. Each field is typed to a data type but can also be marked-up with an RDFtype. Terminology harmonization relies on 4 resources, NCBI Taxonomy for species descriptions, UBERON for anatomical terms, OBI for experimental methods, and EDAM for data types and file format. Regular expression can be specified by the data model for input validation, and last but not least, the declaration of missing information can be made explicit and specific. The CFDE CrossCut Metadata Model (C2M2) relies on Frictionless specifications to define the objects and their relations (Figure 2).")]),e._v(" "),o("p",[o("img",{attrs:{src:a(511),alt:"Figure 2"}}),o("br")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Figure 2")]),e._v(" shows the latest version of the NIH CFDE data models where the central objects to enable data discovery are identified. Namely, study, biomaterial, biosample, file, each coming with a tight, essential set of attributes some of which associated to controlled vocabularies. url: "),o("a",{attrs:{href:"https://docs.nih-cfde.org/en/latest/c2m2/draft-C2M2_specification/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.nih-cfde.org/en/latest/c2m2/draft-C2M2_specification/"),o("OutboundLink")],1),o("br")])]),e._v(" "),o("p",[e._v("Researchers can submit their metadata to the portal via the "),o("a",{attrs:{href:"https://docs.nih-cfde.org/en/latest/cfde-submit/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Datapackage Submission System"),o("OutboundLink")],1),e._v("(Figure 3). By incorporating Frictionless specifications to produce a common metadata model and applying a thin layer of semantic harmonization on core biological objects, we are closer to the goal of making available an aggregated data index that increases visibility, reusability and clarity of access to a wealth of experimental data. The NIH CFDE data portal currently indexes over 2 million data files, mainly from RNA-Seq and imaging experiments from 9 major NIH programs: a treasure trove for data miners.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(512),alt:"Figure 3"}}),o("br")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Figure 3")]),e._v(" shows the architecture of the software components supporting the overall operation, from ETL from the individual DCC into the NIH CFDE data model to the validation and upload component."),o("br"),e._v("\nurl: "),o("a",{attrs:{href:"https://docs.nih-cfde.org/en/latest/cfde-submit/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.nih-cfde.org/en/latest/cfde-submit/docs/"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);
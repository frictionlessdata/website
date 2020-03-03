---
layout: home
heroImage: /img/frictionless-data-blue-logo-text.png
heroText: The zen framework for data integration
tagline: Frictionless Data is a progressive, incrementally adoptable open-source framework that brings simplicity and grace to the data experience - whether you're wrangling a CSV or engineering complex pipelines with terabytes.
actionText: Why Frictionless Data? 
actionLink: /about/
features:
- title: Simple and Approachable
  details: Lean and minimal core. Quick to understand, quick to use.
- title: Versatile and Scalable
  details: Incrementally adoptable, use just a part, scale as you grow.
- title: Progressive
  details: We enhance rather than replace your existing tools and workflows.
footer: Copyright © 2007-present Rufus Pollock, Open Knowledge and Datopian
---

<!-- # Zen = simple, minimal, clean, powerful -->

<div class="banner gray-section py-6 w-full">
  <div class="container mx-auto usedby">
    <h1 class="text-center">Used by</h1>
    <div class="container flex flex-row justify-center">
      <img class="w-32 self-center" src="/img/home/pandas.png" />
      <img class="w-24 self-center pl-12" src="/img/home/kaggle.png" />
      <img class="w-32 self-center pl-12" src="/img/home/openrefine.png" />
      <img class="w-32 self-center pl-12" src="/img/home/data-gov-uk.png" />
      <img class="w-20 self-center pl-12" src="/img/home/18f-logo.png" />
      <img class="w-32 self-center pl-12" src="/img/home/data-gouv-fr.png" />
    </div>
  </div>

</div>

<div class="main-section">
  <div class="inner-container">
    <h1 class="text-center" id="more">For anyone who works with data<br/><small>Especially diverse data and/or across tools or teams</small></h1>
    <div class="features text-center">
      <div class="feature">
        <img src="/img/home/for-researchers.svg" />
        <h2 >Researchers</h2>
        <p>Easily create reproducible research</p>
      </div>
      <div class="feature">
        <img src="/img/home/for-data-scientists.svg" />
        <h2>Data Scientists</h2>
        <p>Create pipelines without effort</p>
      </div>
      <div class="feature">
        <img src="/img/home/for-data-engineers.svg" height="223.375" />
        <h2>Data Engineers</h2>
        <p>Standardize data platforms</p>
      </div>
    </div>
  </div>


<h1 class="text-center">Data Integration and Management</h1>

### What is data integration

Data integration (aka what ETL became) is the job of bringing diverse (and often dirty) data together, cleaning it up, knitting it together and pushing this into downstream applications, analytics or warehouses -- and doing this reliably, repeatedly and automatedly. Data integration subsumes activities like scraping, cleaning, transformation etc.

### What is data management

With the data explosion it has become a job in itself to manage data assets -- locate, track, curate, store and share them.

### These overlap

For example, data integration work will require a way to reliably discover internal and external data assets.

Conversely, data management often requires some data cleaning (integration)

### And they share a common set of "jobs to be done" / "steps on the data journey"

* Sourcing data
* Transform data
* Pushing and storing data

<!-- <JobsDiagram class="px-48 pt-12"></JobsDiagram> -->

</div>

<div class="banner py-8">
  <div class="inner-container">
    <h1 class="text-center pt-6">Some of Our Tooling</h1>
    <div class="container mx-auto flex flex-row py-12">
      <div class="w-1/4 text-center mx-auto">
        <img class="w-24 mx-auto" src="/img/home/data-package-icon-2.svg"></img>
        <h2 class="text-xl pt-4 font-medium">Data Package</h2>
        <p class="text-lg font-light pt-4">Simple container format to describe and package data.</p>
        <a href="/products/data-package/" class="links-github">Read more &raquo;</a>
      </div>
        <div class="w-1/4 mx-auto text-center pl-8">
        <img class="w-24 mx-auto" src="/img/home/goodtables-icon.svg"></img>
        <h2 class="text-xl pt-4 font-medium">GoodTables</h2>
        <p class="text-lg font-light pt-4">Validate data on every change so you catch errors before your users.</p>
        <a href="/products/goodtables/" class="links-github">Read more &raquo;</a>
      </div>
        <div class="w-1/4 mx-auto text-center pl-8">
        <img class="w-24 mx-auto" src="/img/home/datahub-icon.svg"></img>
        <h2 class="text-xl pt-4 font-medium">DataHub</h2>
        <p class="text-lg font-light pt-4">Publish and find data on the next generation data platform.</p>
        <a href="/products/datahub/" class="links-github">Read more &raquo;</a>
      </div>
        <div class="w-1/4 mx-auto text-center pl-8">
        <img class="w-24 mx-auto" src="/img/home/dataflows-icon.svg"></img>
        <h2 class="text-xl pt-4 font-medium">DataFlows</h2>
        <p class="text-lg font-light pt-4">A light intuitive framework for building data processing flows.</p>
        <a href="/products/data-package-pipelines/" class="links-github">Read more &raquo;</a>
      </div>
    </div>
  </div>
</div>

<script>
import JobsDiagram from "@theme/components/JobsDiagram.vue";

export default {
  components: { JobsDiagram }
};
</script>

<style>

.gray-section {
  background-color: #f6f6f6;
}

.inner-container {
  max-width: 900px;
  margin: auto;
}

.usedby {
  max-width: 900px;
}

</style>
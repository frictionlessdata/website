---
layout: home
heroImage: /img/home/toolbox.png
heroText: The zen toolkit for data integration
tagline:  Building data pipelines is as easy as playing with LEGO. A frictionless data ecosystem built on the unix philosophy.Data flows with simplicity and gracefully across diverse tools and teams, enabled by the specs and patterns we have shared. Everyone working with data knows, and many use, these core patterns and tools.
features:
- title: Approachable
  details: Lean and minimal core. Quick to understand, quick to use.
- title: Incrementally Adoptable
  details: Start with just what you need, scale as you grow.
- title: Progressive
  details: We enhance rather than replace your existing tools and workflows.
---

<div class="main-section">
  <div class="inner-container">
    <h1 class="text-center" id="more">For anyone who works with data<br/><small>Especially diverse data and/or across tools or teams</small></h1>
    <div class="features text-center flex flex-row flex-wrap">
      <div class="w-full md:w-1/3 feature">
        <div class="py-12 px-8">
          <img src="/img/home/for-researchers-thick.svg" height="223.375" />
          <h2 >Researchers</h2>
          <p>Easily create reproducible research</p>
        </div>
      </div>
      <div class="w-full md:w-1/3 feature">
        <div class="py-12 px-8">
          <img src="/img/home/for-data-scientists-thick.svg" height="223.375" />
          <h2>Data Scientists</h2>
          <p>Create pipelines without effort</p>
        </div>
      </div>
      <div class="w-full md:w-1/3 feature">
        <div class="py-12 px-8">
          <img src="/img/home/for-data-engineers-thick.svg" height="223.375" />
          <h2>Data Engineers</h2>
          <p>Standardize data platforms</p>
        </div>
      </div>
    </div>
  </div>

<h1 class="text-center">Data Integration and Management</h1>

  <br>

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

<br>

<div class="banner p-8 gray-section" id="video-section">
  <div class="inner-container">
    <div class="sm:container mx-auto text-center">
      <h1>Why Frictionless Data?</h1>
      <p class="text-lg">Rufus Pollock explains the problem Frictionless Data addresses <br> through simple specifications and software.</p>
      <div class="video my-10">
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/lWHKVXxuci0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>

<div class="banner p-8">
  <div class="inner-container">
    <h1 class="text-center">Some of our Tooling</h1>
    <hr>
    <div class="container mx-auto flex flex-row flex-wrap lg:justify-between">
      <div class="w-full sm:w-2/5 lg:w-1/5 my-16 text-center tooling-card">
        <div class="image-border">
          <img class="w-24 mx-auto" src="/img/home/data-package-orange.svg"></img>
        </div>
        <div class="card-details">
          <a href="/tooling/data-package-tools/" class="links-github">Data Package</a>
          <p class="text-lg font-light pt-4">Simple container format used to describe and package data.</p>
        </div>
        <!-- <a href="/tooling/data-package-tools/" class="links-github">Read more &raquo;</a> -->
      </div>
      <div class="w-full sm:w-2/5 lg:w-1/5 my-16 text-center tooling-card">
        <div class="image-border">
          <img class="w-24 mx-auto" src="/img/home/datahub-new.svg"></img>
        </div>
        <div class="card-details">
          <a href="/tooling/goodtables/" class="links-github">DataHub</a>
          <p class="text-lg font-light pt-4">Publish and find data on the next generation data platform.</p>
        </div>
        <!-- <a href="/tooling/datahub/" class="links-github">Read more &raquo;</a> -->
      </div>
      <div class="w-full sm:w-2/5 lg:w-1/5 my-16 text-center tooling-card">
        <div class="image-border">
          <img class="w-24 mx-auto" src="/img/home/goodtables.svg"></img>
        </div>
        <div class="card-details">
          <a href="/tooling/goodtables/" class="links-github">GoodTables</a>
          <p class="text-lg font-light pt-4">Validate data on every change so you catch errors before your users.</p>
        </div>
        <!-- <a href="/tooling/goodtables/" class="links-github">Read more &raquo;</a> -->
      </div>
      <div class="w-full sm:w-2/5 lg:w-1/5 my-16 text-center tooling-card">
        <div class="image-border">
          <img class="w-24 mx-auto" src="/img/home/dataflows.svg"></img>
        </div>
        <div class="card-details">
          <a href="/tooling/goodtables/" class="links-github">DataFlows</a>
          <p class="text-lg font-light pt-4">A light intuitive framework for building data processing flows.</p>
        </div>
        <!-- <a href="/tooling/data-package-pipelines/" class="links-github">Read more &raquo;</a> -->
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
  background-color: #EEEEEE;
}

.inner-container {
  max-width: 900px;
  margin: 0 auto;
}

.inner-container h1 {
  margin-bottom: 16px;
}

.inner-container p {
  font-size: 16px;
  line-height: 1.4;
}


.usedby {
  max-width: 900px;
}
#video-section {
  background-image: url('/img/home/beam.svg');
  background-size: 95% 42%;
  background-position: center; 
  background-repeat: no-repeat;
}

.video {
  margin: auto;
  max-width: 900px;
  width: 100%;
}

.video iframe {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  max-width: 700px;
  height: 400px;
}

.container {
  margin-left: 12px;
}

.links-github {
  color: #000000;
  font-size: 30px;
}

.card-details {
  text-align: initial;
  margin-left: 16px;
}

.card-details p {
  font-size: 16px;
  line-height: 1.5;
  padding: 0;
  margin: 12px 0;
}

hr {
  height: 1px;
  color: #CC785F;
  background-color: #CC785F;
  border: none;
  width: 160px;
}

.tooling-card {
  min-width: 44%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-border {
  padding: 20px;
  border: 2px solid #E47046;
  border-radius: 50%;
  background: #EEEEEE;
  min-width: 80px;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-border img {
  width: 60px;
  height: 60px;
}

.image-border:hover {
  background-color: #FFF;
}

</style>

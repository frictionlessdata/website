---
title: "People"
---

# People

<big><strong>People working on the Frictionless Data proejct.</strong></big>

Frictionless Data has a small core team at the Open Knowledge Foundation and Datopian, and the project is supported by a large community of contributors.

:::tip
There are many ways to join the movement. If you are interested in working on Frictionless Data don't hesitate and contact the Frictionless Team using any available contact provided on this site.
:::

## Core Team

<div class= "flex flex-row">
		<TeamProfile
			v-for="profile in team"
			:key="profile.name"
			:profile="profile" />
</div>

## Tool Fund Partners

Frictionless data has funded international partners who have worked in developing various tools and libraries for the project and they are featured below.
<div class= "flex flex-wrap flex-row">
	<TeamProfile
	  v-for="profile in toolFundPartners"
	  :key="profile.name"
	  :profile="profile"/>
</div>

## Fellows Programme

The Frictionless Data for Reproducible Research Fellows are early career researchers that are being trained to become champions of the Frictionless Data tools and approaches in their fields of research.

<div class= "features flex flex-wrap flex-row">
	<TeamProfile
		v-for="profile in fellows"
		:key="profile.name"
		:profile="profile" />
</div>

## Contributors

Frictionless Data is a collective effort made by many great people working on various projects. You can click on the pictures below to see their code contributions in detail.

<p><strong><big>specs</big></strong></p>
<a href="https://github.com/frictionlessdata/specs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/specs" />
</a>

<p><strong><big>frictionless-py</big></strong></p>
<a href="https://github.com/frictionlessdata/frictionless-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/frictionless-py" />
</a>

<p><strong><big>datapackage-py</big></strong></p>
<a href="https://github.com/frictionlessdata/datapackage-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/datapackage-py" />
</a>

<p><strong><big>tableschema-py</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-py" />
</a>

<p><strong><big>datapackage-js</big></strong></p>
<a href="https://github.com/frictionlessdata/datapackage-js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/datapackage-js" />
</a>

<p><strong><big>tableschema-js</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-js/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-js" />
</a>

<p><strong><big>datapackage-rb</big></strong></p>
<a href="https://github.com/frictionlessdata/datapackage-rb/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/datapackage-rb" />
</a>

<p><strong><big>tableschema-rb</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-rb/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-rb" />
</a>

<p><strong><big>datapackage-php</big></strong></p>
<a href="https://github.com/frictionlessdata/datapackage-php/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/datapackage-php" />
</a>

<p><strong><big>tableschema-php</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-php/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-php" />
</a>

<p><strong><big>tableschema-bigquery-py</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-bigquery-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-bigquery-py" />
</a>

<p><strong><big>tableschema-ckan-datastore-py</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-ckan-datastore-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-ckan-datastore-py" />
</a>

<p><strong><big>tableschema-elasticsearch-py</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-elasticsearch-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-elasticsearch-py" />
</a>

<p><strong><big>tableschema-pandas-py</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-pandas-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-pandas-py" />
</a>

<p><strong><big>tableschema-sql-py</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-sql-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-sql-py" />
</a>

<p><strong><big>tableschema-spss-py</big></strong></p>
<a href="https://github.com/frictionlessdata/tableschema-spss-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tableschema-spss-py" />
</a>

<p><strong><big>tabulator-py</big></strong></p>
<a href="https://github.com/frictionlessdata/tabulator-py/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/tabulator-py" />
</a>

<p><strong><big>website</big></strong></p>
<a href="https://github.com/frictionlessdata/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=frictionlessdata/website" />
</a>

<script>
// import data from './data.json'

var team = [{
	name: 'Rufus Pollock',
	city: 'Paris, France',
	languages: ['en', 'fr'],
	github: 'rufuspollock',
	work: {
		role: 'Creator',
		org: 'Frictionless Data'
	},
	reposOfficial: [
		'datopian/*'
	],
}]


team = team.concat([
	{
		name: 'Evgeny Karev',
		city: 'Moscow, Russia',
		languages: ['en', 'ru'],
		github: 'roll',
		work: {
			role: 'Technical Lead',
			org: 'Frictionless Data'
		},
		reposOfficial: [
			'okfn/*'
		]
	}
])

team = team.concat([
	{
		name: 'Sara Petti',
		city: 'Hamburg, Germany',
		languages: ['en', 'it'],
		github: 'sapetti9',
		work: {
			role: 'Community Manager',
			org: 'Frictionless Data'
		},
		reposOfficial: [
			'okfn/*'
		]
	}
])

team = team.concat([
	{
		name: 'Lilly Winfree',
		city: 'Austin, TX',
		languages: ['en'],
		github: 'lwinfree',
		work: {
			role: 'Product Manager',
			org: 'Frictionless Data'
		},
		reposOfficial: [
			'okfn/*'
		]
	}
])


var toolFundPartners = [
	{
		name: 'Stephen Eglen',
		city: 'UK',
    github: 'sje30',
		work: {
      role: 'Tool Fund 2020 Grantee'
		},
		reposOfficial: [
			'https://sje30.github.io/'
		]
	}
]

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Asura Enkhbayar',
		city: 'Canada',
		github: 'Bubblbu',
		work: {
			role: 'Tool Fund 2020 Grantee'
		},
		reposOfficial: [
			'Bubblbu/metrics-in-context'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Carles Pina i Estany',
		city: 'Spain',
		github: 'cpina',
		work: {
			role: 'Tool Fund 2020 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/schema-collaboration'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Simon Tyrrell and Xingdong Bian',
		city: 'UK',
		github: 'billyfish',
		work: {
			role: 'Tool Fund 2020 Grantee'
		},
		reposOfficial: [
			'billyfish/eirods-dav#frictionless-data-support', 'TGAC/ckan-frictionlessdata'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Nikhil Vats',
		city: 'India',
		github: 'Nikhil-Vats',
		work: {
			role: 'Tool Fund 2020 Grantee'
		},
		reposOfficial: [
			'intermine/im-docs/blob/master/docs/webapp/frictionless/index.md'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'André Heughebaert',
		city: 'Belgium',
		github: 'andrejjh',
		work: {
			role: 'Tool Fund 2019 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/FrictionlessDarwinCore'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'João Alexandre Peschanski',
		city: 'Brasil',
		github: 'neuromat',
		work: {
			role: 'Tool Fund 2019 Grantee'
		},
		reposOfficial: [
			'neuromat/nes'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Greg Bloom',
		city: 'USA',
		github: 'greggish',
		work: {
			role: 'Tool Fund 2019 Grantee'
		},
		reposOfficial: [
			'openreferral/'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Shelby Switzer',
		city: 'USA',
		github: 'switzersc',
		work: {
			role: 'Tool Fund 2019 Grantee'
		},
		reposOfficial: [
			'openreferral/'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
		name: 'Stephan Max',
		city: 'Germany',
		github: 'stephanmax',
		work: {
			role: 'Tool Fund 2019 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/googlesheets-datapackage-tools'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
		name: 'Oleg Lavrovsky',
		city: 'Switzerland',
		github: 'loleg',
		work: {
			role: 'Tool Fund 2017 Grantee'
		},
		reposOfficial: [
			'loleg/DataPackage.jl'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
		name: 'Matt Thompson',
		city: 'UK',
		github: 'cblop',
		work: {
			role: 'Tool Fund 2017 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/datapackage-clj', 'frictionlessdata/tableschema-clj'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Georges Labrèche',
		city: 'Germany',
		github: 'georgeslabreche',
		work: {
			role: 'Tool Fund 2017 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/datapackage-java', 'frictionlessdata/tableschema-java'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Ori Hoch',
		city: 'Israel',
		github: 'OriHoch',
		work: {
			role: 'Tool Fund 2017 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/tableschema-php', 'frictionlessdata/datapackage-php'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
	  name: 'Daniel Fireman',
		city: 'Brasil',
		github: 'danielfireman',
		work: {
			role: 'Tool Fund 2017 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/datapackage-go', 'frictionlessdata/tableschema-go'
		]
	}
])

toolFundPartners = toolFundPartners.concat([
	{
		name: 'Open Knowledge Greece',
		city: 'Greece',
		github: 'okgreece',
		work: {
			role: 'Tool Fund 2017 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/datapackage-r', 'frictionlessdata/tableschema-r'
		]
	}
])


var fellows = [
	{
		name: 'Kate Bowie',
		city: 'USA',
		github: 'katebowie',
		work: {
      role: 'Reproducible Research Fellow 2020-2021'
		},
	}
]
fellows = fellows.concat([
	{
		name: 'Katerina Drakoulaki',
		city: 'Greece',
		github: 'KDrakoulaki',
		work: {
      role: 'Reproducible Research Fellow 2020-2021'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Daniel Alcalà López',
		city: 'Spain',
		github: 'danalclop',
		work: {
      role: 'Reproducible Research Fellow 2020-2021'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Jacqueline Maasch',
		city: 'USA',
		github: 'jmaasch',
		work: {
      role: 'Reproducible Research Fellow 2020-2021'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Evelyn Night',
		city: 'Kenya',
		github: 'E-night',
		work: {
      role: 'Reproducible Research Fellow 2020-2021'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Anne Lee Steele',
		city: 'Switzerland',
		github: 'aleesteele',
		work: {
      role: 'Reproducible Research Fellow 2020-2021'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Sam Wilairat',
		city: 'USA',
		github: 'swilairat',
		work: {
      role: 'Reproducible Research Fellow 2020-2021'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Monica Granados',
		city: 'Canada',
		github: 'Monsauce',
		work: {
      role: 'Reproducible Research Fellow 2019-2020'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Selene Yang',
		city: 'Paraguay',
		github: 'seleneyang',
		work: {
      role: 'Reproducible Research Fellow 2019-2020'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Daniel Ouso',
		city: 'Nigeria',
		github: 'ousodaniel',
		work: {
      role: 'Reproducible Research Fellow 2019-2020'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Lily Zhao',
		city: 'USA',
		github: 'lilyzzhao',
		work: {
      role: 'Reproducible Research Fellow 2019-2020'
		},
	}
])

export default {
  data () {
		return {
			team,
			toolFundPartners,
			fellows,
		}
  }
}
</script>

<style>
	.fluer {
		padding-left: 1rem;
	}

	.flex {
		justify-content: space-around;
	}
</style>

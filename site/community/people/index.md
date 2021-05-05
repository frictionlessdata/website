---
title: "People"
---

# People

## Core Team Members

The development of Frictionless and its ecosystem is guided by an international team.

<TeamProfile
	v-for="profile in team"
	:key="profile.name"
	:profile="profile" />

## Tool Fund Partners

Frictionless data has funded international partners who have worked in developing various tools and libraries for the project and they are featured below.

<TeamProfile
  v-for="profile in toolFundPartners"
  :key="profile.name"
  :profile="profile"/>

## Fellows

The Frictionless Data for Reproducible Research Fellows are early career researchers that are being trained to become champions of the Frictionless Data tools and approaches in their fields of research.

<TeamProfile
	v-for="profile in fellows"
	:key="profile.name"
	:profile="profile" />

<script>
// import data from './data.json'
var team = [{
	name: 'Rufus Pollock',
	title: 'Benevolent Dictator For Life',
	city: 'Paris, France',
	languages: ['en', 'fr'],
	github: 'rufuspollock',
	twitter: 'rufuspollock',
	work: {
		role: 'Creator',
		org: 'FrictionlessData'
	},
	reposOfficial: [
		'frictionlessdata/*', 'datopian/*'
	],
	links: [
		'https://rufuspollock.com/'
	]
}]

team = team.concat([
	{
		name: 'Paul Walsh',
		title: 'Curator',
		city: 'Tel Aviv',
		languages: ['en'],
		github: 'pwalsh',
		work: {
			role: 'CEO',
			org: 'Datopian'
		},
		reposOfficial: [
			'frictionlessdata/*', 'datopian/*'
		]
	}
])

team = team.concat([
	{
		name: 'Irio Musskopf',
		title: 'Lead Developer',
		city: 'Berlin, Germany',
		languages: ['en'],
		github: 'Irio',
		work: {
			role: 'Lead Developer',
			org: 'Datopian'
		},
		reposOfficial: [
			'frictionlessdata/*', 'datopian/*'
		]
	}
])

team = team.concat([
	{
		name: 'Monika Popova',
		title: 'Design Czar',
		city: 'Sofia, Bulgaria',
		languages: ['en', 'de'],
		github: 'monikappv',
		work: {
			role: 'Designer',
			org: 'FrictionlessData'
		},
		reposOfficial: [
			'frictionlessdata/*', 'datopian/*'
		]
	}
])

team = team.concat([
	{
		name: 'Jo Barratt',
		title: 'Delivery Manager',
		city: 'Reading, England',
		languages: ['en'],
		github: 'JoBarratt',
		work: {
			role: 'Delivery Manager',
			org: 'OKFN'
		},
		reposOfficial: [
			'frictionlessdata/*', 'okfn/*'
		]
	}
])

team = team.concat([
	{
		name: 'Evgeny Karev',
		title: 'Senior Developer',
		city: 'Moscow, Russia',
		languages: ['en', 'ru'],
		github: 'roll',
		work: {
			role: 'Tech Lead',
			org: 'Frictionless Data'
		},
		reposOfficial: [
			'frictionlessdata/*', 'okfn/*'
		]
	}
])

team = team.concat([
	{
		name: 'Adrià Mercader',
		title: 'Technical Lead',
		city: 'Tarragona, Spain',
		languages: ['en', 'es'],
		github: 'amercader',
		work: {
			role: 'Developer',
			org: 'Frictionless Data'
		},
		reposOfficial: [
			'frictionlessdata/*', 'okfn/*'
		]
	}
])

team = team.concat([
	{
		name: 'Lilly Winfree',
		title: 'Product Manager for Reproducible Research',
		city: 'Austin, TX',
		languages: ['en'],
		twitter: 'lilscientista',
		github: 'lwinfree',
		work: {
			role: 'Product Manager',
			org: 'FrictionlessData'
		},
		reposOfficial: [
			'frictionlessdata/*', 'okfn/*'
		]
	}
])

var toolFundPartners = [
	{
		name: 'André Heughebaert',
		title: 'Tool Fund 2019 Grantee',
		city: 'Brussels, Belgium',
		languages: ['en'],
    github: 'andrejjh',
		work: {
      role: 'Tool Fund 2019 Grantee'
		},
		reposOfficial: [
			'frictionlessdata/FrictionlessDarwinCore'
		]
	}
]

toolFundPartners = toolFundPartners.concat([
	{
		name: 'Stephan Max',
		title: 'Tool Fund 2019 Grantee',
		city: 'Köln, Germany',
		languages: ['en'],
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
		title: 'Tool Fund Grantee - Julia',
		city: 'Bern, Switzerland',
		languages: ['en', 'fr'],
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
		title: 'Tool Fund Grantee - Clojure',
		city: 'Bristol',
		languages: ['en'],
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
		title: 'Tool Fund Grantee - Java',
		city: 'Bremen, Germany',
		languages: ['en'],
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
		title: 'Tool Fund Grantee - PHP',
		city: 'Israel',
		languages: ['en'],
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
		title: 'Tool Fund Grantee - Go',
		city: 'Maceió, Brasil',
		languages: ['pt','en'],
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
	  name: 'João Alexandre Peschanski',
		title: 'Tool Fund 2019 Grantee - NES',
		city: 'São Paulo',
		languages: ['pt','en'],
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
		title: 'Tool Fund 2019 Grantee - Open Referral',
		city: 'Washington, District Of Columbia',
		languages: ['en'],
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
		title: 'Tool Fund 2019 Grantee - Open Referral',
		city: 'Washington, District Of Columbia',
		languages: ['en'],
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
		name: 'Open Knowledge Greece',
		title: 'Tool Fund Grantee - R',
		city: 'Thessaloniki, Greece',
		languages: ['en', 'gr'],
		twitter: 'okfngr',
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
		name: 'Monica Granados',
		title: 'Reproducible Research Fellow 2019-2020',
		city: 'Canada',
		languages: ['en', 'es'],
		github: 'Monsauce',
		work: {
      role: 'Reproducible Research Fellow 2019-2020'
		},
	}
]

fellows = fellows.concat([
	{
		name: 'Selene Yang',
		title: 'Reproducible Research Fellow 2019-2020',
		city: 'Paraguay',
		languages: ['es', 'en'],
		github: 'seleneyang',
		work: {
      role: 'Reproducible Research Fellow 2019-2020'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Daniel Ouso',
		title: 'Reproducible Research Fellow 2019-2020',
		city: 'Nigeria',
		languages: ['en'],
		github: 'ousodaniel',
		work: {
      role: 'Reproducible Research Fellow 2019-2020'
		},
	}
])

fellows = fellows.concat([
	{
		name: 'Lily Zhao',
		title: 'Reproducible Research Fellow 2019-2020',
		city: 'California',
		languages: ['en'],
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

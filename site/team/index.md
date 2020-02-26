---
title: Team
---

# Team

## Active Core Team Members

The development of Frictionless and its ecosystem is guided by an international team, some of whom have chosen to be featured below.

<TeamProfile
	v-for="profile in team"
	:key="profile.name"
	:profile="profile" />


## Core Team EmeritiS

Here we honor some no-longer-active core team members who have made valuable contributions in the past.

<TeamProfile
	v-for="profile in teamEmeriti"
	:key="profile.name"
	:profile="profile" />


## Community Partners

Some members of the Frictionless community have so enriched it, that they deserve special mention. We've developed a more intimate relationship with these key partners, often coordinating with them on upcoming features and news.

<TeamProfile
	v-for="profile in partners"
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

var partners = [
	{
		name: 'John Chodacki,',
		title: 'Organizer of CSVConf US',
		city: 'Atlanta, GA, USA',
		languages: ['en'],
		work: {
			org: 'California Digital Library'
		}
	}
]

var teamEmeriti = [
	{
		name: 'André Heughebaert,',
		title: 'Tool Fund Grantee - Julia',
		city: 'Brussels, Belgium',
		languages: ['en'],
    github: 'andrejjh',
		work: {
      role: 'IT Software Engineer',
			org: 'Belgian Biodiversity Platform'
		},
		reposOfficial: [
			'loleg/DataPackage.jl', 'loleg/TableSchema.jl'
		]
	}
]

teamEmeriti = teamEmeriti.concat([
	{
		name: 'Stephan Max',
		title: 'Tool Fund Grantee',
		city: 'Köln, Germany',
		languages: ['en'],
		github: 'stephanmax',
		work: {
			role: 'Software Engineer',
			org: 'eyeo-gmbh'
		},
		reposOfficial: [
			'frictionlessdata/googlesheets-datapackage-tools'
		]
	}	
])
/*****************************************/
teamEmeriti = teamEmeriti.concat([
	{
		name: 'Oleg Lavrovsky',
		title: 'Tool Fund Grantee - Julia',
		city: 'Bern, Switzerland',
		languages: ['en'],
		github: 'loleg',
		work: {
			role: ' ',
			org: 'dataletsch'
		},
		reposOfficial: [
			'loleg/DataPackage.jl'
		]
	}	
])

teamEmeriti = teamEmeriti.concat([
	{
		name: 'Matt Thompson',
		title: 'Tool Fund Grantee - Clojure',
		city: 'Bristol',
		languages: ['en'],
		github: 'cblop',
		work: {
			role: 'lecturer in Creative Computing',
			org: 'Bath Spa University'
		},
		reposOfficial: [
			'frictionlessdata/datapackage-clj', 'frictionlessdata/tableschema-clj'
		]
	}
])

teamEmeriti = teamEmeriti.concat([
	{
		name: 'Georges Labrèche',
		title: 'Tool Fund Grantee - Java',
		city: 'Bremen, Germany',
		languages: ['en'],
		github: 'georgeslabreche',
		work: {
			role: ' ',
			org: 'opendatakosovo'
		},
		reposOfficial: [
			'frictionlessdata/datapackage-java', 'frictionlessdata/tableschema-java'
		]
	}
])

teamEmeriti = teamEmeriti.concat([
	{
		name: 'Ori Hoch',
		title: 'Tool Fund Grantee - PHP',
		city: 'Israel',
		languages: ['en'],
		github: 'OriHoch',
		work: {
			role: 'Consultant',
			org: 'Uumpa Tech'
		},
		reposOfficial: [
			'frictionlessdata/tableschema-php', 'frictionlessdata/datapackage-php'
		]
	}
])

teamEmeriti = teamEmeriti.concat([
	{
		name: 'Daniel Fireman',
		title: 'Tool Fund Grantee - Go',
		city: 'Maceió, Brasil',
		languages: ['en'],
		github: 'danielfireman',
		work: {
			role: 'Professor',
			org: 'Instituto Federal de Educação, Ciência e Tecnologia de Alagoas'
		},
		reposOfficial: [
			'frictionlessdata/datapackage-go', 'frictionlessdata/tableschema-go'
		]
	}
])

teamEmeriti = teamEmeriti.concat([
	{
		name: 'Carlos Eduardo Ribas',
		title: 'Tool Fund Grantee - NES',
		city: 'São Paulo',
		languages: ['en'],
		github: 'carlosribas',
		work: {
			role: ' ',
			org: 'neuromat'
		},
		reposOfficial: [
			'neuromat/nes'
		]
	}
])

teamEmeriti = teamEmeriti.concat([
	{
		name: 'Greg Bloom',
		title: 'Open Referral',
		city: 'Washington, District Of Columbia',
		languages: ['en'],
		github: 'greggish',
		work: {
			role: ' ',
			org: 'Open Referral'
		},
		reposOfficial: [
			'openreferral/'
		]
	}
])

teamEmeriti = teamEmeriti.concat([
	{
		name: 'Shelby Switzer',
		title: 'Open Referral',
		city: 'Washington, District Of Columbia',
		languages: ['en'],
		github: 'switzersc',
		work: {
			role: ' ',
			org: 'Open Referral'
		},
		reposOfficial: [
			'openreferral/'
		]
	}
])

export default {
  data () {
		return {
			team: team,
			teamEmeriti: teamEmeriti,
			partners: partners,
		}
  }
}
</script>


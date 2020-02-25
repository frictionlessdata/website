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

export default {
  data () {
		return {
			team: team,
			teamEmeriti: [],
			partners: partners,
		}
  }
}
</script>


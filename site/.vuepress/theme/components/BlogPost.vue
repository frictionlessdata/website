<template>
  <div class="theme-container">
    <div class="container w-2/5 pt-56 mx-auto">
    <h1 class="text-3xl pb-4  ">{{ $page.frontmatter.title }}</h1>
    <p class="text-xl pb-12">{{ $page.frontmatter.summary }} </p>
    <time class="italic"> {{ formatDate($page.frontmatter.date) }} by Max Examplemann </time>
    <TagLinks class="pt-2"/>
    <Content class="pt-12" />
    
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
        methods: {
            // Control how our data is formatted. You can change to format accoring to JS date format.
            formatDate(date, format = 'MMM D, YYYY') {
                return moment(date).format(format)
            }
        }
}
</script>


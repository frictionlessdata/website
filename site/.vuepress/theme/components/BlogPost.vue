<template>
  <div class="theme-container">
    <div class="container w-2/5 pt-56 mx-auto">
    <a href="" class="font-light"> < Go back</a>
    <h1 class="text-3xl pt-6 pb-4  ">{{ $page.frontmatter.title }}</h1>
    <p class="text-xl pb-12">{{ $page.frontmatter.summary }} </p>
    <time class="italic"> {{ formatDate($page.frontmatter.date) }} by Max Examplemann </time>
    <TagLinks class="pt-2 text-blue-500"/>
    <Content class="pt-12" />
    
    </div>
  </div>
</template>

<script>
import { formatDate } from '../util'
import TagLinks from './TagLinks'

export default {
  components: { 
    TagLinks
  },
  methods: {
    formatDate
  }
}
</script>


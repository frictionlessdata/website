<template>
  <main aria-labelledby="main-title" class="page">
    <div class="theme-default-content">
      <header>
        <h1 class="text-3xl pt-6 pb-4  ">{{ $page.frontmatter.title }}</h1>
        <p class="text-xl pb-12">{{ $page.frontmatter.summary }} </p>
        <time class="italic"> {{ formatDate($page.frontmatter.date) }} by Max Examplemann </time>
        <TagLinks class="pt-2 text-blue-500"/>
      </header>
      <Content />
      <footer>
        <a href="/blog/" class="font-light"> < Go back</a>
      </footer>
      </div>
    </div>
  </main>
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


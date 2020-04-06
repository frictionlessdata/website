<template>
  <main aria-labelledby="main-title" class="page">
    <div class="theme-default-content">
      <header>
        <h1 class="text-3xl pt-6">{{ $page.frontmatter.title }}</h1>
        <p class="text-xl pb-6">{{ $page.frontmatter.summary }} </p>
        <time class="italic"> {{ formatDate($page.frontmatter.date) }} by {{ $page.frontmatter.author || "Frictionless Data" }} </time>
        <TagLinks class="pt-4 text-blue-500 pb-6"/>
      </header>
      <Content />
      <Vssue />
      <footer>
        <a href="/blog/"> < Go back</a>
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


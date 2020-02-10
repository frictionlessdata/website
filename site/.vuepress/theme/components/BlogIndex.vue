<template>
  <main class="blog-home" aria-labelledby="main-title">
    <div class="container">  
      <h1 class="pb-6">Frictionless Blog</h1>
      <ul class="flex flex-col">
        <li class="" v-for="page in $pagination.pages">
          <div class="container shadow-md pl-6 pt-6 flex flex-row pb-6">
          <div class="container flex flex-col w-2/3">
            <router-link class="text-2xl page-link pr-12" :to="page.path">{{ page.title }}
            </router-link>
            <div class="container pt-2">
              <p class="text-sm italic inline"> {{ formatDate(page.frontmatter.date) }} by {{ page.frontmatter.author || "Frictionless Data" }} </p>
              <TagLinks class="inline pl-4" /> 
            </div>
            <p class="pt-2 text-xl mr-12"> {{ page.frontmatter.summary }}</p>
          </div>
          <div class="container pl-6 w-1/3 pt-2">
            <img class="w-56 shadow-md" :src=" page.frontmatter.image || page.frontmatter.heroImage || 'https://i.ytimg.com/vi/lWHKVXxuci0/maxresdefault.jpg'" />
          </div>
          </div>
          <hr>
        </li>
        </ul>
      <div id="pagination">
        <router-link class="pl-6" v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
        <router-link class="pl-6" v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
      </div>
      <br><br>
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

<style lang="stylus" scoped>

.blog-home
  padding $navbarHeight 2rem 0
  max-width 820px
  margin 0px auto

h1
  font-size 3rem
  margin 1.8rem auto
  text-align center

ul
  list-style-type none

</style>
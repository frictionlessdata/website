<template>
  <main class="blog-home" aria-labelledby="main-title">
    <div class="container">
      <h1 class="capitalize">Frictionless Blog</h1>
      <h2 class="text-center pb-10 text-gray-600" style="border-bottom:none">
         Page {{$pagination.paginationIndex + 1 }} of {{$pagination.length}}
      </h2>
      <ul class="flex flex-col pl-0" style="border-top:dashed 1px #888">
        <li class="" v-for="page in $pagination.pages">
          <div class="container flex flex-row py-4 my-8" style="border-bottom:dashed 1px #888; margin-left: 0">
          <div class="container flex flex-col md:w-2/3">
            <router-link class="text-3xl page-link pr-12" :to="page.path">{{ page.title }}
            </router-link>
            <div class="text-sm py-2"> {{ formatDate(page.frontmatter.date) }} by {{ page.frontmatter.author || page.frontmatter.authors || "Frictionless Data" }} </div>
              <div v-if="page.frontmatter.tags" class="container flex flex-row">
              <BlogTag :tags="page.frontmatter.tags" />
            </div>
            <p class="text-base mr-12" v-if="page.frontmatter.description"> {{ page.frontmatter.description }} </p>
            <p class="text-base mr-12" v-else-if="!page.frontmatter.description" v-html="page.excerpt"></p>
          </div>
          <div class="flex items-stretch pl-6 md:w-1/3 py-2">
            <img class="w-64 self-center md:block hidden" :src=" page.frontmatter.image || page.frontmatter.heroImage || 'https://i.ytimg.com/vi/lWHKVXxuci0/maxresdefault.jpg'" />
          </div>
          </div>
        </li>
        </ul>
      <div class="flex justify-between mt-10 text-xl" id="pagination">
        <div>
          <router-link class="pr-6" v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
          <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
        </div>
        <span> Page {{$pagination.paginationIndex + 1 }} of {{$pagination.length}} </span>
      </div>
      <br><br>
    </div>
  </main>
</template>

<script>
import { formatDate } from '../util'
import BlogTag from './BlogTag'

export default {
  components: {
    BlogTag
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

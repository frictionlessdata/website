<template>
  <main class="blog-home" aria-labelledby="main-title">
    <div class="container">  
      <h1 class="text-3xl pt-48 pb-20">Frictionless Blog</h1>
      <ul id="default-layout" class="flex flex-col">
        <li class="" v-for="page in $pagination.pages">
          <div class="container mt-6 pb-6 shadow-lg inline-block">
            <div class="container pt-8 pb-4">
            <router-link class="text-2xl pt-4 page-link pl-4" :to="page.path">{{ page.title }}</router-link><br>
            <p class="text-sm italic inline-block pt-2 pl-4"> {{ formatDate($page.frontmatter.date) }} by Frictionless Data </p>
            <TagLinks class="inline pl-3 pl-4" /> 
            <p class="pt-4 text-xl pl-4"> {{ page.frontmatter.summary }}</p>
          </div>
          </div>
          <hr class="">
        </li>
      </ul>
      <div class="pt-12" id="pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
        <router-link class="pl-6" v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import moment from 'moment'

export default {
        methods: {
            formatDate(date, format = 'MMM D, YYYY') {
                return moment(date).format(format)
            }
        }
}
</script>

<style lang="stylus">
.blog-home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
</style>

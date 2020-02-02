<template>
  <main class="blog-home" aria-labelledby="main-title">
    <div class="container">  
      <h1 class="text-3xl pt-48 pb-20">Frictionless Blog</h1>
      <ul id="default-layout" class="flex flex-col">
        <li class="" v-for="page in $pagination.pages">
          <div class="container pb-20">
            <router-link class="text-2xl page-link" :to="page.path">{{ page.title }}</router-link>
            <p class="text-xl"> {{ page.frontmatter.intro }}</p>
            <p class="text-sm italic inline "> {{ page.frontmatter.pub_date }} by Max Exampleman </p>
            <TagLinks class="inline pl-3"/>
            <img class="" :src="page.frontmatter.image"/>

          </div>
        </li>
      </ul>
      <div id="pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
}

</script>

<style lang="stylus">
.blog-home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
</style>

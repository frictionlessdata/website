<template>
  <main class="blog-home" aria-labelledby="main-title">
    <h1>Frictionless Blog</h1>
    <ul id="default-layout">
      <li v-for="page in $pagination.pages">
        <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
      </li>
    </ul>
    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
    </div>
  </main>
</template>

<style lang="stylus">
.blog-home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
</style>

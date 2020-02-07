<template>
  <main class="main container mx-auto w-full">
    <header class="hero h-screen flex flex-row items-center">
      <div class="container self-center w-2/3">
        <h1 class="text-5xl pb-2" v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Frictionless Data' }}</h1>
        <p class="description pb-6 text-2xl">
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>
        <button class="button w-40 rounded-full h-12 bg-blue-500 text-white font-medium text-lg shadow-lg">Learn more</button>
      </div>
      <div class="container">
        <img class="mr-0"
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        >
      </div>
    </header>
    <Content class="theme-default-content custom"/>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">

.home
  padding $navbarHeight 2rem 0
.main
  width: 100%

</style>
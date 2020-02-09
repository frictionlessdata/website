<template>
  <main class="main container mx-auto w-full">
    <header class="hero h-screen flex flex-row items-center">
      <div class="container self-center w-2/3">
        <h1 class="text-5xl pb-2 pl-6" v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Frictionless Data' }}</h1>
        <p class="description pl-6 pb-6 text-2xl">
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>
        <div class="container pl-6">
          <button class="button w-40 rounded-full button-hero h-12 font-medium text-lg shadow-lg">Learn more</button>
        </div>
      </div>
      <div class="container">
        <img class="pl-48"
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

.button-hero {
  background-color: #1A98FF;
  color: white;
}

body {
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(233,246,255,1) 100%);
}

</style>
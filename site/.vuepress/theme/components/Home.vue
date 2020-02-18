<template>
  <div>
    <div class="banner hero-section bg-yellow-400">
      <div class="banner">
      <main class="container relative mx-auto">
        <header class="hero h-screen flex flex-row items-center">
          <div class="container m-12">
            <h1 class="text-5xl pb-2 text-white font-medium pl-6" v-if="data.heroText !== null" id="main-title">{{ "A suite of open tools to help you at every step of the data journey." || $page.frontmatter.heroText || $title || 'Frictionless Data' }}</h1>
            <p class="description pl-6 pb-6 text-white text-2xl">
              {{ $page.frontmatter.tagline || $description || 'Welcome to your VuePress site' }}
            </p>
            <div class="container inline pl-6">
              <button class="button w-48 rounded-full button-hero h-16 font-medium text-xl shadow-lg">Learn more</button>
            </div>
            <div class="container inline pl-6">
              <button class="button w-48 rounded-full button-hero h-16 font-medium text-xl shadow-lg">Get started</button>
             </div>
          </div>
          <div class="container">
            <!-- <img class="pl-48"
              v-if="data.heroImage"
              :src="$withBase(data.heroImage)"
              :alt="data.heroAlt || 'hero'"
            > -->
          </div>
        </header>
      </main>
      </div>
    </div>
    <div class="banner">
    <Content class="theme-default-content custom"/>
    </div>
  </div>  
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
  background-color: white;
  color: #1A98FF;
  cursor: pointer;
}

.image-section {
  background-image: url("/river-flowing.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.1;
}

.hero-section {
  background: rgb(148,93,214);
  background: linear-gradient(223deg, rgba(148,93,214,0.8015406846332283) 0%, rgba(30,162,255,0.8) 100%);

}

</style>
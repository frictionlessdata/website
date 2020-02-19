<template>
  <div>
    <div class="banner hero-section">
      <div class="banner">
      <main class="container relative mx-auto">
        <header class="hero flex flex-row items-center">
          <div class="container pt-32 pb-16 pl-6">
            <h1 class="text-5xl pb-2 text-white font-medium pt-" v-if="data.heroText !=='null'"> {{ data.heroText || 'Frictionless Data' }} </h1>
            <p class="description pb-6 text-white text-2xl">
              {{ $page.frontmatter.tagline || $description || 'Welcome to Frictionless Data' }}
            </p>
            <div class="container inline">
              <button class="w-48 rounded-full button-hero h-16 font-medium text-xl shadow-lg">Learn more</button>
            </div>
            <div class="container pl-4 inline">
              <button class="w-48 rounded-full button-hero2 h-16 font-medium text-xl shadow-lg">Get started</button>
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
        
        <div class="banner pl-6 pr-12">
          <hr>
        </div>
          <div class="flex flex-row flex-wrap">
            <div class="w-1/3">
              <div class="pt-20 text-left p-6">
                <!-- <img class="h-24 pb-4" src="/img/home/dot-light-blue.svg"></img> -->
                <h1 class="text-2xl font-normal text-white">Approachable</h1>
                <p class="text-xl text-white font-light pb-12">We keep things as simple as possible. Read the guide and start using and building  in no time!</p>
              </div>
            </div>
            <div class="w-1/3">
              <div class="pt-20 text-left p-6">
                <!-- <img class="h-24 pb-4" src="/img/home/dot-dark-blue.svg"></img> -->
                <h1 class="text-2xl font-normal text-white">Versatile</h1>
                <p class="text-xl text-white font-light pb-12">An incrementally adoptable ecosystem that scales between a library and a full-featured framework and which works whether you are wrangling an Excel file or working with Terabytes.
                </p>
              </div>
            </div>
            <div class="w-1/3">
              <div class="pt-20 text-left p-6">
                <!-- <img class="h-24 pb-4" src="/img/home/dot-violet.svg"></img> -->
                <h1 class="text-2xl font-normal text-white">Progressive</h1>
                <p class="text-xl text-white font-light pb-12">We work with your existing tooling and data, enhancing and adding to it. – not replacing it!</p>
              </div>
            </div>
          </div>

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
  border-style: solid;
  cursor: pointer;
}

.button-hero2 {
  background-color: #1A98FF;
  color: white;
  border-style: solid;
  cursor: pointer;
}

.image-section {
  background-image: url("/img/home/hero-background-lower-op.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

.hero-section {
  background: rgb(148,93,214);
  background: linear-gradient(223deg, rgba(148,93,214,0.8015406846332283) 0%, rgba(30,162,255,0.8) 100%);

}

</style>
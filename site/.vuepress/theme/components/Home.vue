<template>
<div class="banner whole-page">
  <main class="main-section" aria-labelledby="main-title">
    <header class="hero">
      <img class="w-48 py-10"
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >
        
      <vue-typed-js 
        :strings="['integration', 'science', 'wrangling', 'workflows']" 
        :typeSpeed="150"
        :loop="true"
        :loopCount="30"
      >
        <h1>
          The <span class="tooltip" data-tooltip="zen = simple, minimal, clean, powerful">zen</span>
          toolkit for data <span class="typing"></span>
        </h1>
      </vue-typed-js>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <!-- <p
        class="action inline-block pr-8"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p> --> 
       <p
      class="action inline-block pr-8"> 
        <a href="#video-section" class="colored-button font-normal"> Why Frictionless Data? </a>
    </p>

      <p
      class="action inline-block transparent-button"> 
        <a href="/guide/" class="font-normal"> Get Started </a>
    </p>
    </header>

    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

  </main>

  <Content class="theme-default-content custom"/>

  </div>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  beforeMount(){
    Vue.use(VueTypedJs)
  },
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
.main-section
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 0px;
  padding-left: 2rem;
  max-width 900px
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

.tooltip
  position relative
  border-bottom: 1px dotted #6a8cad;

.tooltip::before, .tooltip::after
  position absolute
  opacity 0
  left 30%
  transition all ease 0.3s

.tooltip::before
  content ""
  border-width 10px 8px 0 8px
  border-style solid
  border-color rgba(0,0,0,0.3) transparent transparent transparent
  top -5px

.tooltip::after
  content: attr(data-tooltip)
  background rgba(0,0,0,0.3)
  font-size 14px
  top -5px
  transform translateY(-100%)
  margin-left -120px
  width 230px
  border-radius 10px
  color #222
  padding 14px

.tooltip:hover::before, .tooltip:hover::after
  opacity 1

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 0

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem

.transparent-button
  font-size 1.2rem
  color #EA6D4C
  border #EA6D4C 1px solid
  background-color white
  padding .8rem 1.6rem
  border-radius 4px
  transition .1s ease
  box-sizing border-box
  cursor pointer
  transition all 0.5s
  border-radius 2em

.transparent-button a {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  color: #EA6D4C;
}

.transparent-button a:after {
  content: '→';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.transparent-button:hover a {
  padding-right: 25px;
}

.transparent-button:hover a:after {
  opacity: 1;
  right: 0;
}

#headerPopup{
  width:75%;
  margin:0 auto;
}

#headerPopup iframe{
  width:100%;
  margin:0 auto;
}

.whole-page {
  padding-top: 3.6rem;
  padding-bottom: 0px;
}

.colored-button {
  display: inline-block;
  color: #fff;
  background-color: #EA6D4C;
  transition: all 0.15s ease;
  box-sizing: border-box;
  font-size 1.2rem
  padding .8rem 1.6rem
  cursor pointer
  border-radius 2em
  border: 1px solid #EA6D4C;
}

.colored-button:hover {
  background-color: #e85f3b ;  
}
  
</style>
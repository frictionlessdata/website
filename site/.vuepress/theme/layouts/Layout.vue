<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <Home v-if="$page.frontmatter.layout === 'home'"/>
    <Product v-else-if="$page.frontmatter.layout === 'product'"/>
    <BlogIndex v-else-if="isBlogIndexPage"/>
    <BlogPost v-else-if="$page.frontmatter.layout === 'Post'"/>
    <Job v-else-if="$page.frontmatter.layout === 'job'"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>

<footer class="banner fd-footer py-16"> 
  <div class="banner flex flex-row">
    <div class="w-1/3 text-center pl-10">
      <img class="w-64" src="/img/home/logo-white-thicker.svg"></img>
    </div>
    <div class="container w-2/3 flex justify-center flex-row px-10">
      <div class="w-1/4 text-left pr-20">
        <h2 class="text-xl font-normal text-white">Supported by</h2>
        <div><img class="w-32 mx-auto py-8" src="/img/home/alfred.svg"></img></div>
        <div><img class="w-32 mx-auto" src="/img/home/open-data-institute.svg"></img></div>
      </div>
      <div class="w-1/4 text-left pr-20">
        <h2 class="text-xl text-white font-normal">About</h2>
        <div class="pt-6"><a href="/about/" class="text-white font-light text-lg">About</a></div>
        <div class="pt-6"><a href="/team/" class="text-white font-light text-lg">Contact</a></div>
        <div class="pt-6"><a href="https://okfn.org/privacy-policy/" class="text-white font-light text-lg">Privacy Policy</a></div>
        <div class="pt-6"><a href="https://okfn.org/terms-of-use/" class="text-white font-light text-lg">Terms of Use</a></div>
      </div>
      <div class="w-1/4 text-left pr-20">
        <h2 class="text-xl text-white font-normal">Help</h2>
        <div class="pt-6"><a href="/contribute/" class="text-white font-light text-lg">Support</a></div>
        <div class="pt-6"><a href="/" class="text-white font-light text-lg">Get started</a></div>
        <div class="pt-6"><a href="/team/" class="text-white font-light text-lg">Community</a></div>
        <!-- <div class="pt-6"><a href="/documentation/" class="text-white font-light text-lg">Documentation</a></div> -->
      </div>
      <div class="w-1/4 text-left pr-20">
        <h2 class="text-xl text-white font-normal">Social</h2>
        <div class="pt-4">
          <img class="w-8 inline-block align-middle" src="/img/home/github.svg"></img>
          <a href="https://github.com/frictionlessdata/" class="text-white inline pl-2 font-light text-lg">GitHub</a>
        </div>  
        <div class="pt-6">
          <img class="w-8 inline-block align-middle" src="/img/home/twitter.svg"></img>
          <a href="https://twitter.com/hashtag/frictionlessdata" class="text-white pl-2 inline font-light text-lg">Twitter</a>
        </div>
        <div class="pt-6 pr-10">
          <img class="w-8 inline-block align-middle" src="/img/home/gitter.svg"></img>
          <a href="https://gitter.im/frictionlessdata/chat" class="text-white pl-2 inline font-light text-lg">Gitter</a>
        </div>
      </div>
    </div>
  </div>
</footer>


  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Product from '../components/Product.vue'
import BlogIndex from '../components/BlogIndex.vue'
import BlogPost from '../components/BlogPost.vue'
import Job from '../components/Job.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '../util'

export default {
  components: { Home, Product, BlogIndex, BlogPost, Job, Page, Sidebar, Navbar },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !(frontmatter.layout == 'home')
        && !this.isBlogIndexPage
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      const layoutClass = this.$page.frontmatter.layout
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        layoutClass,
        userPageClass
      ]
    },

    isBlogIndexPage() {
      return !!(
        this.$page.frontmatter.title &&
        this.$page.frontmatter.title.match(/(?:Page \d+ \| )?Blog/)
      );
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

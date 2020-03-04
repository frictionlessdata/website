<template>
  <footer class="banner footer-background flex flex-row py-16">
    <div class="w-1/3 pl-20 text-center flex flex-col pt-3">
      <img class="w-56" src="/img/home/logo-white-thicker.svg"></img>
      <div class="container flex flex-col pt-12 flex-wrap">
        <img class="w-32" src="/img/home/datopian-logo-white.png"></img>
        <img class="w-32 pt-4" src="/img/home/okfn-logo-white.png"></img>
      </div>
    </div>
    <div class="container w-2/3 flex justify-between mx-auto px-20 flex-row">
      <div class="w-1/4 text-left pr-20">
        <h2 class="text-lg font-normal text-white">Supported by</h2>
        <div><img class="w-32 mx-auto py-8" src="/img/home/alfred.svg"></img></div>
        <div><img class="w-32 mx-auto" src="/img/home/open-data-institute.svg"></img></div>
      </div>
      <div class="w-1/4 text-left pr-20">
        <h2 class="text-lg text-white font-normal">About</h2>
        <div class="pt-6"><a href="/about/" class="text-white font-light text-base">About</a></div>
        <div class="pt-6"><a href="/team/" class="text-white font-light text-base">Contact</a></div>
        <div class="pt-6"><a href="https://okfn.org/privacy-policy/" class="text-white font-light text-base">Privacy Policy</a></div>
        <div class="pt-6"><a href="https://okfn.org/terms-of-use/" class="text-white font-light text-base">Terms of Use</a></div>
      </div>
      <div class="w-1/4 text-left pr-20">
        <h2 class="text-lg text-white font-normal">Help</h2>
        <div class="pt-6"><a href="/contribute/" class="text-white font-light text-base">Support</a></div>
        <div class="pt-6"><a href="/guide/" class="text-white font-light text-base">Get started</a></div>
        <div class="pt-6"><a href="/team/" class="text-white font-light text-base">Community</a></div>
        <!-- <div class="pt-6"><a href="/documentation/" class="text-white font-light text-lg">Documentation</a></div> -->
      </div>
      <div class="w-1/4 text-left pr-10">
        <h2 class="text-xl text-white font-normal">Social</h2>
        <div class="pt-4 flex flex-row">
          <img class="w-8 align-middle" src="/img/home/github.svg"></img>
          <a href="https://github.com/frictionlessdata/" class="text-white pl-2 pt-2 font-light text-base">GitHub</a>
        </div>  
        <div class="pt-6 flex flex-row">
          <img class="w-8 align-middle" src="/img/home/twitter.svg"></img>
          <a href="https://twitter.com/hashtag/frictionlessdata" class="text-white pl-2 pt-2 inline font-light text-base">Twitter</a>
        </div>
        <div class="pt-6 pr-10 flex flex-row">
          <img class="w-8 align-middle" src="/img/home/gitter.svg"></img>
          <a href="https://gitter.im/frictionlessdata/chat" class="text-white pl-2 pt-2 font-light text-base">Gitter</a>
        </div>
      </div>
    </div>
  </div>
    <!-- <div
    class="footer text-center pt-6 text-white"
    v-if="$page.frontmatter.footer"
  >
    {{ $page.frontmatter.footer }}
  </div> -->
  </footer>
</template>

<style scoped>

.footer-background {
  background-color: rgb(64, 54, 77);
}
</style>
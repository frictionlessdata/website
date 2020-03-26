<template>
  <footer class="banner footer-background flex flex-row flex-wrap px-5">
    <div class="w-full sm:w-1/2 lg:w-2/6">
      <div class="text-center my-20 px-6 xl:px-8 xxl:px-10">
        <img class="block w-56 pb-10" src="/img/frictionless-black-full-logo.svg"/>
        <div class="w-1/4"><a href="https://www.datopian.com/"><img class="block w-32 py-2" src="/img/home/datopian-logo-white.png"/></a></div>
        <div class="w-1/5"><a href="https://okfn.org/"><img class="block w-32 py-2" src="/img/home/okfn-logo-white.png" /></a></div>
      </div>
    </div>
    <div class="w-full xs:w-1/2 sm:w-1/4 lg:w-1/6">
      <div class="my-20 px-6 xl:px-8 xxl:px-10">
        <h2 class="text-lg font-normal text-white">Supported by</h2>
        <a href="https://sloan.org/"><img class="w-32 mx-auto py-8" src="/img/home/alfred.svg"></img></a>
        <a href="https://theodi.org/"><img class="w-32 mx-auto" src="/img/home/open-data-institute.svg"></img></a>
      </div>
    </div>
    <div class="w-full xs:w-1/2 sm:w-1/4 lg:w-1/6">
      <div class="my-20 px-6 xl:px-8 xxl:px-10">
        <h2 class="text-lg text-white font-normal">About</h2>
        <div class="pt-6"><a href="/about/" class="text-white font-light text-base">About</a></div>
        <div class="pt-6"><a href="/team/" class="text-white font-light text-base">Contact</a></div>
        <div class="pt-6"><a href="https://okfn.org/privacy-policy/" class="text-white font-light text-base">Privacy Policy</a></div>
        <div class="pt-6"><a href="https://okfn.org/terms-of-use/" class="text-white font-light text-base">Terms of Use</a></div>
      </div>
    </div>
    <div class="w-0 sm:w-1/2 lg:w-0"></div>
    <div class="w-full xs:w-1/2 sm:w-1/4 lg:w-1/6">
      <div class="my-20 px-6 xl:px-8 xxl:px-10">
        <h2 class="text-lg text-white font-normal">Help</h2>
        <div class="pt-6"><a href="/contribute/" class="text-white font-light text-base">Support</a></div>
        <div class="pt-6"><a href="/guide/" class="text-white font-light text-base">Get started</a></div>
        <div class="pt-6"><a href="/team/" class="text-white font-light text-base">Community</a></div>
        <!-- <div class="pt-6"><a href="/documentation/" class="text-white font-light text-lg">Documentation</a></div> -->
      </div>
    </div>
    <div class="w-full xs:w-1/2 sm:w-1/4 lg:w-1/6">
      <div class="my-20 px-6 xl:px-8 xxl:px-10">
        <h2 class="text-xl text-white font-normal">Social</h2>
        <div class="pt-4 flex flex-row">
          <a href="https://github.com/frictionlessdata/" class="text-white pt-2 font-light text-base">
          <img class="w-8 pr-2 align-middle" src="/img/home/github.svg" />
          GitHub</a>
        </div>  
        <div class="pt-6 flex flex-row">
          <a href="https://twitter.com/hashtag/frictionlessdata" class="text-white pt-2 inline font-light text-base">
          <img class="w-8 pr-2 align-middle" src="/img/home/twitter.svg" />
          Twitter</a>
        </div>
        <div class="pt-6 pr-10 flex flex-row">
          <a href="https://gitter.im/frictionlessdata/chat" class="text-white pt-2 font-light text-base">
          <img class="w-8 pr-2 align-middle" src="/img/home/gitter.svg"></img>
          Gitter</a>
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

div > a:hover {
  font-weight: 400;
}
</style>
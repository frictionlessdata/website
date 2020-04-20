<template>
  <footer class="banner footer-background flex flex-row flex-wrap px-5">
    <div class="footer-wrapper__primary">
      <div class="w-full xs:w-1/2 sm:w-1/4 support-section">
        <div class="my-20 px-6 xxl:px-10 footer-section">
          <h2 class="text-lg font-normal footer-link-header">Supported by</h2>
          <div class="icon-wrapper">
            <a href="https://sloan.org/"><img class="w-32 mx-auto py-5" src="/img/home/alfred.svg"></img></a>
            <a href="https://theodi.org/"><img class="w-32 mx-auto" src="/img/home/opendata.svg"></img></a>
          </div>
        </div>
      </div>

      <div class="footer-links-wrappper">
      <div class="w-full xs:w-1/2 sm:w-1/4">
        <div class="my-20 px-6 xxl:px-10 footer-section">
          <h2 class="text-lg font-normal footer-link-header">{{ $site.themeConfig.footer_col1_title }}</h2>
          <div class="pt-4"><a href="/about/" class="font-light text-base footer-link">{{ $site.themeConfig.footer_col1_row1 }}</a></div>
          <div class="pt-4"><a href="/team/" class="font-light text-base footer-link">{{ $site.themeConfig.footer_col1_row2 }}</a></div>
          <div class="pt-4"><a href="https://okfn.org/terms-of-use/" class="font-light text-base footer-link">{{ $site.themeConfig.footer_col1_row3 }}</a></div>
          <div class="pt-4"><a href="https://okfn.org/privacy-policy/" class="font-light text-base footer-link">{{ $site.themeConfig.footer_col1_row4 }}</a></div>
        </div>
      </div>
      <!--  <div class="w-0 sm:w-1/2 lg:w-0"></div>  -->
      <div class="w-full xs:w-1/2 sm:w-1/4">
        <div class="my-20 px-6 xxl:px-10 footer-section">
          <h2 class="text-lg font-normal footer-link-header">{{ $site.themeConfig.footer_col2_title }}</h2>
          <div class="pt-4"><a href="/contribute/" class="font-light text-base">{{ $site.themeConfig.footer_col2_row1 }}</a></div>
          <div class="pt-4"><a href="/guide/" class="font-light text-base">{{ $site.themeConfig.footer_col2_row2 }}</a></div>
          <div class="pt-4"><a href="/team/" class="font-light text-base">{{ $site.themeConfig.footer_col2_row3 }}</a></div>
          <div class="pt-4"><a href="https://github.com/frictionlessdata/forum/issues" class="font-light text-base">{{ $site.themeConfig.footer_col2_row4 }}</a></div>
        </div>
      </div>
      <div class="w-full xs:w-1/2 sm:w-1/4">
        <div class="my-20 px-6 xxl:px-10 footer-section">
          <h2 class="text-lg font-normal footer-link-header">More</h2>
          <div class="pt-4"><a href="/reproducible-research/" class="font-light text-base">{{ $site.themeConfig.footer_col3_row1 }}</a></div>
          <div class="pt-4"><a href="/design/" class="font-light text-base">{{ $site.themeConfig.footer_col3_row2 }}</a></div>
          <div class="pt-4"><a href="/blog/" class="font-light text-base">{{ $site.themeConfig.footer_col3_row3 }}</a></div>
          <div class="pt-4"><a href="/contribute/" class="font-light text-base">{{ $site.themeConfig.footer_col3_row4 }}</a></div>
        </div>
      </div>

      <div class="w-full xs:w-1/2 sm:w-1/4">
        <div class="my-20 px-6 xxl:px-10 footer-section">
          <h2 class="text-xl font-normal footer-link-header">{{ $site.themeConfig.footer_col4_title }}</h2>
          <div class="pt-4 flex flex-row">
            <a href="https://twitter.com/hashtag/frictionlessdata" class="inline font-light text-base">
            <img class="pr-2 align-middle social-link-icon" src="/img/home/twitter.svg" />
            {{ $site.themeConfig.footer_col4_row2 }}</a>
          </div>
          <div class="pt-4 flex flex-row">
            <a href="https://github.com/frictionlessdata/" class="font-light text-base">
            <img class="pr-2 align-middle social-link-icon" src="/img/home/github.svg" />
            {{ $site.themeConfig.footer_col4_row1 }}</a>
          </div>  
          
          <div class="pt-4 pr-10 flex flex-row">
            <a href="https://gitter.im/frictionlessdata/chat" class="font-light text-base">
            <img class="pr-2 align-middle social-link-icon" src="/img/home/gitter.svg"></img>
            {{ $site.themeConfig.footer_col4_row3 }}</a>
          </div>
          <div class="pt-4 flex flex-row">
            <a href="#" class="inline font-light text-base">
            <img class="pr-2 align-middle social-link-icon" src="/img/home/dev.svg" />
            {{ $site.themeConfig.footer_col4_row4 }}</a>
          </div>
        </div>
      </div>
      </div>
    </div>
    
    <!--  <div class="w-full sm:w-1/2 lg:w-2/6 footer-wrapper__secondary">  -->
      <div class="text-center my-20 px-6 xxl:px-10 footer-wrapper__secondary">
        <img class="block w-56" src="/img/fd.svg"/>
        <div class="w-1/5"><a href="https://okfn.org/"><img class="block w-32 py-2 secondary-footer-link" src="/img/home/okn.svg" /></a></div>
        <div class="w-1/4"><a href="https://www.datopian.com/"><img class="block w-32" src="/img/home/datopian.svg"/></a></div>
      </div>
    <!--  </div>   -->
  </div>
    <!-- <div
    class="footer text-center pt-6 text-white"
    v-if="$page.frontmatter.footer"
  >
    {{ $page.frontmatter.footer }}
  </div> -->
  </footer>
</template>

<template>
  <footer class="footer-bg pin-b">
    <div class="banner flex flex-col">
      <div class="banner flex sm:p-5 justify-center">
        <div class="banner footer-items flex flex-row flex-wrap w-2/3 sm:p-5">
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2"> Supported by </div>
          <li class=""><a href="https://sloan.org/"><img class="w-32 mx-auto py-5" src="/img/home/alfred.svg"></img></a><li>
          <li class=""><a href="https://theodi.org/"><img class="w-32 mx-auto" src="/img/home/opendata.svg"></img></a></li>
        </div>
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2"> {{ $site.themeConfig.footer_col1_title }} </div>
          <li class="pt-2"><a href="/about/" class=""> {{ $site.themeConfig.footer_col1_row1 }} </a><li>
          <li class="pt-2"><a href="/team" class=""> {{ $site.themeConfig.footer_col1_row2 }} </a></li>
          <li class="pt-2"><a href="https://okfn.org/terms-of-use/" class=""> {{ $site.themeConfig.footer_col1_row3 }} </a></li>
          <li class="pt-2"><a href="https://okfn.org/privacy-policy/" class=""> {{ $site.themeConfig.footer_col1_row4 }} </a></li>
        </div>
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2"> {{ $site.themeConfig.footer_col2_title }} </div>
          <li class="pt-2"><a href="/contribute/" class=""> {{ $site.themeConfig.footer_col2_row1 }} </a><li>
          <li class="pt-2"><a href="/guide/" class=""> {{ $site.themeConfig.footer_col2_row2 }} </a></li>
          <li class="pt-2"><a href="/team/" class=""> {{ $site.themeConfig.footer_col2_row3 }} </a></li>
          <li class="pt-2"><a href="https://github.com/frictionlessdata/forum/issues" class=""> {{ $site.themeConfig.footer_col2_row4 }} </a></li>
        </div>
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2"> {{ $site.themeConfig.footer_col3_title }} </div>
          <li class="pt-2"><a href="/reproducible-research/" class=""> {{ $site.themeConfig.footer_col3_row1 }} </a><li>
          <li class="pt-2"><a href="/design/" class=""> {{ $site.themeConfig.footer_col3_row2 }} </a></li>
          <li class="pt-2"><a href="/blog/" class=""> {{ $site.themeConfig.footer_col3_row3 }} </a></li>
          <li class="pt-2"><a href="/contribute/" class=""> {{ $site.themeConfig.footer_col3_row4 }} </a></li>
        </div>
        <div class="box-border bottom-padding w-full sm:w-1/2 lg:w-1/5">
          <div class="footer-title font-normal text-xl pb-2"> {{ $site.themeConfig.footer_col4_title }} </div>
          <li class="pt-2"> <a href="https://twitter.com/frictionlessd8a" class="inline font-light text-base">
            <img class="pr-2 align-middle social-link-icon" src="/img/home/twitter.svg" />
            {{ $site.themeConfig.footer_col4_row2 }}</a>
          <li>
          <li class="pt-2">
            <a href="https://github.com/frictionlessdata/" class="font-light text-base">
              <img class="pr-2 align-middle social-link-icon" src="/img/home/github.svg" />
              {{ $site.themeConfig.footer_col4_row1 }}
            </a>
          </li>
          <li class="pt-2">
            <a href="https://gitter.im/frictionlessdata/chat" class="font-light text-base">
              <img class="pr-2 align-middle social-link-icon" src="/img/home/gitter.svg"></img>
              {{ $site.themeConfig.footer_col4_row3 }}
            </a>
          </li>
        </div>
      </div> 
      </div>
    <div class="banner flex sm:px-5 justify-center footer-logo">
      <div class="banner flex flex-row flex-wrap w-2/3 sm:p-5">
        <div class="container sm:w-1/5 lg:w-1/4">
          <a href="/">
            <img src="/img/fd.svg" class="h-15 pl-4 pt-8" />
          </a>
        </div>
        <div class="container lg:w-1/5">
          <a href="https://okfn.org/">
            <img src="/img/home/okn.svg" class="h-12 pl-4 pt-12" />
          </a>
        </div>
        <div class="container lg:w-1/5">
          <a href="https://www.datopian.com/">
            <img src="/img/home/datopian.svg" class="h-10 pl-4 pt-12" />
          </a>
        </div>
     
      </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

li {
  list-style: none;
}

.footer-bg {
  background-color: #EEEEEE;
  border-top: 1px solid #eaeaea;
}

li > a {
  color:rgb(102, 102, 102);
  font-weight: 300;
  font-size: 1rem;
}

li > a:hover {
  font-weight: 500;
}

.footer-title {
  color: black;
  font-size: 1.1rem;
}
.footer-items{
  margin-left: 8em;
}

.footer-logo{
  margin-left: 2.5em;
}

.bottom-padding{
  padding-bottom: 1em;
}
</style>


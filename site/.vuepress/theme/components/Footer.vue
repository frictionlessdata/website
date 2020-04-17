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

<style scoped>

.footer-background {
  background-color: #EEEEEE;
  flex-direction: column;
}

.footer-wrapper__primary,
.footer-wrapper__secondary {
  display: flex;
  justify-content: center;
}

.footer-wrapper__primary {
  margin: 0 auto;
}

.footer-wrapper__secondary {
  margin: 0 0 2rem 0;
  align-items: center;
}


a {
  color: #000000;
}

.footer-links-wrappper {
  display: flex;
  width: 70%
}

.footer-link-header {
  font-size: 20px;
  border: none;
  padding-bottom: 0;
  margin-bottom: 10px;
  color: #000000;
}

.footer-section {
  display: inline-block;
}

.secondary-footer-link {
  margin: 0 auto;
}

.social-link-icon {
  width: 16px;
}

@media (max-width: 940px) {
  .footer-wrapper__primary {
    flex-direction: column;
    align-items: center;
  }

  .footer-wrapper__primary .support-section {
    width: 50%;
  }

  .support-section .my-20 {
    margin-bottom: 0;
  }

  .footer-links-wrappper {
    width: 100%
  }

  .footer-wrapper__secondary {
    justify-content: space-between;
  }

  .icon-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

}

@media (max-width: 760px) {
 .footer-wrapper__primary{
    margin: 0;
  }

  .px-5 {
    padding-left: 2rem;
    padding-right: 0;
  }
}

@media (max-width: 680px) {
  .footer-links-wrappper {
    flex-wrap: wrap;
    width: 90%
  }

  .footer-links-wrappper .w-full {
    width: 50%
  }

  .footer-links-wrappper .my-20 {
    margin-bottom: 0;
    margin-top: 3rem;
  }

  .footer-wrapper__secondary {
    margin-top: 3rem;
  }
}

div > a:hover {
  font-weight: 400;
}
</style>
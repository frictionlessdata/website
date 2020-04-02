<template>
  <footer>
    <div class="banner footer-sb page-edit flex flex-row">
      <div class="container flex flex-row">
        <div class="container">
          <p class="">{{ $site.themeConfig.footer_col1_title }}</p>
          <ul class="">
            <li><a href="/about/">{{ $site.themeConfig.footer_col1_row1 }}</a></li>
            <li><a href="/team/">{{ $site.themeConfig.footer_col1_row2 }}</a></li>
            <li><a href="https://okfn.org/privacy-policy/">{{ $site.themeConfig.footer_col1_row3 }}</a></li>
            <li><a href="https://okfn.org/terms-of-use/">{{ $site.themeConfig.footer_col1_row4 }}</a></li>
          </ul>
        </div>
        <div class="container">
          <p class="">{{ $site.themeConfig.footer_col2_title }}</p>
          <ul class="">
            <li>
              <a href="/contribute/">{{ $site.themeConfig.footer_col2_row1 }}</a>
            </li>
            <li>
              <a href="/guide/">{{ $site.themeConfig.footer_col2_row2 }}</a>
            </li>
            <li>
              <a href="/team/">{{ $site.themeConfig.footer_col2_row3 }}</a>
            </li>
          </ul>
        </div>
        <div class="container">
          <p class="">{{ $site.themeConfig.footer_col3_title }}</p>
          <ul class="">
            <li><a href="https://github.com/frictionlessdata/" target="_blank">{{ $site.themeConfig.footer_col3_row1 }}</a></li>
            <li>
              <a href="https://twitter.com/hashtag/frictionlessdata" target="_blank">{{ $site.themeConfig.footer_col3_row2 }}</a>
            </li>
            <li>
              <a href="https://gitter.im/frictionlessdata/chat" target="_blank">{{ $site.themeConfig.footer_col3_row3 }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  <!-- 
            <div class="row">
              <div class="col-sm-12">
                <img src="" height="30" class="foot-logo" />
                <img src="" height="40" class="foot-logo" />
              </div>
            </div>
          </div>
        </div>
      </div> -->
  </footer>
</template>

<style scoped>

ul {
  list-style-type: none;
  padding-left: 0;
}

li > a:hover {
  font-weight: 600;
}
</style>

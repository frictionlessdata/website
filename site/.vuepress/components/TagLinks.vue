<template lang="html">
  <div>
    <img class="w-6 h-6 inline text-lg" src="https://www.pngkey.com/png/full/349-3495832_tag-icon-png-file-tag-icon-grey.png"/>
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}">
      {{tag}}
    </router-link>
  </div>
</template>
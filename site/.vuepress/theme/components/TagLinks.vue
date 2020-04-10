<template lang="html">
  <div>
    <img class="w-4 h-4 inline text-lg" src="https://image.flaticon.com/icons/png/512/94/94699.png"/>
    <router-link class="pl-2"
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags/#${tag}`}">
      {{tag}}
    </router-link>
  </div>
</template>

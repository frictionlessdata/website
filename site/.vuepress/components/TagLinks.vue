<template lang="html">
  <div>
    Tags:
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}">
      {{tag}}
    </router-link>
  </div>
</template>

<script>
export default {
  
}

// <template lang="html">
//   <div>
//     <img class="w-4 h-4 inline text-lg" src="https://image.flaticon.com/icons/png/512/94/94699.png"/>
//     <router-link
//       v-for="tag in $page.frontmatter.tags"
//       :key="tag"
//       :to="{ path: `/tags.html#${tag}`}">
//       {{tag}}
//     </router-link>
//   </div>
// </template>

</script>
<template>
  <div>
    <BlogTag :tags="$frontmatterKey.list"/>
  </div>
</template>


<script>
import BlogTag from '../components/BlogTag';

export default {
  components: {
    BlogTag
  }
}
</script>
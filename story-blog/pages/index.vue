<template>
  <div class="container">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id"
    />
  </div>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview"
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      posts: [
        {
        title: 'A New Idea',
        previewText: 'This will be great',
        thumbnailUrl: 'http://cfjp.xsrv.jp/ess-demo/wp-content/uploads/2017/03/portfolio5.jpg',
        id: 'a-new-beginning'
        },
        {
          title: 'A Second Idea',
          previewText: 'This will be great',
          thumbnailUrl: 'http://cfjp.xsrv.jp/ess-demo/wp-content/uploads/2017/03/portfolio5.jpg',
          id: 'a-second-beginning'
        }
      ]
    }
  }
}
</script>

<style>

</style>

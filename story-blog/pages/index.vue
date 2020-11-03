<template>
  <div class="container">
    <nuxt-link
      v-for="post in posts"
      :key="post.id"
      :to="post.id">
      <article class="post-preview">
        <div
          :style="{backgroundImage:post.thumbnailUrl}"
          class="post-preview-thumbnail">
        </div>
        <div class="post-preview-content">
          <h1>{{ post.title }}</h1>
          <p>{{ post.previewText }}</p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
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

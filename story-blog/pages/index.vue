<template>
  <div id="posts">
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
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
      version: "draft",
      start_with: 'blog/'
      })
      .then(res => {
      console.log(res);
      return res.data.stories.map(bp => {
        id: bp.slug,
        title: bp.content.title,
      });
      });
  }
/*  data() {
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
          id: 'a-third-beginning'
        },
        {
          title: 'A Third Great Idea',
          previewText: 'This will be great',
          thumbnailUrl: 'http://cfjp.xsrv.jp/ess-demo/wp-content/uploads/2017/03/portfolio5.jpg',
          id: 'a-second-beginning'
        },
        {
          title: 'Last Good Idea',
          previewText: 'This will be great',
          thumbnailUrl: 'http://cfjp.xsrv.jp/ess-demo/wp-content/uploads/2017/03/portfolio5.jpg',
          id: 'a-last-beginning'
        }
      ]
    }
  }*/
}
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>

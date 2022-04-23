<template>
  <div>
    <h1>Test page</h1>

    <Post
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :decription="post.decription"
      :image="post.image"
      :tags="post.tags"
      :timestamp="post.timestamp"
    ></Post>
  </div>
</template>

<script>
  import Post from '@/components/Post.vue';

  export default {
    components: {
      Post
    },
    data() {
      return {
        posts: [
        {
          id: 2,
          title: "Title2",
          decription: "Decription2",
          image: "https://icons-for-free.com/iconfiles/png/512/inode+directory-1329319930127274200.png",
          tags: ["#post", "#post2"],
          timestamp: "2022-04-22 18:59:01"
        }, {
          id: 1,
          title: "Title1",
          decription: "Decription1",
          image: "https://icons-for-free.com/iconfiles/png/512/inode+directory-1329319930127274200.png",
          tags: ["#post", "#post1"],
          timestamp: "2022-04-21 18:59:01"
        }]
      }
    }
  }
</script>

<style>

</style>

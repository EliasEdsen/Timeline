<template>
  <div>
    <h1>Test page</h1>

    <button @click=test()>Enlarge text</button>

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
      Post: Post
    },
    emits: ['posts'],
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
    },

    methods: {
      test() { window.serverCall({aaa: 'bbb'}, 'GET', '/posts/post?tags=aa,bb,cc&user=dd', (response) => {console.log(response);}) }
    }
  }
</script>

<style>

</style>

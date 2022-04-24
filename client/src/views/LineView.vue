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
    // emits: ['posts'],
    data() {
      return {
        posts: []
      }
    },

    methods: {
      test() { window.serverCall({aaa: 'bbb'}, 'GET', '/posts/post?tags=aa,bb,cc&user=dd', (response) => { this.posts = response.posts; }) }
    }
  }
</script>

<style>

</style>

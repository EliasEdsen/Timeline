<template>
  <img :src="image" alt="The main image of the post">
  <h4>{{ title }}</h4>
  <h4>{{ decription }}</h4>
  <h4 v-for="tag in tags">{{ tag }}</h4>
  <h4>{{ timestamp }}</h4>
</template>

<script>
export default {
  props: ['title', 'decription', 'tags', 'image', 'timestamp'],

  data() {
    return {

    }
  }
}
</script>

<style>
  img {
    width: 20px
  }
</style>

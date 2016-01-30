<template>
  <img :src="imageUrl" class="images" />
</template>

<script>
export default {
  props: {
    comment: {
      required: true,
    },
  },

  computed: {
    imageUrl() {
      const image = this.filter(this.comment);
      if (image[0].substr(-4, 1) !== '.') {
        return `${image[0]}.png`;
      } else {
        return image[0];
      }
    },
  },

  methods: {
    filter(comment) {
      return comment.body.match(/(http:\/\/(.*)imgur.com\/(.*))(\?.*)?/);
    },
  },
}
</script>

<style>
  .images {
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid grey;
  }
</style>

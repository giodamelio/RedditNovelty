<template>
  <div>
    <img
      :src="imageUrl"
      v-show="!loading"
      class="images"
    />

    <div
      v-show="loading"
      class="center"
    >
      <i class="fa fa-spinner fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenericImgur',

  props: {
    comment: {
      required: true,
    },
  },

  data() {
    return {
      loading: true,
    };
  },

  created() {
    // Load the images
    const image = new Image();
    image.src = this.imageUrl;
    image.onload = () => this.loading = false
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

<style scoped>
  .images {
    width: 100%;
    border: 1px solid grey;
  }

  .center {
    text-align: center;
  }
</style>

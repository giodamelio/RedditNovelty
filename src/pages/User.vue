<template>
  <div class="row">
      <template v-for="comment in comments" track-by="id">
        <div class="col-12-sm">
          <generic-imgur :comment="comment"></generic-imgur>
        </div>
      </template>
  </div>
</template>

<script>
import GenericImgur from '../components/transforms/GenericImgur.vue';

export default {
  components: {
    GenericImgur,
  },

  data() {
    return {
      comments: [],
      afterId: null,
    };
  },

  created() {
    this.getComments();
  },

  methods: {
    getComments() {
      const url = `https://www.reddit.com/user/${this.$route.params.username}/comments.json`; 
      fetch(url)
        .then(response => response.json())
        .then(data => data.data)
        .then(data => {
          // Remember the after id so we can fetch the next page
          this.afterId = data.after;

          // Tidy up the comments and append them to the last
          this.comments = this.comments.concat(
            data.children
              // Tidy up data
              .map(comment => comment.data)

              // Filter out comments without the content we want
              .filter(comment => GenericImgur.methods.filter(comment))
          );
        });
    },
  },
}
</script>

<style>
</style>

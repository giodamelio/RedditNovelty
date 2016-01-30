<template>
  <div class="row">
    <div v-if="$loadingRouteData" class="center">
      <i class="fa fa-spinner fa-spin fa-4x"></i>
    </div>

    <div v-if="!$loadingRouteData">
      <template v-for="comment in comments" track-by="id">
        <div class="col-12-sm">
          <generic-imgur :comment="comment"></generic-imgur>
        </div>
      </template>
    </div>
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

  methods: {
    getComments() {
      const url = `https://www.reddit.com/user/${this.$route.params.username}/comments.json`; 
      return fetch(url)
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

  route: {
    data() {
      this.comments = [];
      return this.getComments();
    },
  },
}
</script>

<style>
  .center {
    text-align: center;
  }
</style>

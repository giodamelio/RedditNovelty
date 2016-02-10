<template>
  <div v-if="$loadingRouteData" class="center">
    <div class="row">
      <div class="col-12-cm">
        <i class="fa fa-spinner fa-spin fa-4x"></i>
      </div>
    </div>
  </div>
  <div v-if="!$loadingRouteData">
    <template
      v-for="comment in comments"
      track-by="id"
    >
      <div class="row">
        <div class="col-12-sm">
          <comment
            :content-transform="transform"
            :comment="comment"
          ></comment>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import users, { components } from '../users';
import Comment from '../components/Comment.vue';

export default {
  components: {
    Comment,
    ...components,
  },

  data() {
    return {
      comments: [],
      afterId: null,
    };
  },

  computed: {
    transform() {
      return users[this.$route.params.username].transform.name;
    },
  },

  // Attach and detach scroll events
  ready() {
    window.addEventListener("optimizedScroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("optimizedScroll", this.handleScroll);
  },

  methods: {
    getComments(after) {
      const username = this.$route.params.username;
      const afterId = this.afterId ? `?after=${this.afterId}` : '';
      const url = `https://www.reddit.com/user/${username}/comments.json${afterId}`;
      return fetch(url)
        .then(response => response.json())
        .then(data => data.data)
        .then(data => {
          // Remember the after id so we can fetch the next page
          this.afterId = data.after;

          // Get the transform for this user
          const transform = users[username].transform;

          // Tidy up the comments and append them to the last
          this.comments = this.comments.concat(
            data.children
              // Tidy up data
              .map(comment => comment.data)

              // Filter out comments without the content we want
              .filter(comment => transform.methods.filter(comment))
          );
        });
    },

    handleScroll() {
      if (this.getScrollPercent() >= 80) {
        console.log('Loading new items');
        this.getComments(this.afterId);
      }
    },

    // Return the percent the pages is scrolled
    getScrollPercent() {
      const h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
      return h[st]||b[st] / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    },
  },

  route: {
    canReuse() {
      return false;
    },

    data() {
      this.comments = [];
      this.afterId = null;
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

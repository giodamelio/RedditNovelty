<template>
  <div>
    <div v-if="loading" class="center">
        <div class="row">
          <div class="col-12-cm">
            <i class="fa fa-spinner fa-spin fa-2x"></i>
          </div>
        </div>
      </div>
      <div v-if="!loading">
        <div v-if="parentComment.stickied != null">
          <reddit-comment :comment="parentComment"></reddit-comment>
        </div>
        <reddit-comment :comment="comment" :indent-level="1"></reddit-comment>
      </div>
  </div>
</template>

<script>
import RedditComment from './RedditComment.vue';

export default {
  components: {
    RedditComment,
  },

  props: {
    comment: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      loading: true,
      parentComment: null,
    };
  },

  ready() {
    this.getParentComment()
      .then(() => {
        this.loading = false;
      });
  },

  methods: {
    getParentComment() {
      const url = `https://www.reddit.com/api/info.json?id=${this.comment.parent_id}`;
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          this.parentComment = data.data.children[0].data;
          return data;
        })
    },
  },
}
</script>

<style scoped>
</style>

<template>
  <div class="center">
    <p>
      {{{ comment_pretty }}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'GenericBody',

  props: {
    comment: {
      required: true,
    },
  },

  computed: {
    comment_pretty() {
      const md = new markdownit();
      return md.render(this.comment.body);      
    },
  },

  methods: {
    filter(comment) {
      return true;
    },
  },
}
</script>

<style>
  .center {
    text-align: center;
  }
</style>

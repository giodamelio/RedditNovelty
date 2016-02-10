<template>
  <div class="center">
    <p>
      {{{ comment.body | markdown }}}
    </p>
  </div>
</template>

<script>
import markdownit from 'markdown-it';

export default {
  name: 'GenericBody',

  props: {
    comment: {
      required: true,
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

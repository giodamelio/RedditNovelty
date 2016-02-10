<template>
  <div v-bind:style="indentClass">
    <small>
      <a href="https://reddit.com/u/{{ comment.author}}">
        {{ comment.author }}
      </a>
      {{ comment.score }} points
    </small>
    <div class="indent">
      {{{ comment.body | markdown }}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
    indentLevel: {
      type: Number,
    },
  },

  computed: {
    indentClass() {
      return {
        marginLeft: this.indentLevel * 10 + 'px',
      };
    },
  },
}
</script>

<style scoped>
  .indent {
    margin-left: 10px;
  }
</style>

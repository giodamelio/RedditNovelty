<template>
  <div>
    <component :is="transform" :comment="comment"></component>
  </div>
</template>

<script>
import { components } from '../users';

export default {
  components: {
    ...components,
  },

  props: {
    transform: {
      type: String,
      required: true,
    },
    comment: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>

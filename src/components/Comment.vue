<template>
  <div>
    <component :is="transform" :comment="comment"></component>

    <ul class="nav nav-pills nav-justified">
      <li role="presentation">
        <a @click="transform = contentTransform">
          <i class="fa fa-reddit-alien"></i> Content
        </a>
      </li>
      <li role="presentation">
        <a @click="transform = 'CommentText'">
          <i class="fa fa-comments"></i> Comment
        </a>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import { components } from '../users';
import CommentText from '../components/CommentText.vue';

export default {
  components: {
    ...components,
    CommentText,
  },

  data() {
    return {
      transform: this.contentTransform,
    };
  },

  props: {
    contentTransform: {
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

<style scoped>
  hr {
    margin-top: 0;
  }
</style>

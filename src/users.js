import GenericImgur from './components/transforms/GenericImgur.vue';
import GenericBody from './components/transforms/GenericBody.vue';

export const components = {
  GenericImgur,
  GenericBody,
};

/* eslint-disable quote-props */
export default {
  'shitty_watercolour': {
    name: 'Shitty_Watercolour',
    transform: GenericImgur,
  },
  'awildsketchappeared': {
    name: 'AWildSketchAppeared',
    transform: GenericImgur,
  },
  'poem_for_your_sprog': {
    name: 'Poem_for_your_sprog',
    transform: GenericBody,
  },
};
/* eslint-enable quote-props */

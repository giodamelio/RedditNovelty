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
  'sure_ill_draw_that': {
    name: 'Sure_Ill_Draw_That',
    transform: GenericImgur,
  },
  'animates_everything': {
    name: 'Animates_Everything',
    transform: GenericImgur,
  },
  'etch_a_sketcher': {
    name: 'Etch_A_Sketcher',
    transform: GenericImgur,
  },
  'illustratingreddit': {
    name: 'illustratingreddit',
    transform: GenericImgur,
  },
};
/* eslint-enable quote-props */

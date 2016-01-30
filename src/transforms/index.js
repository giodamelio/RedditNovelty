import genericImgur from './generic_imgur';

export default function transform(username, data) {
  return new Promise((resolve, reject) => {
    /* eslint-disable quote-props */
    const transforms = {
      'shitty_watercolour': genericImgur,
      'awildsketchappeared': genericImgur,
    };
    /* eslint-enable quote-props */

    const user = username.toLowerCase();
    if (user in transforms) {
      transforms[user](data, (err, items) => {
        if (err) {
          return reject(err);
        }
        return resolve(items);
      });
    }
    return reject('Unknown user transform');
  });
}

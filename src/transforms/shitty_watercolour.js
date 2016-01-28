import _ from 'highland';

export default function (data, callback) {
  _(data)
    .map(comment => comment.data)

    // Get the imgur link out of the comment
    .map(comment => {
      const image = comment.body.match(/(http:\/\/(.*)imgur.com\/(.*))(\?.*)?/);
      if (image) {
        return {
          ...comment,
          image: image[0],
        };
      }
      return comment;
    })

    // Filter out posts without an image link
    .filter(comment => comment.image)

    // Get the direct image link
    // Simply add an extension if there isnt one, imgur does the rest
    .map(comment => {
      if (comment.image.substr(-4, 1) !== '.') {
        return {
          ...comment,
          image: `${comment.image}.png`,
        };
      }
      return comment;
    })

    // Handle errors
    .errors(err => callback(err))

    .toArray((comments) => {
      callback(null, comments);
    });
}

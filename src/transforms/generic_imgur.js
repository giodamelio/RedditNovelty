import React, { PropTypes } from 'react';
import _ from 'highland';

class Item extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 center">
          <img
            src={this.props.image}
            title={this.props.body}
            className="images"
          />
        </div>
      </div>
    );
  }
}

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

    // Turn comment into element
    .map(comment =>
      <Item
        key={comment.id}
        image={comment.image}
        body={comment.body}
      />
    )

    // Handle errors
    .errors(err => callback(err))

    .toArray((comments) => {
      callback(null, comments);
    });
}

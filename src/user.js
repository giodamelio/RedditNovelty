import React from 'react';
import _ from 'highland';

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    fetch(`https://www.reddit.com/user/${this.props.params.userId}/comments.json`)
      .then(response => response.json())
      .then(json => {
        _(json.data.children)
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
          .errors(err => console.error(err))

          .toArray((comments) => {
            this.setState({
              comments,
            });
          });
      })
      .catch(ex => console.error('Parsing failed', ex));
  }

  render() {
    return (
      <div className="center">
        {this.state.comments.map((comment, index) =>
          <img
            key={index}
            src={comment.image}
            title={comment.body}
            className="images" />
        )}
      </div>
    );
  }
}

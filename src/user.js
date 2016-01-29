import React from 'react';

import transform from './transforms';

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    const username = this.props.params.userId;
    fetch(`https://www.reddit.com/user/${username}/comments.json`)
      .then(response => response.json())

      // Transform the comments into items based on user
      .then(json =>
        transform(username, json.data.children)
      )

      .then(comments =>
        this.setState({
          comments,
        })
      )

      .catch(ex => console.error('Parsing failed', ex));
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) =>
          <div className="row" key={index}>
            <div className="col-lg-12 center">
              <img
                src={comment.image}
                title={comment.body}
                className="images" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

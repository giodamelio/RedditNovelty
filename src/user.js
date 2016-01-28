import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch(`https://www.reddit.com/user/${this.props.params.userId}/comments.json`)
      .then(response => response.json())
      .then(json => this.setState({
        data: json.data,
      }))
      .catch(ex => console.err('parsing failed', ex));
  }

  render() {
    const comments = this.state.data.children || [];
    return (
      <ul>
        {comments.map((comment, index) =>
          <li key={index}>{comment.data.body}</li>
        )}
      </ul>
    );
  }
}

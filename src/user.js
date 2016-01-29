import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

import transform from './transforms';

export default class User extends React.Component {
  static propTypes = {
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor() {
    super();

    this.state = {
      comments: [],
      isLoading: true,
    };

    this.loadMoreItems = this.loadMoreItems.bind(this);
  }

  componentDidMount() {
    this.getItems(this.props.params.username);
  }

  // Get comments from reddit and transform them into user specfic comment elements
  getItems(username, after) {
    this.setState({ isLoading: true });
    const afterId = after ? `?after=${after}` : '';
    const url = `https://www.reddit.com/user/${username}/comments.json${afterId}`;
    return fetch(url)
      .then(response => response.json())

      // Transform the comments into items based on user
      .then(json => {
        this.setState({
          afterId: json.data.after,
        });
        return transform(username, json.data.children);
      })

      .then(comments =>
        this.setState({
          comments: this.state.comments.concat(comments),
          isLoading: false,
        })
      );
  }

  loadMoreItems() {
    console.log('Loading items');
    this.getItems(this.props.params.username, this.state.afterId);
  }

  renderWaypoint() {
    if (!this.state.isLoading) {
      return (
        <Waypoint
          onEnter={this.loadMoreItems}
          threshold={2}
        />
      );
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.comments}
        {this.renderWaypoint()}
      </div>
    );
  }
}

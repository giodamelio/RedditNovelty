import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

import transform from './transforms';

// A simple page indicator
const PageNumber = ({ number }) =>
  <div className="row">
    <div className="col-lg-12 center page-number">
      <span>
        <strong>Page Number: {number}</strong>
      </span>
    </div>
  </div>;

export default class User extends React.Component {
  static propTypes = {
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: props.params.username,
      comments: [],
      isLoading: true,
      page: 1,
    };

    this.loadMoreItems = this.loadMoreItems.bind(this);
  }

  componentDidMount() {
    console.log(this.state.username);
    this.loadMoreItems(this.state.username);
  }

  componentWillReceiveProps() {
    console.log(this.state.username);
  }

  // Get comments from reddit and transform them into user specfic comment elements
  getItems(username, after) {
    console.log(`Loading page ${this.state.page}`);

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
          comments: this.state.comments
            .concat([<PageNumber
              number={this.state.page}
              key={this.state.page}
            />])
            .concat(comments),
          isLoading: false,
          page: this.state.page + 1,
        })
      );
  }

  loadMoreItems() {
    this.getItems(this.state.username, this.state.afterId);
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

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">RedditNovelty</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title="Users" id="basic-nav-dropdown">
                <LinkContainer to={{ pathname: '/u/Shitty_Watercolour' }}>
                  <MenuItem eventKey={3.1}>Shitty_Watercolour</MenuItem>
                </LinkContainer>
                <LinkContainer to={{ pathname: '/u/AWildSketchAppeared' }}>
                  <MenuItem eventKey={3.2}>AWildSketchAppeared</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

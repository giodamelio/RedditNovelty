import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './app';
import User from './user';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/u/:userId" component={User} />
    </Route>
  </Router>
), document.getElementById('app'));

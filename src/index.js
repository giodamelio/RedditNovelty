import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './app';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    {/*<Route path="u" component={Users}>
        <Route path="/u/:userId" component={User}/>
      </Route>*/}
    </Route>
  </Router>
), document.getElementById('app'));

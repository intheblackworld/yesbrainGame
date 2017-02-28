import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Root from './container/root';
import About from './container/About'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Root}>
        <Route path='/about' component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);

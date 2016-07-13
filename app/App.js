var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

import { Router, browserHistory } from 'react-router'

import './scss/main.scss';

ReactDOM.render(
  <Router history={browserHistory}>
  	{routes}
  </Router>,
  document.getElementById('app')
)
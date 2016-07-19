var React = require('react');
// var ReactDOM = require('react-dom');

import { render } from 'react-dom';

import routes from './config/routes'
// 
// var routes = require('./config/routes');

import { Router, browserHistory } from 'react-router'

import './scss/main.scss';

render(
  <Router history={browserHistory}>
  	{routes}
  </Router>,
  document.getElementById('app')
)
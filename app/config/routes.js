var React = require('react');

var Main = require('../components/Main');
var Home = require('../components/Home');
var Work = require('../components/Work');
var About = require('../components/About');
var Blog = require('../components/Blog');

var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path="/" component={Main}>
  	<Route path="work" component={Work} />
  	<Route path="about" component={About} />
  	<Route path="blog" component={Blog} />
    <IndexRoute component={Home} />
  </Route>
);
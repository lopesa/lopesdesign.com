var React = require('react');

var Main = require('../components/Main');
var Home = require('../components/Home');
var Work = require('../components/Work');
var About = require('../components/About');
var Blog = require('../components/Blog');
var Cardholder = require('../components/Cardholder');
var Slideshow = require('../components/Slideshow');
var FourOfour = require('../components/404')


import { Router, Route, Redirect, IndexRoute, Link } from 'react-router'


module.exports = (
	<Router>
	  <Route path="/" component={Main}>
	    
	    <IndexRoute component={Home} />

	  	<Route path="work" component={Work}>
	  		<IndexRoute component={Cardholder} />
	  		<Route path=":slideName" component={Slideshow} />
	  	</Route>

	  	<Route path="about" component={About} />
	  	
	  	<Route path="blog" component={Blog} />

	  	<Route path="*" component={FourOfour} />
	  
	  </Route>
	 </Router>
);
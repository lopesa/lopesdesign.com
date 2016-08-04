import React from 'react';
import { Link } from 'react-router'

var Menu = React.createClass({

	// componentDidUpdate: function() {


	// },

	setMenuStyle: function() {
		// console.log('farts');
		// console.log('from menu component: ', this.props.location.pathname);

		if (this.props.location.pathname === '/') {
			return 'menu home-menu'
		}

		else {
			return 'menu category-menu'
		}
	
	},

	render: function(){

		// console.log('from menu component: ', this.props.location.pathname);

		return (
			<div>
				<nav
	        role="navigation"
	        className={this.setMenuStyle()}>
	        
	        <ul>
	          <Link to={"/"} activeClassName="active">
	            <li>
	              Home
	            </li>
	          </Link>
          	<Link to={'/work/'} activeClassName="active">
		          <li>
	           		Work
		          </li>
		        </Link>
		        <Link to={'/about/'} activeClassName="active">
		          <li>
		            About
		          </li>
		        </Link>
		        <Link to={'/blog/'} activeClassName="active">
		        	<li>
		            Blog
		          </li>
		        </Link>
	        </ul>
	        
	        <div className="outlinks">
	        	<a href="https://www.flickr.com/photos/57613898@N08/">
		        	<div className="flickr"></div>
	        	</a>
	        	<a href="https://twitter.com/weblope">
		        	<div className="twitter"></div>
		        </a>
		        <a href="https://github.com/lopesa">
		        	<div className="github"></div>
		        </a>
		        <a href="https://www.linkedin.com/in/tony-lopes-b51172">
		        	<div className="linkedin"></div>
		        </a>
	        </div>

	      </nav>
	    </div>
		)
	}

});


module.exports = Menu;


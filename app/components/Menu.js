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
	          <Link to={"/"}>
	            <li>
	              Home
	            </li>
	          </Link>
          	<Link to={'/work/'}>
		          <li>
	           		Work
		          </li>
		        </Link>
		        <Link to={'/about/'}>
		          <li>
		            About
		          </li>
		        </Link>
		        <Link to={'/blog/'}>
		        	<li>
		            Blog
		          </li>
		        </Link>
	        </ul>
	      </nav>
	    </div>

		)
	}

});


module.exports = Menu;


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
	      </nav>
	    </div>

		)
	}

});


module.exports = Menu;


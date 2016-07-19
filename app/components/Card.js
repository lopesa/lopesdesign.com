var React = require('react');
import { Link } from 'react-router'
import TransitionGroup from 'react-addons-transition-group'

import { findDOMNode } from 'react-dom';
import TweenMax from 'gsap';


var Card = React.createClass({

	// componentDidAppear: function(callback) {
 //    // console.log(this)
 //    const el = findDOMNode(this);
 //    TweenMax.fromTo(el, 1.5, {opacity: 0}, {opacity: 1, onComplete: callback})
 //    // console.log(el)
 //    // callback;
 //  },

  componentDidMount: function(callback) {
    // console.log(this)
    const el = findDOMNode(this);
    TweenMax.fromTo(el, 0.8, {opacity: 0}, {opacity: 1, onComplete: callback})
    // console.log(el)
    // callback;
  },

	

	render: function(){

		// console.log('from card.js: ', this)

		
		
		var bgImg = {
			backgroundImage: 'url(../img/' + this.props.content.image + ')'
		};


		return(
			<Link to={'/work/' + this.props.content.url}
				className='card'
				onClick={this.props.toggleMenuState}>
	      <div className='header'>
	        <p className='title'>
	        	{this.props.content.title}
	        </p>
	         <p className='type'>
	        	{this.props.content.type}
	        </p>
	      </div>
	      <div
	      	className='image'
	      	style={bgImg}>
	      </div> 
	      <p className='copy'>
	      	{this.props.content.copy}
	      </p>
	    </Link>
	  )
   	
	}
});

module.exports = Card;
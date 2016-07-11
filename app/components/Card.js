var React = require('react');
import { Link } from 'react-router'

var Card = React.createClass({


	render: function(){

		console.log(this.props)
		
		var bgImg = {
			backgroundImage: 'url(../img/' + this.props.content.image + ')'
		};

		return(
			<Link to={"/work:" + this.props.content.title} className='card'>
			{/*<div className='card' onClick={this.props.initSlideshow}>*/}
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
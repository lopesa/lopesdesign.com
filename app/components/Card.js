var React = require('react');
import { Link } from 'react-router'

var Card = React.createClass({

	

	render: function(){

		// console.log('from card.js: ', this)

		
		
		var bgImg = {
			backgroundImage: 'url(../img/' + this.props.content.image + ')'
		};


		return(
			<Link to={'work/' + this.props.content.url}
				className='card' >
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
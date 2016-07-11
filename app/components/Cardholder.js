var React = require('react');
var Card = require('../components/Card')

import { Link } from 'react-router'


var Cardholder = React.createClass({

	render: function(){

		// console.log(this.props)

		var cardArray = [];

  	for (var card in this.props.workItems) {
  		  
      cardArray.push(
        <Card 
          content={this.props.workItems[card]} 
         	key={card}
          activeSlide={this.props.activeSlide} />
      )
    }

    return (
			<div className="cardholder">
				{cardArray}
			</div>
		)

	}


});

module.exports = Cardholder;
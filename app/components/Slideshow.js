var React = require('react');
var Slide = require('../components/Slide')

var Slideshow = React.createClass({

	handleClose: function(event) {
		this.props.toggleSlideshow();
	},

	setVisible: function() {
		if (this.props.isShowing) {
			return {
				display: 'flex'
			}
		}
		else {
			return {
				display: 'none'
			}
		}
	},

	render: function(){

		console.log('from Slideshow.js', this.props.params.slideName)

		var slideArray = [];

  	for (var slide in this.props.workItems) {

  		console.log(this.props.workItems[slide].url)
  		  
      slideArray.push(

        <Slide
          content={this.props.workItems[slide]}
          key={slide} 
          active={this.props.workItems[slide].url === this.props.params.slideName} />
      )
    }

		return (
			<div>	
				{slideArray}
			</div>
		)
	}
});

module.exports = Slideshow;
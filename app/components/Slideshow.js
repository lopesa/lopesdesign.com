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

		// console.log('from Slideshow.js', this.props.activeSlide)

		var slideArray = [];

  	for (var slide in this.props.workItems) {
  		  
      slideArray.push(

        <Slide
          content={this.props.workItems[slide]}
          key={slide} 
          active={slide === this.props.activeSlide} />
      )
    }

		return (
			<div
				className="slideshow"
				style={this.setVisible()}>
				<button 
					className="closeSlideshow"
					onClick={this.handleClose}>
					&times;
				</button>
				{slideArray}
			</div>
		)
	}
});

module.exports = Slideshow;
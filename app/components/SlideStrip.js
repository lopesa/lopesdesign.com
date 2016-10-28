var React = require('react');
var Slide = require('../components/Slide')

var SlideStrip = React.createClass({

	componentDidMount: function() {
		// console.log('this.props.slides from slidestrip', this.props.slides)
		console.log(this.props.currentSlide)
		// this.setSlide();
	},

	setWidth: function() {
  	return {
  		width: this.props.slides.length * 100 + '%'
  	}
  },

  // setStyles: function() {
  // 	return {
  // 		width: this.props.slides.length * 100 + '%',
  // 		transform: 'translate3d(-150px,0,0)'
  // 	}
  // },



  setSlide: function setSlide(slide) {
		// console.log('setslide')

		// console.log(document.querySelectorAll('.slide-strip')[0])
		// 
		// document.querySelectorAll('.slide-strip')[0].style.transform= 'translate3d(-150px,0,0)';
		// this.style.transform= 'translate3d(-150px,0,0)';

		return {
			transform: 'translate3d(-150px,0,0)'
		}
		
		// document.querySelectorAll('.slide-strip')[0].style.backgroundColor = 'blue';
			// .addClass('animate')
			// .css('transform', 'translate3d(-' + slide * _getSlideWidth() + 'px,0,0)');
    
    // $("#slideshow img")
    // 	.addClass('animate')
    // 	.css('transform', 'translate3d(-' + 100 - slide * 50 + 'px,0,0)');
	},


	render: function(){
		return (
				
				

			<div className="slide-strip" style={Object.assign(this.setWidth(), this.setSlide())}>

				{this.props.slides.map((item, i) => {
		  		return <Slide key={i} content={item} />
		  	})}

			  

		  </div>
		)

	}


});

module.exports = SlideStrip;
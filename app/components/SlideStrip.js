var React = require('react');
var Slide = require('../components/Slide')

var SlideStrip = React.createClass({

	componentDidMount: function() {
		this.setSlide(this.props.currentSlide);

		this._addTouchEvents(this.slideStripRef);

		// console.log(this.slideStripRef);
		// document.querySelectorAll('.slide-strip')[0].addEventListener("touchstart", this.bindUIEvents().onTouchStart(), false);
	},

	setWidth: function() {
  	return { width: this.props.slides.length * 100 + '%' }
  },

  getSlideWidth: function() {
  	return document.getElementsByClassName('slide-holder')[0].offsetWidth

  	// let innerGetWidth = () => {
	  // 	if (document.getElementsByClassName('slide-holder').length === 1) {
	  // 		return document.getElementsByClassName('slide-holder')[0].offsetWidth
	  // 	}
	  // 	else {
	  // 		setTimeout(function() {
	  // 			innerGetWidth();
	  // 		}, 1000)
	  // 	}
	  // }

	  // innerGetWidth();
  },

  _addTouchEvents: function(slider) {

  	let touchSlider = {

  		// The elements.
	    el: {
	      // slider: $("#slideshow"),
	      holder: slider
	      // imgSlide: $("#slideshow img")
	      // imgSlide: $(".image-holder")
	    },

		  touchstartx: undefined,
		  touchmovex: undefined, 
		  movex: undefined,
		  index: 0,
		  // longTouch: undefined,

		  init: function() {
	      this.bindUIEvents();
	    },

		  bindUIEvents: function() {
		    this.el.holder.addEventListener("touchstart", function(event) {
		      touchSlider.start(event);
		      // this.start(event);
		      // console.log(event)
		    });
			 
				this.el.holder.addEventListener("touchmove", function(event) {
			    // touchSlider.start(event);
			    // console.log('touchmove')
			 });
			 
				this.el.holder.addEventListener("touchend", function(event) {
			      // touchSlider.start(event);
			    // console.log('touchend')
			 });
		  },

		  start: function(event) {
		    // Test for flick.
		    Window.longTouch = false;
		    setTimeout(function() {
		    	// Since the root of setTimout is window we can’t reference this. That’s why this variable says window.slider in front of it.
		    	// I'm actually just attaching both to the Window object.
		      Window.longTouch = true;
		    }, 250);

		    // Get the original touch position.
		    this.touchstartx = event.touches[0].pageX;

		    console.log(this.touchstartx)

		    // The movement gets all janky if there's a transition on the elements.
		    // $('.animate').removeClass('animate');
		  }

		}

		touchSlider.init();
	},

  setSlide: function setSlide(slide) {
		let transformation = 'translate3d(-' + slide * this.getSlideWidth() + 'px,0,0)';
		// document.querySelectorAll('.slide-strip')[0].style.transform = transformation;
		this.slideStripRef.style.transform = transformation;
	},

	componentWillReceiveProps: function(nextprops) {
		this.setSlide(nextprops.currentSlide)
	},

	render: function(){
		
		return (

			<div className="slide-strip"
				style={this.setWidth()}
				ref={(input) => this.slideStripRef = input}>
				
				{this.props.slides.map((item, i) => {
		  		return <Slide key={i} content={item} />
		  	})}
		  </div>
		)
	}


});

module.exports = SlideStrip;
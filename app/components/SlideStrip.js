var React = require('react');
var Slide = require('../components/Slide')


var SlideStrip = React.createClass({

	componentDidMount: function() {

		this.setSlide(this.props.currentSlide);
		this._addTouchEvents(this.slideStripRef, this);
		// window.addEventListener("optimizedResize", this.setSlide);
	},

	setWidth: function() {
  	return { width: this.props.slides.length * 100 + '%' }
  },

  getSlideWidth: function() {
  	return document.getElementsByClassName('slide-holder')[0].offsetWidth
	},

  _addTouchEvents: function(slider, SlideStrip) {

  	let touchSlider = {

  		// The elements.
  		// there were more in the original ;)
	    el: {
	      holder: slider
	    },

	    translate3dStart: undefined,
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
		    });
			 
				this.el.holder.addEventListener("touchmove", function(event) {
			    touchSlider.move(event);
				});
			 
				this.el.holder.addEventListener("touchend", function(event) {
			      touchSlider.end(event);
				});
		  },

		  start: function(event) {
		    // Test for flick.
		    Window.longTouch = false;
		    setTimeout(function() {
		    	// Since the root of setTimout is window we can’t reference this.
		    	// I'm just attaching both to the Window object.
		      Window.longTouch = true;
		    }, 250);

		    // Get the original touch position.
		    this.touchstartx = event.touches[0].pageX;

		    // get the original 
		    this.translate3dStart = slider.style.transform;

		    // The movement gets all janky if there's a transition on the elements.
		    // maybein the panning part from the tutorial. Doesn't seem janky to me
		    // $('.animate').removeClass('animate');
		  },

		  move: function(event) {
			    	
	    	this.touchmovex = event.touches[0].pageX;
	      
	      // Calculate distance to translate holder.
	      this.movex = SlideStrip.props.currentSlide*SlideStrip.getSlideWidth() + (this.touchstartx - this.touchmovex)

	      // Defines the speed the images should move at.
	      // I'm not currently doing the panning thing though
	      // var panx = 100-this.movex/6;

	      // Now we need to add in some logic to handle edge cases.
				// If you’re on the first slide or the last slide this logic
				// will stop the image panning if you’re scrolling in the wrong
				// direction (i.e. toward no content).
				// This might not be the best way to handle this, but it works for me right now.

	      if (this.movex <= slider.offsetWidth - SlideStrip.getSlideWidth()) { // Mine.
	        
	        this.el.holder.style.transform = 'translate3d(-' + this.movex + 'px,0,0)';
	      }
	      
	      // the following was screwing up my implementation - Tony
	      // also this is where the panning (doesn't) get used.
	      // if (panx < 100) { // Corrects an edge-case problem where the background image moves without the container moving.
	      //   this.el.imgSlide.css('transform','translate3d(-' + panx + 'px,0,0)');
	      // }
	    },

	    end: function(event) {
	      // Calculate the distance swiped.
	      var absMove = Math.abs(SlideStrip.props.currentSlide*SlideStrip.getSlideWidth() - this.movex);

	      // if it's swiped enough to be interpreted as the intention
	      if (absMove > SlideStrip.getSlideWidth()/2 || window.longTouch === false) {
	        
	        if (this.movex > SlideStrip.props.currentSlide*SlideStrip.getSlideWidth()
	        	&& SlideStrip.props.currentSlide < SlideStrip.props.slides.length - 1) {

	          SlideStrip.props.forwardSlide();

	        } else if (this.movex < SlideStrip.props.currentSlide*SlideStrip.getSlideWidth()
	        	&& SlideStrip.props.currentSlide > 0) {
	          
	          SlideStrip.props.backwardSlide();
	        }
	      }

	      else {
	      	this.el.holder.style.transform = this.translate3dStart
	      }
	    }
		}
		touchSlider.init();
	},

  setSlide: function setSlide(slide) {
		let transformation = 'translate3d(-' + slide * this.getSlideWidth() + 'px,0,0)';
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
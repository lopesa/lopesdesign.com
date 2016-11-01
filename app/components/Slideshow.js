var React = require('react');
var SlideStrip = require('../components/SlideStrip')

import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Utils from '../helpers/Utils'

var Slideshow = React.createClass({

	getPreviousSlideUrl: function(currentSlideIndex) {

		currentSlideIndex--
		
		if (currentSlideIndex >= 0) {

			return this.props.workItems[currentSlideIndex].url
		}

		else {
			return this.props.workItems[this.props.workItems.length-1].url
			// return this.props.params.slideName
		}
	},

	getNextSlideUrl: function(currentSlideIndex) {

		currentSlideIndex++

		if (currentSlideIndex < this.props.workItems.length) {
			return this.props.workItems[currentSlideIndex].url
		}

		else {
			// return this.props.params.slideName
			return this.props.workItems[0].url
		}

	},
	
	getSlideFromUrl: function(passedProps) {

		var thisSlide,
			thisIndex,
			url= passedProps.params.slideName;
		
		this.props.workItems.forEach(function(item, index) {
			
			if (item.url === url) {
				thisSlide = item;
				thisIndex = index;
				return
			}
		})

		return {
			thisSlide: thisSlide,
			thisIndex: thisIndex
		}
	},

	getStateFromUrl: function(passedProps) {
		
		var thisSlide = this.getSlideFromUrl(passedProps);

		var previousSlideUrl = {
			previousSlideUrl: this.getPreviousSlideUrl(thisSlide.thisIndex)
		}

		var nextSlideUrl = {
			nextSlideUrl: this.getNextSlideUrl(thisSlide.thisIndex)
		}

		var finalSlide = Object.assign(thisSlide, previousSlideUrl, nextSlideUrl)

		return finalSlide;

	},

	getInitialState: function() {
		return this.getStateFromUrl(this.props);
	},

	componentWillReceiveProps: function(nextprops) {
		this.setState(this.getStateFromUrl(nextprops));
  },

  setSlideWidth: function() {
  	
  	Array.from(document.querySelectorAll('.slide')).forEach(item => {
			item.style.width = document.getElementsByClassName('slide-holder')[0].offsetWidth + 'px';
		});
  },
  
  componentDidMount: function() {

  	this.setSlideWidth();

  	// https://toddmotto.com/avoiding-anonymous-javascript-functions/
  	// here's a great post that just gained me enlightenment and
  	// saved me so much time. I was going to hack at, as I usually do,
  	// the scope issues of the anonymous function in the addeventlistener callback
  	// as in the code commented out below
  	window.addEventListener("optimizedResize", this.setSlideWidth);

  	// window.addEventListener("optimizedResize", function() {
	    // this.setSlideWidth()
		// });
	},

	// this techinique is deprecated. But I don't have the heart to redo it roght this moment
	// https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v2.4.0.md
	forwardSlide: function forwardSlide() {
		this.props.history.push('/work/' + this.state.nextSlideUrl)
	},

	backwardSlide: function backwardSlide() {
		this.props.history.push('/work/' + this.state.previousSlideUrl)
	},

	setButtons: function() {
		return Utils.isTouchDevice() ? {display: 'none'} : {display: 'flex'}
  },

	render: function(){

		// http://unitstep.net/blog/2015/03/03/using-react-animations-to-transition-between-ui-states/
		// the above blog post is so great. The react inherent functionality seems more based on the
		// addition and removal of components to /from the dom, but this uses the key attr of the Slide
		// component which will change each slide to trigger the animation. Should rea from the
		// original author.

		// I think the above is old, and this commented out block was that implementation
		// I refigured it to be router based. It now degests the url to find the current slide
		// and does not keep track of an active index

		{/*	
			<div className="slide-strip" style={this.setInnerSlideHolderStyle()}>

				<ReactCSSTransitionGroup
			      transitionName="example"
			      transitionEnterTimeout={0}
			      transitionLeaveTimeout={0}
			    >
			  	{this.props.workItems.map((item, i) => {
			  		return <Slide key={i} content={item} />
			  	})}

		   		<Slide key={this.state.thisSlide.url} content={this.state.thisSlide} />

	   		</ReactCSSTransitionGroup> 
   		</div>
 		*/}
		return (
	   	<div className='slideshow'>

	   		{ this.state.thisIndex > 0
	   			?
	   			<Link to={'/work/' + this.state.previousSlideUrl}
						className='button left'
						style={this.setButtons()} >
						<div className='buttonIcon'>&lt;</div>
					</Link>
					:
					<div className='button left'
						style={this.setButtons()} >
						<div className='buttonIcon'>&lt;</div>
					</div> }
				
				<div className="slide-holder">

					<Link to={'/work'} className='close'>&times;</Link>

					<SlideStrip slides={this.props.workItems}
						currentSlide={this.state.thisIndex}
						forwardSlide={this.forwardSlide}
						backwardSlide={this.backwardSlide}/>
		   	</div>

				{ this.state.thisIndex < this.props.workItems.length - 1
	   			?
	   			<Link to={'/work/' + this.state.nextSlideUrl}
						className='button right'
						style={this.setButtons()} >
						<div className='buttonIcon'>&gt;</div>
					</Link>
					:
					<div className='button right'
						style={this.setButtons()} >
						<div className='buttonIcon'>&gt;</div>
					</div> }
		  </div>
	  )
	}
});

module.exports = Slideshow;
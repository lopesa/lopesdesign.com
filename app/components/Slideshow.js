var React = require('react');
var Slide = require('../components/Slide')

import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


var Slideshow = React.createClass({

	getPreviousSlideUrl: function(currentSlideIndex) {

		currentSlideIndex--
		
		if (currentSlideIndex >= 0) {

			return this.props.workItems[currentSlideIndex].url
		}

		else {
			return this.props.params.slideName
		}

	},

	getNextSlideUrl: function(currentSlideIndex) {

		currentSlideIndex++

		if (currentSlideIndex < this.props.workItems.length) {
			return this.props.workItems[currentSlideIndex].url
		}

		else {
			return this.props.params.slideName
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

	// componentDidUpdate: function() {
		
	// 	this.setState(this.getStateFromUrl());

 //  },

	componentWillReceiveProps: function(nextprops) {

		// console.log(nextprops);
		
		this.setState(this.getStateFromUrl(nextprops));
		// console.log(this.props)

  },


	render: function(){


		// http://unitstep.net/blog/2015/03/03/using-react-animations-to-transition-between-ui-states/
		// the above blog post is so great. The react inherent functionality seems more based on the
		// addition and removal of components to /from the dom, but this uses the key attr of the Slide
		// component which will change each slide to trigger the animation. Should rea from the
		// original author.
		
		return (
	   	<div className='slideshow'>

	   		<Link to={'/work/' + this.state.previousSlideUrl}
					className='button left'>
					<div className='buttonIcon'>&lt;</div>
				</Link>

				<div className="slide-holder">

					 <ReactCSSTransitionGroup
				      transitionName="example"
				      transitionEnterTimeout={0}
				      transitionLeaveTimeout={0}
				    >

			   		<Slide key={this.state.thisSlide.url} content={this.state.thisSlide} />

		   		</ReactCSSTransitionGroup>

		   	</div>


		    <Link to={'/work/' + this.state.nextSlideUrl}
					className='button right' >
					<div className='buttonIcon'>&gt;</div>
				</Link>

		  </div>
	  )


	}
});

module.exports = Slideshow;
var React = require('react');
var Slide = require('../components/Slide')

import { Link } from 'react-router'

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

  },


	render: function(){
		
		return (
	   	<div className='slideshow'>

	   		<Link to={'/work/' + this.state.previousSlideUrl}
					className='button left'>
					<div className='buttonIcon'>&lt;</div>
				</Link>


	   		<Slide content={this.state.thisSlide} />

		    <Link to={'/work/' + this.state.nextSlideUrl}
					className='button right' >
					<div className='buttonIcon'>&gt;</div>
				</Link>

		  </div>
	  )


	}
});

module.exports = Slideshow;
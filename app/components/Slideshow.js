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
	
	getSlideFromUrl: function() {

		var thisSlide,
			thisIndex,
			url= this.props.params.slideName;

		
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

	getStateFromUrl: function() {
		var thisSlide = this.getSlideFromUrl();

		// console.log(thisSlide.thisIndex)

		var previousSlideUrl = {
			previousSlideUrl: this.getPreviousSlideUrl(thisSlide.thisIndex)
		}

		var nextSlideUrl = {
			nextSlideUrl: this.getNextSlideUrl(thisSlide.thisIndex)
		}

		var finalSlide = Object.assign(thisSlide, previousSlideUrl, nextSlideUrl)
		console.log(finalSlide)


		return finalSlide;

	},

	getInitialState: function() {

		return this.getStateFromUrl();

	},

	// componentDidUpdate: function() {
	// 	// 'from component did update'
	// },

	componentWillReceiveProps: function() {
		
		this.setState(this.getStateFromUrl());

  },


	// getLink: function(direction) {



	// 	console.log(this.props.workItems[this.state.thisIndex--].url);
	// 	console.log(this.props.workItems[this.state.thisIndex++].url);

	// 	// return this.props.workItems[this.state.thisIndex--].url
	// 	if (direction === 'left') {

	// 		return this.props.workItems[this.state.thisIndex--].url
	// 	}

	// 	else {
			
	// 		return this.props.workItems[this.state.thisIndex++].url
	// 	}
	// 	// return 'jews'

	// },


	// handleClose: function(event) {
	// 	this.props.toggleSlideshow();
	// },

	// setVisible: function() {
	// 	if (this.props.isShowing) {
	// 		return {
	// 			display: 'flex'
	// 		}
	// 	}
	// 	else {
	// 		return {
	// 			display: 'none'
	// 		}
	// 	}
	// },

	

	

	render: function(){

		

		// var thisSlide = this.setSlideContent.bind(this);

		// console.log('from Slideshow.js', this.props.params.slideName)
		// console.log('from Slideshow.js', this.state.thisSlide);

		// var slideArray = [];

		// var bgImg = {
		// 	backgroundImage: 'url(../img/' + this.state.thisSlide.image + ')'
		// };


  	// for (var slide in this.props.workItems) {

  	// 	// console.log(this.props.workItems[slide].url)
  		  
   //    slideArray.push(

   //      <Slide
   //        content={this.props.workItems[slide]}
   //        key={slide} 
   //        active={this.props.workItems[slide].url === this.props.params.slideName} />
   //    )
   //  }
   return (
   	<div className='slideshow'>
   		
   		{/*<button
   			className='left'
   			onClick={this.changeSlide.bind(null, 'left')} />*/}

   		<Link to={'work/' + this.state.previousSlideUrl}
				className='button left' />

   		<Slide content={this.state.thisSlide} />

	    <Link to={'work/' + this.state.nextSlideUrl}
				className='button right' />

	   </div>
   )


	}
});

module.exports = Slideshow;
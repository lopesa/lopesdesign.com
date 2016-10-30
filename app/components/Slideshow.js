var React = require('react');
// var Slide = require('../components/Slide')
var SlideStrip = require('../components/SlideStrip')

import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


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
		// let initialState = Object.assign(this.getStateFromUrl(this.props), {slideholderWidth: document.getElementsByClassName('slide-holder')[0].offsetWidth})
		// console.log(initialState)
		return this.getStateFromUrl(this.props);

	},

	// componentDidUpdate: function() {
		
	// 	this.setState(this.getStateFromUrl());

 //  },

	componentWillReceiveProps: function(nextprops) {

		// console.log(nextprops);
		
		this.setState(this.getStateFromUrl(nextprops));
		// console.log(this.props)
		// Array.from(document.getElementsByClassName('slide')).forEach(item => {
		// 	console.log(item)
		// 	item.style.width = this.getSlideHolderWidth() / 2 + 'px';
		// })

  },

  

  setSlideWidth: function() {
  	
  	Array.from(document.querySelectorAll('.slide')).forEach(item => {
			item.style.width = document.getElementsByClassName('slide-holder')[0].offsetWidth + 'px';
		});
  },

  // setSlideWidth: function() {
  // 	return document.getElementsByClassName('slide-holder')[0].offsetWidth;
  // },

  // conmponentWillMount: function() {
  	// console.log(document.getElementsByClassName('slide-holder')[0].offsetWidth)
  // 	this.setState(function() {
		// 	return {slideholderWidth: document.getElementsByClassName('slide-holder')[0].offsetWidth}
		// });

		// this.setState({cats: 'dogs'})
  // },

  componentDidMount: function() {

  	this.setSlideWidth();


	},

	setSlide: function setSlide(slide) {
		// console.log('setslide')

		// console.log(document.querySelectorAll('.slide-strip')[0])
		
		// document.querySelectorAll('.slide-strip')[0].style.transform= 'translate3d(-150px,0,0)';
		
		// document.querySelectorAll('.slide-strip')[0].style.backgroundColor = 'blue';
			// .addClass('animate')
			// .css('transform', 'translate3d(-' + slide * _getSlideWidth() + 'px,0,0)');
    
    // $("#slideshow img")
    // 	.addClass('animate')
    // 	.css('transform', 'translate3d(-' + 100 - slide * 50 + 'px,0,0)');
	},

	// this techinique is deprecated. But I don't have the heart to redo it roght this moment
	// https://github.com/ReactTraining/react-router/blob/master/upgrade-guides/v2.4.0.md
	forwardSlide: function forwardSlide() {
		// console.log(this.props.history)
		this.props.history.push('/work/' + this.state.nextSlideUrl)
		// console.log(this.state.nextSlideUrl)

	},

	backwardSlide: function backwardSlide() {
		this.props.history.push('/work/' + this.state.previousSlideUrl)
	},




 //  innerSlideHolderStyle: {
	//   // width: this.props.workItems.length
	// },

	// const divStyle = {
	//   color: 'blue',
	//   backgroundImage: 'url(' + imgUrl + ')',
	// };


	render: function(){

		// console.log('state: ', this.state);
		// console.log('props: ', this.props.workItems.length);




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

					<Link to={'/work'} className='close'>&times;</Link>

					<SlideStrip slides={this.props.workItems}
						currentSlide={this.state.thisIndex}
						forwardSlide={this.forwardSlide}
						backwardSlide={this.backwardSlide}/>
					
					{/*	slideholderWidth={this.state.slideholderWidth}/>

					

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
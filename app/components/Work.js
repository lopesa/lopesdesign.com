var React = require('react');
var WorkCopy = require('../constants/WorkCopy');
var Slideshow = require('../components/Slideshow');

var Work = React.createClass({
	getInitialState: function() {
		return {
			workCopy: WorkCopy,
      slideshowShowing: false
		}
	},
  render: function(){

    // console.log('initial', this.state.workCopy);
  	
  	var workDisplay = [];

    var setCategory = function setCategory(category) {

      var newWorkCopy = this.state.workCopy.sort(function(a,b) {
        // console.log(a.type)
        if (a.type === category) {
          console.log(true)
          return -1;
        }
        if (a.type !== category) {
          return 1
        }
        return 0
      });

      this.setState({workCopy: newWorkCopy});
      
      // console.log(this.state.workCopy);

      // console.log(this.state.workCopy);
      // console.log(this.state.workCopy.sort(function(a,b) {
      //   // console.log(a.type)
      //   if (a.type === category) {
      //     console.log(true)
      //     return -1;
      //   }
      //   if (a.type !== category) {
      //     return 1
      //   }
      //   return 0
      // }))
    };

    this.setCategory = setCategory;

    var toggleSlideshow = function toggleSlideshow(newSlideshowShowing) {
      // console.log(this);
      this.setState({slideshowShowing: newSlideshowShowing});
    }

    this.toggleSlideshow = toggleSlideshow;


  	for (var workItem in this.state.workCopy) {
  		// console.log(this.state.workCopy[workItem].image);
  		
      var bgImg = {
  			backgroundImage: 'url(../img/' + this.state.workCopy[workItem].image + ')'
  			// backgroundImage: 'url(../img/' + workItem.img + ')'
  		};

      workDisplay.push(
      	<div
          className='card'
          key={workItem}>
          <div className='header'>
	          <p className='title'>
	          	{this.state.workCopy[workItem].title}
	          </p>
	           <p className='type'>
	          	{this.state.workCopy[workItem].type}
	          </p>
	        </div>
          <div
          	className='image'
          	style={bgImg}>
          </div> 
          <p className='copy'>
          	{this.state.workCopy[workItem].copy}
          </p>
        </div>
      )
    }

    return(
      <div className="work">
        <Slideshow
          slides={this.state.workCopy}
          isShowing={this.state.slideshowShowing}
          toggleSlideshow={this.toggleSlideshow.bind(this)}/>
        <div className='work-header'>
        	<h2 onClick={this.toggleSlideshow.bind(this)}>
        		Work
        	</h2>
          <ul>
            <li onClick={this.setCategory.bind(this, 'web')}>Web</li>
            <li onClick={this.setCategory.bind(this, 'photo')}>Photography</li>
            <li onClick={this.setCategory.bind(this, 'video')}>Video / Motion</li>
          </ul>
        </div>
      	<div className='card-container'>
	        {workDisplay}
	      </div>
      </div>
    )
  }
})

module.exports = Work;
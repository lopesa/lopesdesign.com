var React = require('react');
var WorkItems = require('../constants/WorkItems');
var Slideshow = require('../components/Slideshow');
var Card = require('../components/Card')
var Cardholder = require('../components/Cardholder')


var Work = React.createClass({
	getInitialState: function() {
		return {
			workItems: WorkItems,
      slideshowShowing: false,
      activeSlide: 1
		}
	},


  setCategory: function(category) {
    var newWorkItems = this.state.workItems.sort(function(a,b) {
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

    this.setState({workItems: newWorkItems});
  },


  initSlideshow: function(initialSlide) {

    console.log('initialSlide: ', initialSlide)
    
    this.setState({activeSlide: initialSlide})
    console.log(this.state.activeSlide)

    console.log(this)
    this.toggleSlideshow();

  },


  toggleSlideshow: function(initialSlide) {
    // console.log(this.state.slideshowShowing)
    // console.log('newSlideshowShowing', newSlideshowShowing);
    // console.log(event.target);
    // console.log('index', index)
    
    this.setState({slideshowShowing: !this.state.slideshowShowing});
    // console.log(this.slideshowShowing)
  },

  render: function(){

    // console.log("work.js: ", this)

    // http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    var childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
         workItems: this.state.workItems,
         activeSlide: this.state.activeSlide
       }))

    

    return(
      <div className="work">
        <Slideshow
          slides={this.state.workItems}
          isShowing={this.state.slideshowShowing}
          activeSlide={this.state.activeSlide}
          toggleSlideshow={this.toggleSlideshow} />
        <div className='work-header'>
        	<h2>
        		Work
        	</h2>
          <ul>
            <li onClick={this.setCategory.bind(this, 'web')}>Web</li>
            <li onClick={this.setCategory.bind(this, 'photo')}>Photography</li>
            <li onClick={this.setCategory.bind(this, 'video')}>Video / Motion</li>
          </ul>
        </div>
        
        
        {childrenWithProps}
      	
      </div>
    )
  }
})

module.exports = Work;
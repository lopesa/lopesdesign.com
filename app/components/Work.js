var React = require('react');
var WorkItems = require('../constants/WorkItems');
var Slideshow = require('../components/Slideshow');
var Card = require('../components/Card')
var Cardholder = require('../components/Cardholder')


var Work = React.createClass({
	getInitialState: function() {

    var workItemsWithUrls = WorkItems.map(function(item) {
      // console.log(item);
      item.url = item.title.replace(/ /g, '-').toLowerCase();
      // console.log(item);
      return item
    });


    return {
      workItems: workItemsWithUrls,
      headerSize: this.getHeaderSize(this.props)
    }
	},

  getHeaderSize: function(props) {

      if (Object.keys(props.params).length === 1) {
        
        // console.log(Object.keys(props.params).length);
        return {fontSize: "3.5em"}
      }

      else {
        return {fontSize: "6em"}
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

  componentWillReceiveProps: function(nextProps) {

    console.log(this.getHeaderSize(nextProps))
    
    this.setState({headerSize: this.getHeaderSize(nextProps)})

    // this.getHeaderSize(nextProps);
  },


 

  render: function(){

    // http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    var childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
         workItems: this.state.workItems,
         activeSlide: this.state.activeSlide
       }))

    

    return(
      <div className="work">
        
        <div className='work-header'>
        	<h2 style={this.state.headerSize}>
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
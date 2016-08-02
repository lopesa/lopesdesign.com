var React = require('react');
var WorkItems = require('../constants/WorkItems');
var Slideshow = require('../components/Slideshow');
var Card = require('../components/Card')
var Cardholder = require('../components/Cardholder')

import { browserHistory } from 'react-router'


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
      headerSize: this.getHeaderSize(this.props),
      menuState: 'cardHolder',
      setCategoryInProgress: false,
      category: 'web'
    }
	},

  toggleMenuState: function() {
    
    this.setState({menuState: this.state.menuState === 'cardHolder' ? 'slideshow' : 'cardHolder'})

  },

  setSetMenuInProgress: function(value) {
    this.setState({
      setCategoryInProgress: value
    })
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

    // console.log('setCategory')

    if (this.state.setCategoryInProgress === false) {

      console.log('this much')

      this.setState({
        setCategoryInProgress: true,
        category: category
      });

      var newWorkItems = this.state.workItems.sort(function(a,b) {
            // console.log(a.type)
        if (a.type === category) {
          // console.log(true)
          return -1;
        }
        if (a.type !== category) {
          return 1
        }
        return 0
      });

      this.setState({
        workItems: newWorkItems
        // setCategoryActive: false
      });
    
      if (this.state.menuState === 'slideshow') {
        // console.log('slidehow must be open')
        var firstOfCategory = this.state.workItems.filter(function(item) {
           return item.type === category
          });


        firstOfCategory = firstOfCategory[0];

        browserHistory.push('/work/' + firstOfCategory.url);
      }
    }

  },

  componentWillReceiveProps: function(nextProps) {

    // console.log(this.getHeaderSize(nextProps))
    
    this.setState({headerSize: this.getHeaderSize(nextProps)})
    // console.log(this.props)
    if(nextProps.location.pathname === '/work/') {
      this.setState({menuState: 'cardHolder'});
    }

    // this.getHeaderSize(nextProps);
  },


 

  render: function(){

    // http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    var childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
         workItems: this.state.workItems,
         toggleMenuState: this.toggleMenuState,
         setCategoryInProgress: this.setCategoryInProgress,
         setSetMenuInProgress: this.setSetMenuInProgress,
         category: this.state.category
        // activeSlide: this.state.activeSlide
       }))

    

    return(
      <div className="work">
        
        <div className='work-header'>
        	<h2 style={this.state.headerSize}>
        		Work
        	</h2>
          <ul>
            <li
              onClick={this.setCategory.bind(this, 'web')}> Web</li>
            <li 
              onClick={this.setCategory.bind(this, 'photo')}>Photography</li>
            <li
              onClick={this.setCategory.bind(this, 'video')}>Video / Motion</li>
          </ul>
        </div>
        
        
        {childrenWithProps}
      	
      </div>
    )
  }
})

module.exports = Work;
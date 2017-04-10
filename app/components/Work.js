var React = require('react');
var WorkItems = require('../constants/WorkItems');

var Work = React.createClass({

  getWorkItemsWithUrls: function() {

    // take the base json file of workitems
    // and add a field of urls

    // curious what the best practice is here,
    // to do this here or in the json file...
    // this may actually add cpu overhead??

    return WorkItems.map(function(item) {
      item.url = item.title.replace(/ /g, '-').toLowerCase();
      return item
    })
  },

	getInitialState: function() {

    return {
      workItems: this.getWorkItemsWithUrls(),
      // headersize is for the word "work"
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
    this.setState({ setCategoryInProgress: value })
  },

  getHeaderSize: function(props) {
    return Object.keys(props.params).length === 1 ? "small" : "large"
  },

  setCategory: function(category) {

    let isCategory = function(element) {
      return element.type === category
    };

    let isNotCategory = function(element) {
      return element.type !== category
    };

    // if ((this.state.setCategoryInProgress === false) && (category !== this.state.category)) {
    if (this.state.setCategoryInProgress === false) {

      if (this.state.menuState === 'cardHolder') {

        if (category !== this.state.category) {

          let newWorkItems = WorkItems.filter(isCategory).concat(WorkItems.filter(isNotCategory))

          this.setState({
            workItems: newWorkItems,
            setCategoryInProgress: true,
            category: category
          });
        }
      }

      else if (this.state.menuState === 'slideshow') {

        var firstOfCategory = this.state.workItems.filter(function(item) {
           return item.type === category
          });

        firstOfCategory = firstOfCategory[0];

        this.props.history.push('/work/' + firstOfCategory.url);
      }
    }
  },

  componentWillReceiveProps: function(nextProps) {

    this.setState({ headerSize: this.getHeaderSize(nextProps) })

    if(nextProps.location.pathname === '/work/') {
      this.setState({menuState: 'cardHolder'});
    }
  },


  render: function(){

    // http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    var childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
         workItems: this.state.workItems,
         toggleMenuState: this.toggleMenuState,
         setCategoryInProgress: this.state.setCategoryInProgress,
         setSetMenuInProgress: this.setSetMenuInProgress,
         category: this.state.category
       }))

    return(
      <div className="work">
        <div className="container">

          <div className='work-header'>
          	<h2 className={this.state.headerSize}>
          		Work
          	</h2>
            {/*<ul>
              <li
                onClick={this.setCategory.bind(this, 'web')}> Web</li>
              <li
                onClick={this.setCategory.bind(this, 'photo')}>Photography</li>
              <li
                onClick={this.setCategory.bind(this, 'video')}>Video / Motion</li>
            </ul>*/}
          </div>

          {childrenWithProps}
        </div>
      </div>
    )
  }
})

module.exports = Work;
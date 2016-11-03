import React from 'react';
import Menu from '../components/Menu';
import Utils from '../helpers/Utils'

var Main = React.createClass({

  componentDidMount: function() {
    Utils.createOptimizedResizeEvent();
  },


  render: function(){

    // http://stackoverflow.com/questions/34410051/conditionally-set-active-class-on-menu-using-react-router-current-route
    return (
      <div>
        <Menu location={this.props.location} />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
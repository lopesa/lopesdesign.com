import React from 'react';
import Menu from '../components/Menu';

var Main = React.createClass({
  
  render: function(){
    // http://stackoverflow.com/questions/34410051/conditionally-set-active-class-on-menu-using-react-router-current-route
    return (
      <div className="">
        <Menu location={this.props.location} />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
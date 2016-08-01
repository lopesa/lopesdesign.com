var React = require('react');
var ReactRedirect = require('react-redirect');

var Blog = React.createClass({
  render: function(){
    return(
      <ReactRedirect location='/blog'>
      </ReactRedirect>
    )
  }
})

module.exports = Blog;
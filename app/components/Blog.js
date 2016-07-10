var React = require('react');
var ReactRedirect = require('react-redirect');

var Blog = React.createClass({
  render: function(){
    return(
      <ReactRedirect location='http://mettalope.com/lopblog'>
      </ReactRedirect>
    )
  }
})

module.exports = Blog;
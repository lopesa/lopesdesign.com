var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <div className="home">
      	<div className="ampersand">
      		&amp;
      	</div>
        <div>
        	<h1 className='name'>
        		Tony Lopes
        	</h1>
          <div className='underline'></div>
        </div>
      	<h1>
      		Graphic Design
      	</h1>
      	<h1>
      		Web Development
      	</h1>
      </div>
    )
  }
})

module.exports = Home;
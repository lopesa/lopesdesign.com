var React = require('react');

var Photo = React.createClass({
  render: function(){
    return(
      <div className="about">
      	<h2>
      		about
      	</h2>
      	<div className="copy-holder">
	      	<div className="copy">
		      	<p>
		      		Hi, I'm Tony Lopes and I'm a Graphic Designer and Web Developer living in San Francisco, California. I've been practicing design for a long time, and for the last 4 years or so I've turned my attention mostly toward web development, first html and css, and then javascript. There's always more to learn, but I think my skill set of modern web building is fluent now, and balancing out against my design background.
		      	</p>
		      	<p>
		      		I'm always looking for the next interesting project. Drop me a line if you're interested in working together.
		      	</p>
		      </div>
		    </div>
		  </div>
    )
  }
})

module.exports = Photo;
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
		      		Graphic Designer and Web Developer is just a label to give myself of course. My university education was in studio art, which I value more and more as time goes on as having been the study of creativity. My career after school exactly matched the rise of digital artmaking. I got started with photoshop 1.0 is what I'm saying. There have been so many professional monikers manifested in the realms I'm operating in, for example, commercial artist, was a thing, as I was entering the market and looking to my recent past (I still felt the living breath of Don Draper and his kind). I considered myself to be a mulitmedia artist at some point. Now that I'm focusing on the technical am I doing front end web development or engineering. Full stack, front end? The labels are important, yes, but often to make the work I think it's helpful to let them all go and try new combinations. So, for example, I think UX is digital customer service, and UI is the palette with which to execute that. And we have to make our own paint for the palette with, engineering!?
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
var React = require('react');

var Photo = React.createClass({
  render: function(){
    return(
      <div className="about">
      	<h2>
      		About
      	</h2>
      	<div className="copy-holder">
      		<div className="background"></div>
	      	<div className="copy">
		      	<p>
		      		Hi, I'm Tony Lopes and I'm a Graphic Designer and Web Developer living in San Francisco, California. I love to make an experience that tells a story or conveys a feeling, and impacts the viewer or user on multiple levels. I think both design and technology are best when they're mostly transparent in supporting that, both adding their quiet cues of style and competency.
		      	</p>

		      	<p>
		      		I love taking pictures and hiking, good food and traveling, and getting absorbed in a great project.
		      	</p>

						<p>
							Speaking of, I am always looking for a fun project. Please give me a shout if you think we might work well together. <a href="mailto:tony@lopesdesign.com">tony@lopesdesign.com</a>
						</p>
		      </div>
		    </div>
		  </div>
    )
  }
})

module.exports = Photo;
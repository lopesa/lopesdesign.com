var React = require('react');

var Photo = React.createClass({
  render: function(){
    return(
      <div className="about">
      	<h2>
      		About
      	</h2>
      	<div className="copy-holder">
      		<div className='inner-container'>
	      		<div className="background"></div>
		      	<div className="copy">
			      	<p>
			      		Hi, I'm Tony Lopes and I'm a Graphic Designer and Web Developer living in San Francisco, California. I love to make an experience that tells a story or conveys a feeling, and impacts the viewer or user on multiple levels. I think both design and technology are best when they're mostly transparent in supporting that, both adding their quiet cues of style and competency.
			      	</p>

			      	<p>
			      		Technically, I like to work with the Javascript stack. Node on the server, mongodb if needed, and js on the front end of course, usually with some framework or library. I've done quite a bit with jQuery, and some with Angular, and lately have been really enjoying React. I like to design and code at the same time in the browser, and I enjoy js build tools like gulp or webpack to make that easy and efficient. I love flexbox and webfonts, and I think responsive design, i.e. designing something for any and all sizes, is always an interesting part of the design process. I also enjoy working with linux servers.
			      	</p>

			      	<p>
			      		I like to see a project through from the spark of an idea to the materialization of that idea, through to the smallest details.
			      	</p> 

			      	<p>
			      		Personally, I enjoy taking pictures and hiking, good food and traveling, and getting absorbed in a great project.
			      	</p>

							<p>
								Speaking of, I am always looking for a fun project. Please give me a shout if you think we might work well together. <a href="mailto:tony@lopesdesign.com">tony@lopesdesign.com</a>
							</p>
			      </div>
					</div>
		    </div>
		  </div>
    )
  }
})

module.exports = Photo;
var React = require('react');

var Slide = React.createClass({

	// assignActive: function() {
	// 	if (this.props.active) {
	// 		return "display: flex"
	// 	}
	// },

	// rootClassNames() {
	// 	// http://stackoverflow.com/questions/30533171/react-js-conditionally-applying-class-attributes
	//   let names = ['slide'];
	//   if (this.props.active) names.push('active');

	//   return names.join(' ');
	// },


	render: function(){
		// console.log(this.props.content)
		// console.log("from Slide.js", this.props.content);

		var bgImg = {
			backgroundImage: 'url(../img/' + this.props.content.image + ')'
		};

		return(
			<div className='slide'>
	      <p className='title'>
        	{this.props.content.title}
        </p>
        <div
	      	className='image'
	      	style={bgImg}>
	      </div>
	      <p className='copy'>
	      	{this.props.content.copy}
	      </p>
	    </div>
	  )
		
	}
});

module.exports = Slide;
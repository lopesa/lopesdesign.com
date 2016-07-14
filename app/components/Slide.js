var React = require('react');

var Slide = React.createClass({

	parseLongCopy: function() {

		var newLongCopy = this.props.content.slide.longCopy.split('\n');

		// console.log('newLongCopy', newLongCopy);


		return newLongCopy;
		

	},

	getInitialState: function() {

		// this.parseLongCopy();

		return {
			parsedLongCopy: this.parseLongCopy()
		}

		// return null
	},

	render: function(){

		var longTextParagraphs = [];

  	for (var paragraph in this.state.parsedLongCopy) {
  		  
      longTextParagraphs.push(
        <p key={paragraph}> 
        	{this.state.parsedLongCopy[paragraph]}
        </p>
      )
    }

    // var images = [];

    // for (var image in this.props.content.slide.images) {

    // 	// console.log(this.props.content.slide.images[image]);
    // 	images.push(
    // 		<div style={{backgroundImage: 'url(../img/' + this.props.content.slide.images[image] + ')'}}
    // 			key={image} >
    // 		</div>
    // 	)
    // }
		
		var bgImg = {
			backgroundImage: 'url(../img/' + this.props.content.slide.image + ')'
		};

		return(
			<div className='slide'>
	      <p className='title'>
        	{this.props.content.title}
        </p>
        <div
	      	className='image'>
	      	<img src={'../img/' + this.props.content.slide.image} />
	      </div>
	      <div className='copy'>
	      	{longTextParagraphs}
	      </div>
	    </div>
	  )
		
	}
});

module.exports = Slide;
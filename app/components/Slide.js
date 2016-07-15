var React = require('react');
var marked = require('marked');

// import marked from 'marked';

var Slide = React.createClass({

	parseLongCopy: function(props) {

		// var newLongCopy = props.content.slide.longCopy.split('\n');

		// var longTextParagraphs = [];
		// console.log('newLongCopy', newLongCopy);

		var translated = marked(props.content.slide.longCopy, {sanitize: true});

		return translated




  // 	for (var paragraph in newLongCopy) {
  		  
  //     longTextParagraphs.push(
  //       <p key={paragraph}> 
  //       	{newLongCopy[paragraph]}
  //       </p>
  //     )
  //   }
		
		// return longTextParagraphs;

	},

	getInitialState: function() {

		// this.parseLongCopy();

		return {
			parsedLongCopy: this.parseLongCopy(this.props)
		}

		// return null
	},

	componentWillReceiveProps: function(nextprops) {
		this.setState({parsedLongCopy: this.parseLongCopy(nextprops)})
		// parseLongCopy(nextprops)
	},

	// createLongTextParagraphs: function() {
	// 	var longTextParagraphs = [];

 //  	for (var paragraph in this.state.parsedLongCopy) {
  		  
 //      longTextParagraphs.push(
 //        <p key={paragraph}> 
 //        	{this.state.parsedLongCopy[paragraph]}
 //        </p>
 //      )
 //    }

 //    return longTextParagraphs;
	// },

	render: function(){

		// this.createLongTextParagraphs()

		// var longTextParagraphs = [];

  // 	for (var paragraph in this.state.parsedLongCopy) {
  		  
  //     longTextParagraphs.push(
  //       <p key={paragraph}> 
  //       	{this.state.parsedLongCopy[paragraph]}
  //       </p>
  //     )
  //   }

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
	      <div className='copy' dangerouslySetInnerHTML={{__html: this.state.parsedLongCopy}}>
	      </div>
	    </div>
	  )
		
	}
});

module.exports = Slide;
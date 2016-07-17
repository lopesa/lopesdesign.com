var React = require('react');
var marked = require('marked');

// import marked from 'marked';

var Slide = React.createClass({

	parseLongCopy: function(props) {

		var translated = marked(props.content.slide.longCopy);

		return translated

	},

	getInitialState: function() {

		return {
			parsedLongCopy: this.parseLongCopy(this.props)
		}

	},

	componentWillReceiveProps: function(nextprops) {
		this.setState({parsedLongCopy: this.parseLongCopy(nextprops)})
	},

	
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
		
		// var bgImg = {
		// 	backgroundImage: 'url(../img/' + this.props.content.slide.image + ')'
		// };

		return(
			<div className='slide'>
	      <p className='title'>
        	{this.props.content.title}
        </p>
        
        {(function(props) {
          if (props.image) {
            return (<div
							      	className='image'>
							      	<a href={props.linkOut}>
								      	<img src={'../img/' + props.image} />
							      	</a>
							      </div>); 
          } 
        })(this.props.content.slide)}
        
	      <div className='copy' dangerouslySetInnerHTML={{__html: this.state.parsedLongCopy}}>
	      </div>
	    </div>
	  )
		
	}
});

module.exports = Slide;
var React = require('react');
var marked = require('marked');

import { findDOMNode } from 'react-dom';

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


	// http://stackoverflow.com/questions/30764693/animate-component-when-state-changes-in-react-js
	// componentWillUpdate: function() {
 //    findDOMNode(this).classList.add("leave");
 //  },

 //  componentDidUpdate: function() {
 //    var el = findDOMNode(this);
 //    setTimeout(function(){
 //       el.classList.remove("leave");
 //    }, 1000);
	// },


	
	render: function(){

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
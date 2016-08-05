var React = require('react');
var marked = require('marked');

import { findDOMNode } from 'react-dom';

var YouTubeIframeLoader = require('youtube-iframe');


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

	componentDidMount: function() {

		// if (this.props.content.type === 'video') {

			console.log('componentDidMount');

			// const script = document.createElement("script");
			// script.src = "https://www.youtube.com/iframe_api";

			// document.body.appendChild(script);

			// var player;
	    
	    // function onYouTubeIframeAPIReady() {
	    // 	console.log('onYouTubeIframeAPIReady');
	    //   player = new YT.Player('player', {
	    //     height: '390',
	    //     width: '640',
	    //     videoId: 'GXYYGAYln-w',
	    //     events: {
	    //       'onReady': onPlayerReady,
	    //       'onStateChange': onPlayerStateChange
	    //     }
	    //   });
	    // }

	    var vidWidth,
	    	vidHeight;

	    if (window.innerWidth < 400) {
	    	vidWidth = 280;
	    	vidHeight = 158;
	    }

	    else if (window.innerWidth >= 400 && window.innerWidth < 768) {
	    	vidWidth = 320;
	    	vidHeight = 180;
	    }



	    
	    YouTubeIframeLoader.load(function(YT) {
		    new YT.Player('playerIntroOutro', {
	        width: vidWidth,
	        height: vidHeight,
	        videoId: 'GXYYGAYln-w'
		    });
			});

			YouTubeIframeLoader.load(function(YT) {
		    new YT.Player('playerClothingAnim', {
	        width: vidWidth,
	        height: vidHeight,
	        videoId: 'K4rPWKc46oM'
		    });
			});

			YouTubeIframeLoader.load(function(YT) {
		    new YT.Player('playerSSSarah', {
	        width: vidWidth,
	        height: vidHeight,
	        videoId: 'Y5zMdyJ5lLQ'
		    });
			});

			YouTubeIframeLoader.load(function(YT) {
		    new YT.Player('playerSSKim', {
	        width: vidWidth,
	        height: vidHeight,
	        videoId: 'G-j2Gycr9WY'
		    });
			});

		// }

	    // onYouTubeIframeAPIReady()

	    // function onPlayerReady(event) {
     //    event.target.playVideo();
     //  }

     //  var done = false;

     //  function onPlayerStateChange(event) {
     //    if (event.data == YT.PlayerState.PLAYING && !done) {
     //      setTimeout(stopVideo, 6000);
     //      done = true;
     //    }
     //  }

	    // onYouTubeIframeAPIReady
	  // }

    // onYouTubeIframeAPIReady();

  //   function onPlayerReady(event) {
  //   	console.log('onPlayerReady')
  //     event.target.playVideo();
  //   }
		// getSizedYoutubeVideos();
		// var tag = React.createElement('script');

    // tag.src = "https://www.youtube.com/iframe_api";
	},


	// componentDidUpdate: function() {
	// 	getSizedYoutubeVideos();
	// },


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
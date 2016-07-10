var React = require('react');

var Slideshow = React.createClass({

	render: function(){

		// console.log(this)

		console.log(this.props)

		var setVisible = function setVisible() {
			if (this.props.isShowing) {
				return {
					display: 'flex'
				}
			}
			else {
				return {
					display: 'none'
				}
			}
		};

		this.setVisible = setVisible;

		var handleClose = function handleClose() {

			this.props.toggleSlideshow(!this.props.isShowing);
		};

		this.handleClose = handleClose;

		return (
			<div
				className="slideshow"
				style={this.setVisible()}>
				<button 
					className="closeSlideshow"
					onClick={this.handleClose.bind(this)}>
					&times;
				</button>
			</div>
		)


	}

});

module.exports = Slideshow;
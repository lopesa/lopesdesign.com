var React = require('react');
var Card = require('../components/Card')

import TransitionGroup from 'react-addons-transition-group'



var Cardholder = React.createClass({

  getInitialState: function() {
    return {
      cardArray: []
    }
  },

  componentDidMount: function() {
    
    var cardArray = this.buildCardArray();
    var that = this;

    var internalAddCardToState = this.addCardToState

    cardArray.forEach(function(item){
      setTimeout(internalAddCardToState.bind(that, item), 200 * item.key)
    });
    
  },

  componentWillReceiveProps: function() {
    // console.log('it gets here')
    this.setState({cardArray: []});
    var cardArray = this.buildCardArray();
    var that = this;

    var internalAddCardToState = this.addCardToState

    cardArray.forEach(function(item){
      setTimeout(internalAddCardToState.bind(that, item), 175 * item.key)
    });


  },

  addCardToState: function(card) {

    var tempCardStack = this.state.cardArray;
    
    tempCardStack.push(card);
    
    this.setState({cardArray: tempCardStack});
  },

  buildCardArray: function() {

    var internalCardArray = [];


    var addCard = function() {

      internalCardArray.push(
        <Card 
          content={this.props.workItems[card]} 
          key={card}
          activeSlide={this.props.activeSlide}
          toggleMenuState={this.props.toggleMenuState} />
      )
    };

    for (var card in this.props.workItems) {

      addCard.call(this, card);
        
    };

    return internalCardArray;

  },




	render: function(){

		return (
			<div className="cardholder">
        <TransitionGroup>
  				{this.state.cardArray}
        </TransitionGroup>
			</div>
		)

	}


});

module.exports = Cardholder;
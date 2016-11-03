var React = require('react');
var Card = require('../components/Card')

import TransitionGroup from 'react-addons-transition-group'



var Cardholder = React.createClass({

  getInitialState: function() {
    return {
      cardArray: [],
      category: this.props.category
    }
  },
  

  componentDidMount: function() {

    
    var cardArray = this.buildCardArray(this.props.workItems);
    var that = this;

    var internalAddCardToState = this.addCardToState

    cardArray.forEach(function(item){
      setTimeout(internalAddCardToState.bind(that, item), 175 * item.key)
    });
    
  },

  componentWillReceiveProps: function(nextprops) {

    if (nextprops.setCategoryInProgress === true) {

      console.log('in cardholder: this.props.category !== this.state.category')

      this.setState({
        cardArray: [],
        category: nextprops.category
      });

      var cardArray = this.buildCardArray(nextprops.workItems);
      var that = this;
      var internalAddCardToState = this.addCardToState

      cardArray.forEach(function(item){
        setTimeout(internalAddCardToState.bind(that, item), 175 * item.key)
      });

      this.props.setSetMenuInProgress(false);
    }
  },

  addCardToState: function(card) {

    var tempCardStack = this.state.cardArray;
    
    tempCardStack.push(card);
    
    this.setState({cardArray: tempCardStack});

    if (this.state.cardArray.length === this.props.workItems.length) {
      this.props.setSetMenuInProgress(false);
    }
  },

  buildCardArray: function(workItems) {

    var internalCardArray = [];

    var addCard = function() {

      internalCardArray.push(
        <Card 
          content={workItems[card]} 
          key={card}
          activeSlide={this.props.activeSlide}
          toggleMenuState={this.props.toggleMenuState} />
      )
    };

    for (var card in workItems) {

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
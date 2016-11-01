import React from 'react';
import Menu from '../components/Menu';

var Main = React.createClass({

  componentDidMount: function() {
    this.createOptimizedResizeEvent();
  },

  // this is a function to throttle
  // (which just became a really weird sounding word on repetition on the level of yogurt)
  // events that can fire at a high frame rate.
  // from mdn here: https://developer.mozilla.org/en-US/docs/Web/Events/resize
  // I'm going to use it for resize, but I'm thinking this would be key for scrolling events.

  createOptimizedResizeEvent: function() {
    var throttle = function(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function() {
        if (running) { return; }
          running = true;
           requestAnimationFrame(function() {
              obj.dispatchEvent(new CustomEvent(name));
              running = false;
          });
      };
      obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
  },

  render: function(){

    // http://stackoverflow.com/questions/34410051/conditionally-set-active-class-on-menu-using-react-router-current-route
    return (
      <div>
        <Menu location={this.props.location} />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
let Utils = function() {

	var isTouchDevice = function() {
	  
	  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
	};

	// this is a function to throttle
  // (which just became a really weird sounding word on repetition on the level of yogurt)
  // events that can fire at a high frame rate.
  // from mdn here: https://developer.mozilla.org/en-US/docs/Web/Events/resize
  // I'm going to use it for resize, but I'm thinking this would be key for scrolling events.

  var createOptimizedResizeEvent = function() {
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
  };

	return {
		isTouchDevice: isTouchDevice,
		createOptimizedResizeEvent: createOptimizedResizeEvent
	}

}

module.exports = Utils();

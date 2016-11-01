let Utils = function() {

	var isTouchDevice = function() {
	  
	  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
	};

	return {
		isTouchDevice: isTouchDevice
	}

}

module.exports = Utils();

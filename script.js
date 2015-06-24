;(function(){

	// Consider cross browser compatibility
	var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)}

	// Some mock-jQuery helper methods, whoo!
	
	var querySelectorAll = function(selector){
		var elements = document.querySelectorAll(selector);
		// Convert NodeList to Array
		return [].slice.call(elements)
	};

	var addEventListener = function(elements, type, eventListener) {
		elements.forEach(function(element){
			element.addEventListener(type, eventListener);
		});
	}

	var attr = function(element, attr) {
		return element.attributes.getNamedItem(attr).value;
	}

	// When we are ready to remove marker from the map
	var remove = function(elements) {
		elements.forEach(function(element) {
			if (element.parentNode)
				element.parentNode.removeChild(element);
		});
	}

	DOMReady(function() {

		var map = querySelectorAll('google-map')[0];
		var markers = querySelectorAll('google-map-marker');
		var checkboxes = querySelectorAll('[data-drug]');

		// Each time we use the checkboxes to refine display
		var updateMap= function() {
			// Read the state of each of the checkboxes
			var filters = {};
			checkboxes.forEach(function(checkbox){
				var drug = attr(checkbox, 'data-drug');
				filters[drug] = checkbox.checked;
			});
			
			// Remove all markers from the map to start
			remove(markers);
			
			// Add back the markers that match the checked checkboxes
			var visibleMarkers = markers.filter(function(marker){
				return filters[marker.className]
			});
			visibleMarkers.forEach(function(marker){
				map.appendChild(marker);
			});
		};

		addEventListener(checkboxes, 'change', updateMap);

		// Experiment with this if have time
		//	 _mouseEventsChanged: function() {
	  //     if (this.map) {
	  //       if (this.mouseEvents) {
	  //         this._forwardEvent('mouseover');
	  //       } else {
	  //         this._clearListener('mouseover');
	  //       }
	  //     }
	  //   },

	})

})();
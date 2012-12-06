define( 
	['director'],
	function (Director) {
	//Private Members
	var attributes = {};
	var listeners = [];
	
	var Movie = function () {
	};

	//Public Members
	Movie.prototype = {
		constructor: Movie,
		get: function (key) {
			return attributes[key] ;
		},
		set: function (key, value) {
			attributes[key] = value ;
		},

		play: function() {
			console.log('Event: Play');
			
		},

		stop: function() {
			console.log('Event: Stop');

		}
	};
	return Movie ;		
});


//END SOCIAL MIXIN



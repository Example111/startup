

define( 
	['dust'],
	function () {

	var ProfileParser = function () {
	};

	//Public Members
	ProfileParser.prototype = {
		constructor: ProfileParser,
		parse: function (source,context){
			var dust = require('dust');
			var compiled = dust.compile("Hello {name}!", "intro");
			console.log(compiled) ;
		}
	};
	return  ProfileParser ;		
});


//END SOCIAL MIXIN



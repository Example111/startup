

define( 
	['underscore'],
	function () {

	var ProfileParser = function () {
	};

	//Public Members
	ProfileParser.prototype = {
		constructor: ProfileParser,
		parse: function (source,context){
			console.log(context) ;
			var template = _.template(source) ;
			return template(context) ;
		}
	};
	return  ProfileParser ;		
});


//END SOCIAL MIXIN





define( 
	['handlebars'],
	function () {

	var ProfileParser = function () {
	};

	//Public Members
	ProfileParser.prototype = {
		constructor: ProfileParser,
		parse: function (source,context){
			var template = Handlebars.compile(source) ;
			return template(context) ;
		}
	};
	return  ProfileParser ;		
});


//END SOCIAL MIXIN



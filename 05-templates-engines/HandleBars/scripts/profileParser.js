
define( 
	['handlebars'],
	function () {

		var ProfileParser = function () {
		};
		ProfileParser.prototype = {
			constructor: ProfileParser,
			parse: function (source, context) {
				var template = Handlebars.compile(source) ;
				return template(context) ;
			}
		};
		return  ProfileParser ;		
	});



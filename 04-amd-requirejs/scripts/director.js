define( 
	function () {
	//Private Members
	var name ;
	var quotes = [];

	var Director = function (name) {
		this.name = name ;
	};

	//Public Members
	Director.prototype = {
		constructor: Director,
		speak: function (){
			$('#dialogContent').html('') ;
			$('#titleh')
			.html('') 
			.append('<h3>'+this.name+'</h3>')
			for( var i = 0 ; i < quotes.length ; i++) {
				$('#dialogContent').append('<h3>'+quotes[i]+ '</h3>') ;
			}
			$.mobile.changePage( '#dialogQuotes', { transition: "slideup", role: "dialog"} ) ;
		},
		addQuote : function(quote){
			quotes.push(quote) ;
		}
	};
	return Director ;		
});



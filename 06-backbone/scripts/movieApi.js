define([
 	'jquery'
], 	function(){
 	
	var URL = 'http://imdbapi.org/'
	
	find = function(movieName) {

		var params = 
		{
			type: 'GET',
			url: URL,
			dataType:'json',
			data: { q: movieName  }
		} ;
		return	$.ajax(params) ;
 

	}

  	return {
  		find : find 
  	};
}());
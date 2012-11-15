$( function() {
		var URL = 'http://bootcamp.aws.af.cm/movies';
		var params = {
						 type: 'GET',
                         url: URL,
                         dataType:'json',
 						 success: function(data) {
 						 	$.each(data.d.results, function(key) {


 						 		$('#movieDiv').append( '<img src="' +  data.d.results[key].BoxArt.LargeUrl + '"><br>' ) ;
 						 		$('#movieDiv').append( 'Title: '+  data.d.results[key].Name + '<br>' ); 
 						 		$('#movieDiv').append( 'Year: '+  data.d.results[key].ReleaseYear + '<br>' ); 
 						 		$('#movieDiv').append( 'Synopsis: '+  data.d.results[key].ShortSynopsis + '<br>' );	
 						 		$					 	 	
 						 		});
 						 },
 						 error: function() {
 						 			$('#movieDiv').css('color','red') ;
									$('#movieDiv').text('Error') ;	
 						 		}
					};

		$('#getMovieBtn').bind( 'click', function(event) {
			$.ajax( params ) ; 
		}); 
});
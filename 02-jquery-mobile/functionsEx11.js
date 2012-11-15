$( function() {
		var URL = 'http://bootcamp.aws.af.cm/movies';
		var params = {
						 type: 'GET',
                         url: URL,
                         dataType:'json',
 						 success: function(data) {
 						 	$.each(data.d.results, function(key) {


 						 		$('#moviesList').append( '<li><a href=""><img src="' +  
 						 			data.d.results[key].BoxArt.SmallUrl + '">'  +  data.d.results[key].Name ) ;

 						 		//$('#movieDiv').append( 'Title: '+  data.d.results[key].Name + '<br>' ); 
 						 		//$('#movieDiv').append( 'Year: '+  data.d.results[key].ReleaseYear + '<br>' ); 
 						 		//$('#movieDiv').append( 'Synopsis: '+  data.d.results[key].ShortSynopsis + '<br>' );	
 						 		$('#moviesList').append('</a></li>');
 						 				 	 	
 						 		});


 						 },
 						 error: function() {
 						 			$('#movieDiv').css('color','red') ;
									$('#movieDiv').text('Error') ;	
 						 		}
					};

		$('#getMovieBtn').bind( 'click', function(event) {
			$.mobile.loading( 'show', {
				text: 'Loading Movies',
				textVisible: true,
				theme: 'z',
				html: ""
			});
			$.ajax( params ) ; 
			$('#moviesPage').ajaxComplete( function(event)
			{
				$.mobile.loading('hide') ;
				$('#moviesList').listview('refresh'); 
				
			
			});
			$(document).keyup(function(e) {
  				if (e.keyCode == 27) { 
					$.mobile.loading('hide') ; 
				}  
			});

		}); 
});
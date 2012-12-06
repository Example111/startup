$( function() {
	var URL = 'http://bootcamp.aws.af.cm/movies';
	var params = {
		type: 'GET',
		                        url: URL,
		                        dataType:'json',
		success: function(data) {
			$.each(data.d.results, function(key,movie) {
				$('#movieDiv')
				.append( '<img src="' +  movie.BoxArt.LargeUrl + '"><br>' ) 
				.append( 'Title: ' +  movie.Name + '<br>' )
				.append( 'Year: ' +  movie.ReleaseYear + '<br>' )
				.append( 'Synopsis: ' + movie.ShortSynopsis + '<br>' );	
			});
		},
		error: function() {
			$('#movieDiv')
			.css('color','red') 
			.text('Error') ;	
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
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { 
				$.mobile.loading('hide') ; 
			}  
		});

	}); 
});
	$( function() {
		var URL = 'http://bootcamp.aws.af.cm/movies';
		var params = {
			type: 'GET',
			url: URL,
			dataType:'json',
			success: function(data) {
				console.log('hola') ;
				$.each(data.d.results, function(key,movie) {
					$('#movieDiv')
					.append( '<img src="' +  movie.BoxArt.LargeUrl + '"><br>' ) 
					.append( 'Title: '+  movie.Name + '<br>' )
					.append( 'Year: '+  movie.ReleaseYear + '<br>' )
					.append( 'Synopsis: '+  movie.ShortSynopsis + '<br>' );						 	 	
				});
			},
			error: function() {
				$('#movieDiv')
				.css('color','red')
				.text('Error') ;	
				console.log('a') ;
			}
		};

		$('#getMovieBtn').bind( 'click', function(event) {
			$.ajax( params ) ; 
		}); 
	});
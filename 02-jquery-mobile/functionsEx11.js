$( function() {
	var URL = 'http://bootcamp.aws.af.cm/movies';
	var params = {
		type: 'GET',
		url: URL,
		dataType:'json',
		success: function(data) {
			$.each(data.d.results, function(key,movie) {
				$('#moviesList').append( '<li><a href=""><img src="' +  
					movie.BoxArt.SmallUrl + '">'  +  movie.Name ) ;
				.append('</a></li>');
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
		$('#moviesPage').ajaxComplete( function(event) {
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
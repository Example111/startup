$( function() {
	$('#getMovieBtn').addClass("movieBtn") ;
	var URL = 'http://bootcamp.aws.af.cm/movies';
	var params = {
		type: 'GET',
		                        url: URL,
		                        dataType:'json',
		success: function(data) {
			$.each(data.d.results, function(key,movie) {
				$('#moviesList').append( '<li><a href="" class="dialogLinking" data-som="'+key+'"><img src="' +  
					movie.BoxArt.SmallUrl +'"class="ui-li-icon">'+ movie.Name ) 
				.append('</a></li>') ;
				
				$('#dialogLink'+key).addClass("dialogLinking") ;
				$('#pageBody').append( '<div data-role="page" id="dialogPage' + key + '"></div>') ;

				$('#dialogPage' + key)
				.append( '<div data-role="header" id="dialogTittle' + key + '"></div>') 
				.append('<div data-role="content" id="dialogContent' + key + '"></div>') ;

				$( '#dialogTittle' + key).append( '<h3>Title: '+  data.d.results[key].Name + '</h3><br>' ); 
				
				$( '#dialogContent' + key)
				.append('<img class="logo_image" src="' +  movie.BoxArt.LargeUrl + '"><br>' ) 
				.append('Year: '+  movie.ReleaseYear + '<br>' )
				.append( 'Synopsis: '+  movie.ShortSynopsis + '<br>' ) ;			 	 	
			});
		},
		error: function() {
			$('#movieDiv').css('color','red') ;
			$('#movieDiv').text('Error') ;	
		}
	};

	$('.movieBtn').on( 'click', function(event) {
		$.mobile.loading( 'show', {
			text: 'Loading Movies',
			textVisible: true,
			theme: 'z',
			html: ""
		});
		$.ajax( params ) ; 
	});
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

	$(document).on( 'click',".dialogLinking",function(event){
		var key =($(this).attr('data-som')) ;
		$.mobile.changePage( '#dialogPage'+key, { transition: "slideup", role: "dialog"} ) ;

	});
	
});





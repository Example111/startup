define([
	'backbone',
	'movieApi'
], function(Backbone,MovieApi){

	var App = function () {
	};

	App.prototype = 
	{
		constructor: App,
		initialize:  function(){
				MovieList = Backbone.Collection.extend({
					initialize: function(){
						this.bind("add", function( model ){
							console.log("hey");
							view.render( model );
						});
						this.bind("showDetails", function(model){
							detailedView.render(model) ;
						});

					}
				});

				DetailedView = Backbone.View.extend({

					events: {
						'click .showBtn':  'showDetails',
					},

	
					showDetails: function(ev) {

						var movieName = $(ev.currentTarget).attr("movie");
						this.render(movieName) ;
					},

					render: function( movie_id ) {
						 $.mobile.changePage('#page'+ movie_id, {transition:"slideup"});
					   
					},
				});

				MovieView = Backbone.View.extend({

					tagName: 'li',

					events: {
						'click .add-input':  'getMovie',
						'click .deleteBtn'   :  'delete',
					},

					initialize: function() {
						
						this.movieList = new MovieList;
						_.bindAll(this, 'render');

					}, 

					 delete: function(ev) {
					 	var movieName = $(ev.currentTarget).attr("movie");
					 	console.log(movieName) ;
				        this.movieList.remove(this.movieList.get(movieName));
				        $('#li'+movieName).remove() ;

				    },

					getMovie: function() {

						var movieName = $('#input').val();
						console.log(movieName) ;
						var obj = {title: movieName} ;
						 this.movieList.add( obj );
					},

					render: function( model ) {

					
						var tmp = MovieApi.find( model.get("title")  ) ;
						var source = $('#movie-template').html() ;
						var details = $('#detailed-template').html() ;
						var template = Handlebars.compile(source);
						var dtemplate = Handlebars.compile(details) ;
						var result ;
						tmp.success( function(data){
							result = template(data) ;
							detailsR = dtemplate(data) ;
							model._id = data.imdb_id ;


						});
						tmp.done( function() {
							$("#movie-list").append(result);
							$('body').append(detailsR) ;
							$('body').trigger('create') ;
							$("#movie-list").listview('refresh') ;
							console.log('rendered') ;
							console.log(model._id);

						});


						

					},
				});

				var view = new MovieView({el: 'body'});
				var detailedView = new DetailedView({el: 'body'}) ;
				
		}
	}
	return App ;
			
});



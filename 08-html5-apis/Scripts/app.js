define([
	'snippet',
	'handlebars',
	'backbone'
], function(){

	var App = function () {
	};

	App.prototype = 
	{
		constructor: App,
		initialize:  function(){
			
			
				CodeModel = Backbone.Model.extend( {
					initialize: function() {


					}

				});
    		
				CompileView = Backbone.View.extend({

					tagName: 'pre',
					

					events: {
						'click #compile':  'compile',
						'click #remove' : 'remove',
						'keyup :input': 'logStorage'
					},

					initialize: function() {
						_.bindAll(this, 'render');
						this.model = new CodeModel();
						var container = $('.jsCode') 
						this.model.set({'container': container});
						var code = container.val() ;
						//Ask for previous code
						if (!code) {
								if( !window.localStorage.getItem('code') ) {
									container.html("Insert JS code...");
								}
								else {
									var savedCode=window.localStorage.getItem('code');
									container.html(savedCode);
								}
						}

						this.model.set( { 'code' : code } ) ;
					

					}, 

					remove: function() {
						$('.codeArea').html('') ;
						$('.codeArea').trigger('create') ;
						this.model.set({code:''});
					},
					//Persistant Storage
					logStorage: function() {
						var container = this.model.get('container') ;
						this.model.set( { 'code' : container.val()  } ) ;
						window.localStorage.setItem('code', this.model.get('code') ) ;
						window.localStorage.setItem('timestamp', (new Date()).getTime()) ;
					},

					compile: function() {
						//Execute JS code
						var code = $('.jsCode').val() ;
						eval(code) ;
						this.render(code) ;

					},

					render: function(code) {
						//render and apply style to code( Snipped.js)
						var context = {} ;
						var source = $('#script-template').html() ;
						context.code = code ;
						var template = Handlebars.compile(source) ;
						var result = template(context) ;
						$('.codeArea').hide() ;
						$('.codeArea').html(result);
						$('pre.js').snippet("javascript",{style:"zellner",transparent:true});
						$('.codeArea').show() ;

					}
				});
				var codem = new CodeModel();
				var view = new CompileView({el: 'body'});
				
		}
	}
	return App ;
			
});



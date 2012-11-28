
require.config({
    paths: {
        'jquery'      : 'lib/jquery',
        'jquerymobile': 'lib/mobile',
        'underscore'  : 'lib/underscore',
        'backbone'    : 'lib/backbone',
        'handlebars'  : 'lib/handlebars'
       
     },

    shim: { 

        'jquerymobile' : { 
            deps: ['jquery'],
            exports: 'jQuerymobile'
        },

        'backbone' : {
            deps: ['underscore','jquery'],
            exports: 'Backbone'
        }

    }

});

require(['app','movieApi','underscore','jquerymobile','handlebars'], function(App,MovieApi)
{ 

    document.getElementsByTagName('html')[0].style.display="block";
    var app = new App;
    app.initialize() ;
    


});
 
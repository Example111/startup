    
require.config({
    paths: {
        'jquery': 'lib/jquery',
        'jquerymobile': 'lib/mobile'
    },

    shim: { 

        'jquerymobile' : { 
            deps: ['jquery'],
            exports: 'jQuerymobile'
        }

    }

});

require(['movie','director','lib/mobile'], function(Movie,Director)
{
    document.getElementsByTagName('html')[0].style.display="block";

    var my = new Movie() ;

    my.set('title', 'Nestor la película') ;

    var director = new Director('Steven Spilbergo');
    director.addQuote('Volvere y seré millones') ;
    director.addQuote('nothing really matters to me') ;
    
    my.set('director', director)   ;
    $(document).bind(  'click' , '.speakBtn', function() {
        my.get('director').speak() ;
    });
});

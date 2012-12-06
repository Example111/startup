
require.config({
    paths: {
        'jquery'      : 'lib/jquery',
        'jquerymobile': 'lib/mobile',
        'underscore'  : 'lib/underscore',
        'handlebars'  :  'lib/handlebars',
        'dust'        :  'lib/dust'
    },

    shim: { 

        'jquerymobile' : { 
            deps: ['jquery'],
            exports: 'jQuerymobile'
        }

    }

});

require(['jquerymobile','profileParser'], function(mobile, ProfileParser) {
    document.getElementsByTagName('html')[0].style.display="block";
    $( function() {
        var result ;
        var Parser = new ProfileParser() ;
        var source = $("#professional-template").html() ;
        $.ajax({
            url: "data/profile.json", 
            dataType: "json",
            type: 'GET',
            success: function(data) { 
                result = Parser.parse(source, data) ;
            },
            error : function() { 
                console.log("error")
            }

        }).done( function() { 
            $(result).appendTo('#mainPage').trigger("create") ;

        }) ;




    });

});

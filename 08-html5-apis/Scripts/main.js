
require.config({
    paths: {
        'jquery'      : 'lib/jquery',
        'handlebars'  :  'lib/handlebars',
        'snippet'     : 'lib/snippet',
        'underscore'  : 'lib/underscore',
        'backbone'    : 'lib/backbone'
     },

     shim: {

        snippet: {
            deps:['jquery'],
            exports: 'Snippet'
        },
        backbone: {
            deps:['jquery','underscore'],
            exports: 'Backbone'
        }
     }

});

require(['jquery','app','dragAndDrop','geolocation','worker'], function($,App,DnD,GL)
{
    var myApp = new App() ;
    myApp.initialize() ;
    var dropbox = $('#dropbox').get(0);
    dropbox.addEventListener('dragover', DnD.handleDragOver, false);
    dropbox.addEventListener('drop', DnD.handleFileSelect, false);
   
     if ("WebSocket" in window)
    {
        var ws = new WebSocket("ws://echo.websocket.org");
         ws.onopen = function()
        {
              ws.send("Sending test Message"); 
        };
        ws.onmessage = function (evt) { var received_msg = evt.data; $('#webSocket').html(received_msg) };
         //  ws.onclose = function() { // websocket is closed. };
       alert("WebSockets supported here!\r\n\r\nBrowser: " + navigator.userAgent + "\r\n\r\ntest by jimbergman.net (based on Google sample code)");
    }
    else
    {
    // the browser doesn't support WebSockets
        alert("WebSockets NOT supported here!\r\n\r\nBrowser: " + navigator.userAgent + "\r\n\r\ntest by jimbergman.net (based on Google sample code)");
    }

});
 
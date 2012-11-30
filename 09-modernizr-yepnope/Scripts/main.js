
require.config({
    paths: {
        'jquery'      : 'lib/jquery',
        'handlebars'  :  'lib/handlebars',
        'snippet'     : 'lib/snippet',
        'underscore'  : 'lib/underscore',
        'backbone'    : 'lib/backbone',
        'modernizr'   : 'extra/modernizr',
        'yepnope'     : 'extra/yepnope'
     },

     shim: {

        snippet: {
            deps:['jquery'],
            exports: 'Snippet'
        },
        yepnope:{
          deps:['modernizr'],
          exports: 'yepnope'
        },
        backbone: {
            deps:['jquery','underscore'],
            exports: 'Backbone'
        }
     }

});

require(['jquery','app','dragAndDrop','geolocation','worker','yepnope'], function($,App,DnD,GL,worker,yepnope)
{
  console.log(Modernizr);
  /*Testing Browser with yepnope*/

  yepnope({
    test: Modernizr.geolocation,
    nope: 'scripts/extra/polyfiller.js'
  })
  yepnope({
    test: Modernizr.draganddrop && window.FileReader,
    nope: 'scripts/extra/dropfile.js'
  })

  yepnope({
    test: Modernizr.webworkers,
    nope: 'scripts/extra/fakeworker-0.1.js'
  })

  WEB_SOCKET_SWF_LOCATION = "scripts/extra/WebSocketMain.swf";
  yepnope({
    test: Modernizr.websockets,
    nope: ['scripts/extra/swfobject.js','scripts/extra/web_socket.js']
  })

  yepnope({
    test: Modernizr.mq('(min-width: 0px)'),
    nope: 'scripts/extra/css3MediaQueries.js'
  })

  /* END Testing Browser with yepnope*/

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

});
 
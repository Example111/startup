var msgNumber=1;
(function(){
    var msg="Sending msg number: "+msgNumber++;
	self.postMessage(msg);
    setTimeout(arguments.callee, 60000);

})();
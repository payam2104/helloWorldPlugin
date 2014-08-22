var exec = cordova.require('cordova/exec');

var hello = {};

hello.greet = function (successCallback, errorCallback) {
	exec(successCallback, errorCallback, "Hello", "greet", ["texti"]);   
};

module.exports = hello;
'use strict';

// CALLING PARSE CONSTRUCTORS ///////////////////////////////////////////

//creates a default inputs view using the first photo from the collection
photos.fetch().done(function(){
	defaultInputView = new InputView({model: photos.first() });
	
})

//defines defaultInputsView so that it can be called by constructors and functions
var defaultInputView;

//////////////////////////////////////////////////////////////////////////
console.log('main.js file loaded');
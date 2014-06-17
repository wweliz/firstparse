'use strict';

// CALLING PARSE CONSTRUCTORS ///////////////////////////////////////////

//creates a default input view using the first photo from the collection
photos.fetch().done(function(){
	
	defaultInputView = new InputView({model: photos.first() });
	
	photos.each(function(photos){
		defaultGalleryView = new GalleryView({model: photos});
	});
});

var defaultInputView;
var defaultGalleryView;

//////////////////////////////////////////////////////////////////////////
console.log('main.js file loaded');
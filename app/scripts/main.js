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

/////////////////////////////////////////////
$('.new-btn').click(function() {
	var imgVal = $('.URL-input').val();
	var captionVal = $('.caption-input').val();

	//adds the input values to the photo parse object
	var createdPhoto = photo.add({imgURL: imgVal, caption: captionVal});
	//saves that input value to the server
	createdPhoto.save();

	$('.URL-input').val('');
	$('.caption-input').val('');
});

//////////////////////////////////////////////////////////////////////////
console.log('main.js file loaded');
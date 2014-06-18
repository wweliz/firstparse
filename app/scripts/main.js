'use strict';

// NEW PHOTO BUTTON FUNCTIONALITY ////////////////////////////////////////
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

// INSTANTIATING VIEWS ///////////////////////////////////////////////////

//fetches the photos collection; when done...
photos.fetch().done(function(){
	//creates an input view using the first photo from the collection
	defaultInputView = new InputView({model: photos.first() });
	//eaches over the photo collection, and...
	photos.each(function(photos){
		//creates a gallery view for each photo in the collection
		defaultGalleryView = new GalleryView({model: photos});
	});
});

//names the views so that they can be called elsewhere
var defaultInputView;
var defaultGalleryView;

//////////////////////////////////////////////////////////////////////////
console.log('main.js file loaded');
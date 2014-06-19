'use strict';

// NEW PHOTO BUTTON FUNCTIONALITY ////////////////////////////////////////
$('.new-btn').click(function() {
	var imgVal = $('.URL-input').val();
	var captionVal = $('.caption-input').val();

	//adds the input values to the photo parse object
	var createdPhoto = photo.add({imgURL: imgVal, caption: captionVal});
	//saves that input value to the server
	createdPhoto.save();

	//clears the URL and caption fields
	$('.URL-input').val('');
	$('.caption-input').val('');
});

// INSTANTIATING VIEWS ///////////////////////////////////////////////////

//if you don't tell the view which collection it is displaying, you can't
//use this.collection because it doesn't know what that is referring to

//parse doesn't have a "listenTo" so you have to use "on"
		//Backbone automatically triggers the "add" and "change" events;
		//otherwise, you have to use "trigger"
				//example: this.collection.trigger('userLoggedIn')
photos.on('add', function(model){
	new GalleryView({model: model});
});

//fetches the photos collection; when done...
photos.fetch({add: true}).done(function(){
	//creates an input view using the first photo from the collection
	defaultInputView = new InputView({model: photos.first() });
	//if you are using on (ie, listeningTo), you no longer a need to each over
	//the collection and create a new view for each model in the collection
	//because you are already doing that inside of the on function
});

//names the views so that they can be called elsewhere
var defaultInputView;

//////////////////////////////////////////////////////////////////////////
console.log('main.js file loaded');
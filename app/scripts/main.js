'use strict';

// NEW PHOTO BUTTON FUNCTIONALITY ////////////////////////////////////////
	//when you click the "Create New Photo" button...
$('.new-btn').click(function() {
	//naming the value of the URL and caption input fields so that they can
	//be passed through the add function below
	var imgVal = $('.new-URL-input').val();
	var captionVal = $('.new-caption-input').val();

	//adds the input values to the photo collection
	var createdPhoto = photos.add({imgURL: imgVal, caption: captionVal}).last();
	//saves added input to the server
	createdPhoto.save();

	//clears the new photo URL and caption fields
	$('.new-URL-input').val('');
	$('.new-caption-input').val('');
});

// INSTANTIATING VIEWS ///////////////////////////////////////////////////

//if you don't tell the view which collection it is displaying, you can't
//use this.collection because it doesn't know what that is

//parse doesn't have a "listenTo" so you have to use "on"
		//Backbone automatically triggers the "add" and "change" events;
		//otherwise, you have to use "trigger"

//when a model is added to the photos collection...
photos.on('add', function(model){
	//create a new gallery view from that model
	new GalleryView({model: model});
});

//fetches the photos collection; when done...
	//by default, Backbone sets add to true inside a fetch; Parse sets add
	//to false by default, so you have to set it back to true
photos.fetch({add: true}).done(function(){
	//creates an input view using the first photo instance in the collection
	defaultInputView = new InputView({model: photos.first() });
	//if you are using on (ie, listeningTo), you no longer a need to each over
	//the collection and create a new view for each model in the collection
	//because you are already doing that inside of the on function (above)
});

//names the views so that they can be called elsewhere
var defaultInputView;

//////////////////////////////////////////////////////////////////////////
console.log('main.js file loaded');
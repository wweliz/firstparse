'use strict';

// CREATE NEW PHOTO BUTTON FUNCTIONALITY /////////////////////////////////
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

// CREATE NEW CANVAS-IMAGE BUTTON FUNCTIONALITY /////////////////////////////////

$('.new-canvas-btn').click(function() {

	$('.input-view-image').replaceWith('<canvas id="c" width="983px" min-height="250px"></canvas> ');

	// create a wrapper around native canvas element (with id="c")
	var canvas = new fabric.Canvas('c');

	//naming the value of the URL and caption input fields so that they can
	//be passed through the functions below
	var imgVal = $('.new-URL-input').val();
	var captionVal = $('.new-caption-input').val();

	//adds an instance of the fabric-image to the canvas
		//pass the URL of the image through as the first arguement
	fabric.Image.fromURL(imgVal, function(oImg) {
	  		canvas.add(oImg);
	});
	
	console.log('canvas is ', canvas);

	var mycanvas = document.getElementById("c");

	console.log('mycanvas is ', mycanvas);

	var myimgURL = mycanvas.toDataURL("image/png");

	console.log('myimgURL is ', myimgURL);

	var newImg = document.createElement("img");
	newImg.src = myimgURL;

	document.getElementById("placehere").replaceWith('<img src="<%= myimgURL %>"></img>');

	// mycanvas.toBlob(function(blob) {
	// 	var newImg = document.createElement("img");
	// 	url = URL.createObjectURL(blob);
		// newImg.onload = function() { 
  //           // no longer need to read the blob so it's revoked 
  //           URL.revokeObjectURL(url); 
  //       }; 
  //       newImg.src = url; 
  //       document.body.appendChild(newImg);

  //         console.log('canvas url is ', url);
  // });

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
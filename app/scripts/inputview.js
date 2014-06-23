'use strict';


// PARSE INPUT VIEW /////////////////////////////////////////////////////
var InputView = Parse.View.extend({
	className : 'edit-photo',

	photoTemplate: _.template($('.input-template').text()),

	events: {
		'click .make-grayscale-btn'	: 'makeGrayscale',
		'click .save-btn'						: 'updatePhoto',
		'click .delete-btn'					: 'deletePhoto'
	},

	initialize: function(){
		//appends the input-view div with everything inside the input-template
		// script in the HTML
		$('.input-view').append(this.el);

		//calls the render function
		this.render();
	},

	render: function(){
		var renderedTemplate = this.photoTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
		return this;
	},

	makeGrayscale: function(){
		$('.input-view-image').replaceWith('<canvas id="c" width="983px"></canvas> ');

		// create a wrapper around native canvas element (with id="c")
		var canvas = new fabric.Canvas('c');

		//naming the value of the URL input field so that it can be
		//passed through the function below
		//var imgVal = $('.URL-input').val();

		//pass the URL of the image through as the first arguement
		fabric.Image.fromURL('../images/awesomecat.jpg', function(img) {
		//creates a new fabric image, then adds the grayscale filter
		img.filters.push(new fabric.Image.filters.Grayscale());
		// apply filters and re-render canvas when done
		img.applyFilters(canvas.renderAll.bind(canvas));
		// adds image onto canvas
		canvas.add(img);
		});

		//saves the canvas instance
		//canvas.save();

		//calls render so that edited image and caption appear
		//canvas.render();


		//adds the input values to the photo collection
		//var createdPhoto = photos.add({imgURL: imgVal, caption: captionVal}).last();
		//saves added input to the server
		//createdPhoto.save();

		console.log('grayscale button clicked!');
	},

	updatePhoto: function(){
		//sets the values for the photo being edited
		this.model.set({
			imgURL:		this.$el.find('.URL-input').val(),
			caption:	this.$el.find('.caption-input').val()
		});

		//saves the edited photo parse object
		this.model.save();

		//calls render so that edited image and caption appear
		this.render();
			//parse "knows" to add the edited photo to the collection,
			//so no need to call that function here

	},

	deletePhoto: function(){
		//deletes photo photo parse object on the server
		this.model.destroy();
		//calls the resetView function
		this.resetView();
	},

	resetView: function(){
		//resets the edit view photo to a blank placeholder
		this.$el.find('img').attr('src','http://placehold.it/350x150');

		//clears the values from the input fields
		$('.URL-input').val('');
		$('.caption-input').val('');
		$('.input-view-caption').remove();
	}
});

//////////////////////////////////////////////////////////////////////////
console.log('inputview.js file loaded');
'use strict';

// PARSE GALLERY VIEW ////////////////////////////////////////////////////
var GalleryView = Parse.View.extend({
	// model: 'photo',
	// collection: 'photos',

	className : 'single-photo',

	galleryTemplate: _.template($('.gallery-template').text()),

	events: {'click' : 'renderInputView'},

	initialize: function(){
		this.model.on('change');
		//appends the gallery-view div with the gallery-template elements
		$('.gallery-view').append(this.el);
		//calls the render function
		this.render();

		this.model.on( 'change', this.render.bind(this) );
	},

	render: function(){
		var renderedTemplate = this.galleryTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
		return this;
	},

	renderInputView: function(){
		//remove the default input view using the first image from the collection
		defaultInputView.remove();
		//creates a new input view using the image you clicked
			//use = to give the new input view the same name as before; if the
			//function has a different name, the click event will only fire
			//correctly the first time (the view must exist in order to be removed)
		defaultInputView = new InputView({model: this.model});
	}
});

//////////////////////////////////////////////////////////////////////////
console.log('galleryview.js file loaded');
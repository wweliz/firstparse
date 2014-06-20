'use strict';

// PARSE GALLERY VIEW ////////////////////////////////////////////////////
var GalleryView = Parse.View.extend({
	className : 'single-photo',

	galleryTemplate: _.template($('.gallery-template').text()),

	events: {'click' : 'renderInputView'},

	initialize: function(){
		//when the model changes...
		this.model.on('change');
		//appends the gallery-view div with the gallery-template elements
		$('.gallery-view').append(this.el);
		//calls the render function
		this.render();

		//when a model is added, render a gallery view using that model
				//bind is a method that belongs to every function; it is used
				//to change a function's scope -- in this case, we want to change
				//the scope of the render and remove to be the "outer" this
				//(where "this" stands for the gallery view's model)
		this.model.on( 'add', this.render.bind(this) );
		//when a model changes, render a gallery view using that model
		this.model.on( 'change', this.render.bind(this) );
		//when a model is destroyed (ie, deleted), remove that model's
		//gallery view from the DOM
		this.model.on( 'destroy', this.remove.bind(this) );
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
			//correctly the first time (a view with the same name must exist in 
			//order for that view to be removed)
		defaultInputView = new InputView({model: this.model});
	}
});

//////////////////////////////////////////////////////////////////////////
console.log('galleryview.js file loaded');
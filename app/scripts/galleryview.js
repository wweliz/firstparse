'use strict';

// PARSE GALLERY VIEW ////////////////////////////////////////////////////
var GalleryView = Parse.View.extend({
	className : 'single-photo',

	galleryTemplate: _.template($('.gallery-template').text()),

	events: {'click' : 'renderInputView'},

	initialize: function(){
		//appends the gallery-view div with the gallery-template elements
		$('.gallery-view').append(this.el);
		//calls the render function
		this.render();
	},

	render: function(){
		var renderedTemplate = this.galleryTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
		return this;
	},

	renderInputView: function(){
		//anInputView.remove();
		//anInputView = new InputView({model: this.model});
		new InputView({model: this.model});
	}
});

//////////////////////////////////////////////////////////////////////////
console.log('galleryview.js file loaded');
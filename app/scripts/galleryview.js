'use strict';

// PARSE GALLERY VIEW ////////////////////////////////////////////////////
var GalleryView = Parse.View.extend({
	className : 'single-photo',

	galleryTemplate: _.template($('.gallery-template').text()),

	events: {'click' : 'showInputView'},

	initialize: function(){
		$('.gallery-view').append(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.galleryTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	showInputView: function(){
		//anInputView.remove();
		anInputView = new InputView({model: this.model});
	}
});

//////////////////////////////////////////////////////////////////////////
console.log('galleryview.js file loaded');
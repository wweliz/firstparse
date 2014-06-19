'use strict';


// PARSE INPUT VIEW /////////////////////////////////////////////////////
var InputView = Parse.View.extend({
	className : 'edit-photo',

	photoTemplate: _.template($('.input-template').text()),

	events: {
		'click .save-btn'			: 'updatePhoto',
		'click .delete-btn'		: 'deletePhoto'
	},

	initialize: function(){
		//appends the input-view div with the input-template elements
		$('.input-view').append(this.el);
		//calls the render function
		this.render();
		
	},

	render: function(){
		var renderedTemplate = this.photoTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
		return this;
	},

	updatePhoto: function(){
		//sets the values for the photo being edited
		this.model.set({
			imgVal:		this.$el.find('.URL-input').val(),
			caption:	this.$el.find('.caption-input').val()
		});

		//saves the edited photo parse object
		this.model.save();
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
		//$('.caption').remove();
	}
});

//////////////////////////////////////////////////////////////////////////
console.log('inputview.js file loaded');
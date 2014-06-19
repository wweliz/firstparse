'use strict';

//before you can use Parse, you need to initialize it with your App ID and
//JavaScript key --> to find them, navigate to your app on the Parse webpage,
//click on the settings tab, then the application keys button (on the left)
	//the initialize's first arguement is the App ID; the second is the JavaScript key
Parse.initialize('JTYuoEgHUuH8Gn7pEkFWz02vvm67tBAEKBXmr6Ju', '8n3OIvEj6RZydY0hkkFi4bRVpmEXXMKF6C8Shv3w');

// PARSE PHOTO OBJECT ////////////////////////////////////////////////////
var Photo = Parse.Object.extend({
	className: 'Photo',

	defaults: {
	  imgURL	: 'http://placehold.it/350x150',
		caption	: 'no caption'
  }
});

var photo = new Photo;

// PARSE PHOTO COLLECTION ////////////////////////////////////////////////
var PhotoCollection = Parse.Collection.extend({
	model: Photo
});

var photos = new PhotoCollection;

//////////////////////////////////////////////////////////////////////////
console.log('parseobject-collection.js file loaded');
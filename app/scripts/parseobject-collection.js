'use strict';

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
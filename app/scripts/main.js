Parse.initialize("JTYuoEgHUuH8Gn7pEkFWz02vvm67tBAEKBXmr6Ju", "8n3OIvEj6RZydY0hkkFi4bRVpmEXXMKF6C8Shv3w");

var Animal = Parse.Object.extend({
	className: "Animal"
});

var fido = new Animal;

// fido.save({
// 	name: "Fido"
// }).done(function(){
// 	console.log('it worked!');
// }).fail(function(){
// 	console.log('failed!')
// })

animalQuery = new Parse.Query(Animal);

animalQuery.get("QTyVinTyFk", {
  success: function(animal) {
  	console.log('animal is', animal)
    // The object was retrieved successfully.
  },
  error: function(object, error) {
  	console.log('fail')
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and description.
  }
});
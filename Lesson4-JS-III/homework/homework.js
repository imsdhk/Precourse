// Do not change any of the function names

function makeCat(name, age) {
  // code here
  var obj = {
    name : name,
    age: age,
    meow: function(){
      return 'Meow!';
    }
  };

  return obj;
}

function addProperty(object, property) {
  // code here
  object[property] =  null;
  return object;
}

function invokeMethod(object, method) {
  // code here
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  return mysteryNumberObject['mysteryNumber']  * 5;

}

function deleteProperty(object, property) {
  // remove the property from the object
  // return the object
  delete object[property];
  return object;
}

function newUser(name, email, password) {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  return {
    name: name,
    email: email,
    password: password
  };
}

function hasEmail(user) {
  // return true if the user has a value for the property 'email'
  // otherwise return false
  if(user['email'] === undefined || user['email'] === ''){
    return false;
  } else {
    return true;
  }
}

function hasProperty(object, property) {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
  return object[property] !== undefined;
}

function verifyPassword(user, password) {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
  return user['password'] === password;
}

function updatePassword(user, newPassword) {
  // replace the existing password on the user object with the value of newPassword
  // return the object
  user['password'] = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
  user['friends'].push(newFriend);
  return user;
}

function setUsersToPremium(users) {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
  users.forEach(function(el){
    el.isPremium = true;
  });
  return users;

}

function sumUserPostLikes(user) {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
  var newUser = user.posts;
  var sum = 0;
  for(var obj of newUser){
    sum+= obj.likes;
  }
  return sum;
}

function addCalculateDiscountPriceMethod(storeItem) {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example:
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  storeItem['calculateDiscountPrice'] = function(){
    return this.price -  (this.price * this.discountPercentage);
  };
  return storeItem;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};

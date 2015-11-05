var Person = function(firstAndLast) {
  var firstName = firstAndLast.split(" ")[0];
  var lastName = firstAndLast.split(" ")[1];
  this.getFullName = function(){
    return firstName + ' ' + lastName;
  };
  this.getLastName = function(){
    return lastName;
  };
  this.getFirstName = function(){
    return firstName;
  };
  this.setFullName = function(name){
    firstName = name.split(" ")[0];
    lastName = name.split(" ")[1];
  };
  this.setFirstName = function(name){
    firstName = name;
  };
  this.setLastName = function(name){
    lastName = name;
  };
};

var bob = new Person('Bob Ross');

console.log(bob.getLastName());
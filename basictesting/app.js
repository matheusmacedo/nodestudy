var person = {
  firstname: 'Matheus',
  lastname: 'Macedo',
  greet: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
}

person.greet();
console.log(person['firstname']);

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function() {
  console.log(this.name + ' barked!');
}

Dog.prototype.fbreed = function() {
  console.log(this.name + ' is a ' + this.breed);
}

var blair = new Dog('Blair', 'Poodle');
blair.bark();
blair.fbreed();
console.log(blair.__proto__);

// objects are passed by reference

var sing = require('./sing');
sing();

var lang = require('./language');
lang.english();
lang.portuguese();

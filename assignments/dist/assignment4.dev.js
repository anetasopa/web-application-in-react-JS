"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1. create a "Person" class that will create a "person" instance
//    that will have "name", "age", "nationality"
//    and a function that will display all user informations
// 2. create at least 4 "person" objects with ages, 18, 23, 40, 45
// 3. create an array, and add all persons you have created before
//    in that list
// 4. create a for loop and iterate through all persons
// 5. display person informations(name, age, nationality) in for loop
//    for all persons older than 25 years
//    - if a person name is shorter than 6 characters display console.log
//      "<person name> is not valid!"
// CODE UNDER THIS LINE
// --------------------
var Person = function Person(name, age, nationality) {
  _classCallCheck(this, Person);

  this.name = name;
  this.age = age;
  this.nationality = nationality; // this.userInformation = function() {
  // console.log("Name: " + this.name);
  // console.log("Age: " + this.age);
  // console.log("Nationality: " + this.nationality);
  // console.log("--------------");
  // }
};

Person.prototype.userInformation = function () {
  console.log("Name: " + this.name);
  console.log("Age: " + this.age);
  console.log("Nationality: " + this.nationality);
  console.log("--------------");
};

var person1 = new Person("Kris", 18, "Austria");
var person2 = new Person("Agnieszka", 23, "Poland");
var person3 = new Person("Magdalenia", 40, "German");
var person4 = new Person("Ana", 45, "USA");
var persons = [person1, person2, person3, person4];
var person5 = new Person("Ema", 4, "Slovak");
persons.push(person5);

for (var i = 0; i < persons.length; i++) {
  var person = persons[i];

  if (person.age > 25) {
    person.userInformation();
  }

  if (person.name.length < 6) {
    console.log(person.name + " is not valid!");
  }
}
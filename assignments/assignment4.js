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

class Person {
  constructor(name, age, nationality) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    // this.userInformation = function() {
      // console.log("Name: " + this.name);
      // console.log("Age: " + this.age);
      // console.log("Nationality: " + this.nationality);
      // console.log("--------------");
    // }
  }
}

Person.prototype.userInformation = function() {
  console.log("Name: " + this.name);
  console.log("Age: " + this.age);
  console.log("Nationality: " + this.nationality);
  console.log("--------------");
}

const person1 = new Person("Kris", 18, "Austria");
const person2 = new Person("Agnieszka", 23, "Poland");
const person3 = new Person("Magdalenia", 40, "German");
const person4 = new Person("Ana", 45, "USA");

const persons = [person1, person2, person3, person4];

const person5 = new Person("Ema", 4, "Slovak");
persons.push(person5);

for (var i = 0; i < persons.length; i++) {
  const person = persons[i];
  if (person.age > 25) {
    person.userInformation()
  }

  if (person.name.length < 6) {
    console.log(person.name + " is not valid!")
  }
}

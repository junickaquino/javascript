// ==================
// Object Oriented Programming in ES6+
// with classes
// ==================

// Classes
// By doing this way, it outputs the same as with constructor + prototypes.
// Just cleaner, and allows other developer from different backgrounds to get familiar with ease.
// The functions o r methods is still under the prototype when the entire Person object was outputted.
// Methods are functions inside the class.

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// - Instantiate Object
const person1 = new Person("Junick", "Aquino", "May 29, 1999");
const person2 = new Person("King", "Aquino", "March 28, 2007 8:00 pm");

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);

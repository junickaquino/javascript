// ==================
// Object Oriented Programming
// ==================

// Constructor function
// -- Start with a capital letter
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// - Instantiate Object
const person1 = new Person("Junick", "Aquino", "May 29, 1999");
const person2 = new Person("King", "Aquino", "March 28, 2007 8:00 pm");

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());

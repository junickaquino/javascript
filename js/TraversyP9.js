// ==================
// Object Oriented Programming
// ==================

// Constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

// Prototypes
// This is done so that you won't see the functions when you output the entire Person object
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// - Instantiate Object
const person1 = new Person("Junick", "Aquino", "May 29, 1999");
const person2 = new Person("King", "Aquino", "March 28, 2007 8:00 pm");

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);

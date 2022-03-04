// ==================
// Object Literals
// ==================

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person);
console.log(person.firstName);
console.log("Hello! My name is " + person.firstName, person.lastName);
console.log("I like watching " + person.hobbies[1]);
console.log("I live in " + person.address.city);

// ==================
// Destructuring
// ==================

const {
  firstName,
  lastName,
  address: { city },
} = person;
console.log(firstName);
console.log(lastName);
console.log(city);

// ==================
// Adding Properties
// ==================

person.email = "jogn@gmail.com";
console.log(person); // See that the email has now been added

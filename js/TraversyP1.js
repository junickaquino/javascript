// ==================
// Concatination and Template String
// ==================

const name = "john";
const age = 30;

// Concatination
console.log("My name is " + name + " and I am " + age + " years old.");

// Template String
const hello = `My name is ${name} and I am ${age} years old.`;
console.log(hello);

// ==================
// String functions
// ==================

const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5)); //Starts at pos 0, Ends at pos 5
console.log(s.substring(0, 5).toUpperCase()); //Nesting multiple functions
console.log(s.split("")); //Splits the string into an array. Put an empty string to split per char

const sep = "technology, computers, it, code";
console.log(sep.split(", "));

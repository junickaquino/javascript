// ==================
// Arrays
// -- Variables that holds multiple values
// ==================

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["apples", "oranges", "pears"];
console.log(fruits);
// fruits = ["apples", "oranges", "pears", "pineapple"]; -- Cannot do this because fruits is CONSTANT.

const fruitsMix = ["apples", "oranges", "pears", 10, true]; // JS allows you to input other data types mixed in the array
console.log(fruitsMix);

console.log(fruits[1]);

fruits[3] = "grapes"; // This is okay because it doesn't directly modify the fruits array. It only appended it. Not the best way to append tho.
console.log(fruits);

fruits.push("pineapple"); // Better way to append in the array. Adds at the end.
console.log(fruits);

fruits.unshift("mangoes"); // Adds at the start
console.log(fruits);

fruits.pop(); // Removes the last element
console.log(fruits);

fruits.shift(); // Removes the first element
console.log(fruits);

console.log(Array.isArray(fruits)); // Checks if something is an array
console.log(Array.isArray("hello"));

console.log(fruits.indexOf("oranges")); // Returns the index of the element

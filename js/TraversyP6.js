// ==================
// Conditionals
// ==================

// == -> Doesn't match the data types
// === -> Matches the data type

const x = 10;

if (x == 10) {
  console.log("x is 10");
}

const y = 20;

if (y === 10) {
  console.log("y is 10");
} else {
  console.log("y is NOT 10");
}

const z = 30;

if (z === 10) {
  console.log("y is 10");
} else if (z > 10) {
  console.log("z is greater than 10");
} else {
  console.log("z is less than 10");
}

if (x > 5 || y > 10) {
  console.log("x is more than 5 or y is more than 10");
}

// Ternary operator
// Mostly used when having conditions for a value of a variable
const ter = 10;
const color = x > 10 ? "Red" : "Blue";
console.log(color);

// Switches
switch (color) {
  case "Red":
    console.log("Color is Red");
    break;

  case "Blue":
    console.log("Color is Blue");
    break;

  default:
    console.log("Color is NOT Red or Blue");
    break;
}

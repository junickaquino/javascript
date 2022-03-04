// ==================
// DOM - Document Object Model
// ==================

/*
console.log(window);

window.alert(1);
 or simply alert(1) because window is the very top object
*/

// Single Element selectors
const form = document.getElementById("my-form");
const container = document.querySelector(".container"); // Selects the first #id, .class, element

console.log(form);
console.log(container);

// Multiple Element selectors
console.log(document.querySelectorAll(".item")); // Outputs a nodelist for all retrieved selector. Recommended to use for multiple selection.

console.log(document.getElementsByClassName("item")); // Outputs an HTML Collection. Cannot use Array  methods, needs to convert to array. Quite an old way to select multiples.
console.log(document.getElementsByTagName("li")); // Outputs an HTML Collection. Cannot use Array  methods, needs to convert to array. Quite an old way to select multiples.

// Loop through items
const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

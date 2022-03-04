// ==================
// Manipulating the DOM
// ==================

const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// Change the style
const btn = document.querySelector(".btn");
btn.style.background = "red";

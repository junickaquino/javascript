// ==================
// Events
// ==================

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  console.log(e);
  console.log(e.target.className);
  //   console.log(e.target.id);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>Hello</h1>";
});

// Events:
/*
    "click"
    "mouseover"
    "mouseout"
*/

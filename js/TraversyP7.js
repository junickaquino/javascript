// ==================
// Functions
// ==================

function addNums(num1, num2) {
  console.log(num1 + num2);
}

addNums(5, 4);

// With default parameter values
function addNumsDef(num1 = 1, num2 = 4) {
  console.log(num1 + num2);
}

addNumsDef();

// Return values
function addNumsRet(num1 = 1, num2 = 4) {
  return num1 + num2;
}

console.log(addNumsRet());

// ==================
// Arrow Functions
// ==================

// Long hand
const addNumsArrow = (num1 = 1, num2 = 4) => {
  return num1 + num2;
};

console.log("Arrow: " + addNumsArrow());

// Medium hand
const addNumsArrowMed = (num1 = 1, num2 = 4) => {
  console.log(`ArrowMed: ${num1 + num2}`);
};

addNumsArrowMed(5, 6);

// Short hand
const addNumsArrowShort = (num1 = 1, num2 = 4) =>
  console.log(`ArrowShort: ${num1 + num2}`);

addNumsArrowShort(5, 7);

// Shorter hand
const addNumsArrowShorter = (num1 = 1, num2 = 4) => num1 + num2;

console.log("ArrowShorter: " + addNumsArrowShorter(5, 8));

// Shorterer hand
const addNumsArrowShorterer = (num1) => num1 + 9;

console.log("ArrowShorterer: " + addNumsArrowShorterer(5));

// Great for using in forEach
// Ex: todos.forEach(todo) => console.log(todo));

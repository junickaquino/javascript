// ==================
// 1. Count to ten
// ==================

// Using Iterator Function
/*
const countToTen = (num = 1) => {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

countToTen();
*/

// Using recursion
/*
function countToTen(num = 1) {
  // Base Case
  if (num > 10) {
    return;
  }
  // Recursive call
  else {
    console.log(num);
    countToTen(num + 1);
  }
}

countToTen();
*/

// ==================
// 2. Fibonacci Sequence
//  -- 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.
//  -- Returns the first n number of the fibonacci sequence.
// ==================

// Using Iteration function
/*
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num -= 1;
  }
  return array;
};

console.log(fibonacci(12));
*/

// Using Recursion
const fib = (num, array = [0, 1]) => {
  // Base Case
  if (num <= 2) {
    return array;
  }
  // Recursive call
  else {
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last]);
  }
};

console.log(fib(12));

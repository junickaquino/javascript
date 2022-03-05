/*

== The Concept ==

function processDoll(doll){

  // 1) Base case
  if (found the piece of chocolate) {
    return "Yum Yum";
  }

  // 2) Recursive call to itself
  else if (there are no more dolls) {
    return "No chocolate here :("
  }

  else {
    processDoll(the smaller doll)
  }
}

*/

// ============
// Factorial using Recursion
// ============
/*
  4!
  = 4 * 3 * 2 * 1
  = 24
*/

function factorial(n) {
  // Base Case
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4)); // Output: 24

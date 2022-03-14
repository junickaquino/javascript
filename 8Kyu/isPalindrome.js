function isPalindrome(x) {
  // Reverse the string
  x = x.toUpperCase();
  let reverse = "";
  for (let i = 0; i < x.length; i++) {
    reverse = x[i] + reverse;
  }

  console.log(reverse);

  // Compare the word with its reverse version
  return x === reverse ? true : false;
  /*
  The ternary operator is redundant since we have === already
  to evaluate true or false.
    return x === reverse;  <-- this is enough

  /* 
  == ONE LINER ANDY LMAO ==

  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false

  */
}

console.log(isPalindrome("aba"));

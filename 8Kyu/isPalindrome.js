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
}

console.log(isPalindrome("aba"));

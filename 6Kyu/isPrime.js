function isPrime(num) {
  if (num < 0) {
    return false;
  }

  let result = (num + 1) / 6;

  console.log(result);

  if (result % 1 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(2));

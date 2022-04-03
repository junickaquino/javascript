// function isPrime(num) {
//   if (num < 0) {
//     return false;
//   }

//   let result = (num + 1) / 6;

//   console.log(result);

//   if (result % 1 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPrime(2));

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  const range = (min, max) =>
    [...Array(max - min + 1).keys()].map((i) => i + min);

  for (i in range(3, num)) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));

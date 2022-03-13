/*

    Given a number n, return the number of positive odd numbers below n, EASY!

*/

function oddCount(n) {
  /*

    MY CODE IS WORKING BUT IT WASNT TIME EFFICIENT FOR LARGE NUMBERS.

  //   let odds = 0;
  //   let i = 0;

  //   for (let i = 0; i < n; i++) {
  //     if (!(i % 2 == 0)) {
  //       odds++;
  //     }
  //   }

  //   while (i < n) {
  //     if (!(i % 2 == 0)) {
  //       odds++;
  //     }
  //     i++;
  //   }

  //   function range(size, startAt = 0) {
  //     return [...Array(size).keys()].map((i) => i + startAt);
  //   }

  //   for (number of range(n)) {
  //     if (!(number % 2 == 0)) {
  //       odds++;
  //     }
  //   }

  //   return odds;

  */

  /* 
    === OTHER SOLUTIONS ===
  */

  // return Math.floor(n / 2); // THIS IS GENIUS. I AM SO DUMB
  return parseInt(n / 2);
}

console.log(oddCount(7));
console.log(oddCount(15));

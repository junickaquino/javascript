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

// ==================
// 3. Find the nth position in a Fibonacci Sequence
//  -- Returns the number in a Fib seq for the inputted position.
// ==================

// Without Recursion
/*
  const fibPos = (pos) => {
    if (pos <= 1) {
      return pos;
    } else {
      const seq = [0, 1];
  
      for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
      }
  
      return seq[pos];
    }
  };
  
  console.log(fibPos(8));
  */

// With Recursion
const fibPos = (pos) => {
  if (pos < 2) {
    return pos;
  } else {
    return fibPos(pos - 1) + fibPos(pos - 2);
  }
};

console.log(fibPos(8));

// One line Recursion
const fibPos1L = (pos) => (pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2));
console.log("One line: " + fibPos1L(8));

// ==================
// 4. IRL Example: Continuation Token from an API
//  --
// ==================

// Pseudo code
const getAWSProductIdImages = async () => {
  /* 
  
      <Get the data with await Fetch request>
  
    */

  if (data.IsTruncated) {
    // Recursive Call
    return await getAWSProductIdImages(
      productsId,
      s3, // connection to s3
      resultArray, // accumulator
      data.NextContinuationToken
    );
  }

  return resultArray;
};

// ==================
// 5. IRL Example: A Parser
//  -- a company directory
//  -- a file directory
//  -- the DOM - a web crawler
//  -- An XML or JSON data export
// ==================

/*
    A function that retrieves all of artists names.
    A recursion handles this well because there are categories and subcategories that you might not know existed.
  */

// Export from your streaming service like Spotify , YT Music, etc.
const artistsByGenre = {
  jazz: ["Miles Davis", "John Coltrane"],
  rock: {
    classic: ["Bob Seger", "The Eagles"],
    hair: ["Def Leppard", "Whitesnake", "Poison"],
    alt: {
      classic: ["Pearl Jam", "The Killers"],
      current: ["Joywave", "Sir Sly"],
      test: {
        // Added for testing.
        testinner: ["Junick"], // Should now outputs 17 artists.
      },
    },
  },

  unclassified: {
    new: ["Caamp", "Neil Young"],
    classic: ["Seal", "Morcheeba", "Chris Stapleton"],
  },
};

const getArtistNames = (dataObj, arr = []) => {
  Object.keys(dataObj).forEach((key) => {
    if (Array.isArray(dataObj[key])) {
      // console.log(arr); --- uncomment for testing. Outputs array for every object reads.
      return dataObj[key].forEach((artist) => {
        arr.push(artist);
      });
    }

    getArtistNames(dataObj[key], arr);
  });

  return arr;
};

console.log(getArtistNames(artistsByGenre)); // Output: all of the 16 artists in one list/array.

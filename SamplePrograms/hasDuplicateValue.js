function hasDuplicateValue(array) {
  let steps = 0;
  let existing_numbers = [];

  for (let i = 0; i < array.length; i++) {
    steps++;

    console.log(existing_numbers[array[i]]);

    if (existing_numbers[array[i]] === undefined) {
      existing_numbers[array[i]] = 1;
    } else {
      return true;
    }
  }

  console.log(steps);
  return false;
}

const arr = ["cat", "dog", "cat"];

console.log(hasDuplicateValue(arr));

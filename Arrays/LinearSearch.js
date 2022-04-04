function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    }
  }

  return false;
}

const arr = [1, 4, 6, 7, 9, 3, 2, 5, 8];

console.log(linearSearch(arr, 1));

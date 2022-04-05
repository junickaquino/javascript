function bubbleSort(array) {
  //   let sorted = false;
  //   let unsortedLength = array.length - 1;
  let swapped = true;

  //   while (!sorted) {
  do {
    // sorted = true;
    swapped = false;
    // for (let i = 0; i <= unsortedLength; i++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        // sorted = false;

        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        // unsortedLength = unsortedLength - 1;

        swapped = true;
      }
    }
    //   }
  } while (swapped);
}

const arr = [1, 4, 6, 7, 9, 3, 2, 5, 8];
bubbleSort(arr);
console.log(arr);

/*

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        checked = true;
      }
    }
  } while (checked);
  return inputArr;
};

const arr = [1, 4, 6, 7, 9, 3, 2, 5, 8];
bubbleSort(arr);
console.log(arr);


*/

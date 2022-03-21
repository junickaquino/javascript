function isPangram(string) {
  // Build the alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaArr = [];
  for (let i = 0; i < alphabet.length; i++) {
    alphaArr.push(alphabet[i]);
  }

  // loop through the string
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < alphaArr.length; j++) {
      if (string[i] == alphaArr[j]) {
        const index = alphaArr.indexOf(string[i]);
        if (index > -1) {
          alphaArr.splice(index, 1);
        }
      }
    }
  }

  if (alphaArr.length === 0) {
    return true;
  } else {
    return false;
  }
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));

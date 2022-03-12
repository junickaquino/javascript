/*
    Using Hashmap
*/

let nums = [1, 5, 9];
let target = 10;

var map = {};
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    var value = nums[i];
    var complementPair = target - value;

    console.log(map[complementPair]);

    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
};
console.log(twoSum(nums, target));

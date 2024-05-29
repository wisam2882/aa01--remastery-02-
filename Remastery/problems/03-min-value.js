/*
Write a function `minValue(nums)` that takes in an array of numbers as an arg.
The function should return the smallest number of the array.

If the array is empty, the function should return `null`.
*/

// Your code here 


function minValue(nums) {
  if (nums == 0) {
    return null;
  }
  let max = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    if (max > char) {
      max = char;
    }
  }
  return max;
}



console.log(minValue([4,  , 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = minValue;
  } catch (e) {
    module.exports = null;
  }
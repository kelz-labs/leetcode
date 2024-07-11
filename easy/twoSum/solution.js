// WIP
var twoSum = function (nums, target) {
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j > i; j--) {
      temp.push(nums[j] + i);
    }
  }

  return temp;
};

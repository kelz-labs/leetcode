/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  const findIndex = nums.findIndex((item) => item === target);

  if (findIndex !== -1) return findIndex;
  else {
    nums.push(target);
    return nums
      .sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      })
      .findIndex((item) => item === target);
  }
}

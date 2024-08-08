/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
function solution(arr, fn) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

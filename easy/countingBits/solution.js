/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  return Array(n + 1)
    .fill(null)
    .map((_, index) => index)
    .map((item) => {
      const arr = item.toString(2).split("");

      if (arr.length >= 2) {
        return arr.reduce((a, b) => Number(a) + Number(b));
      } else {
        return Number(arr[0]);
      }
    });
}

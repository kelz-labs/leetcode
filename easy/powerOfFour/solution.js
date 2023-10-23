/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n < 4 && n !== 1) return false;
  let value = true;

  for (let i = 4; i <= n; i *= 4) {
    if (i === n) {
      value = true;
      break;
    } else {
      value = false;
    }
  }

  return value;
};

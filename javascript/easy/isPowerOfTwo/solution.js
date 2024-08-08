/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  if (n === 2 || n === 1) return true;

  let value = 1;

  for (let i = 0; i <= n; i += n) {
    if (i === n) {
      for (let j = 1; j <= i; j *= 2) {
        value = j;
      }

      break;
    }
  }

  return value === n ? true : false;
}

console.log(isPowerOfTwo(2));

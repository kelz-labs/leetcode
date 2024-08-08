/**
 * @param {number} n
 * @return {boolean}
 */
function solution(n) {
  if (n === 1 || n === 2) return true;

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

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
function solution(...args) {
  return [...args].length;
}

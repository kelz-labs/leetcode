/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xToStr = x.toString();
  let result = [];

  for (let i = xToStr.length - 1; i >= 0; i--) {
    result.push(xToStr[i]);
  }

  return result.join("") === xToStr;
};

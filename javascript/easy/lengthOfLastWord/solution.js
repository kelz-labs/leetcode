/**
 * @param {string} s
 * @return {number}
 */
function solution(s) {
  const splitWord = s.split(" ").filter((item) => item !== "");
  return splitWord[splitWord.length - 1].length;
}

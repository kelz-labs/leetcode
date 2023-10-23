/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const splitWord = s.split(" ").filter((item) => item !== "");
  return splitWord[splitWord.length - 1].length;
}

// Testing
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

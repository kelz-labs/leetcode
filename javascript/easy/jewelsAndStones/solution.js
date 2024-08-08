/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  let arr = [];

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i].includes(jewels[j])) {
        arr.push(stones[i]);
      }
    }
  }

  return arr.length;
}

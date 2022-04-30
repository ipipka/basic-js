/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 0, char = '';

  for(let i = 0; i< str.length; i++) {
    if(str[i] === char) {
      count++;
    } else {
      if (count) {
        res += count === 1 ? char : `${count}${char}`;
      }
      count = 1;
      char = str[i];
    }
  }

  if (count) {
    res += count === 1 ? char : count + char;
  }

  return res;
}

module.exports = {
  encodeLine
};

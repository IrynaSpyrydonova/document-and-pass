/**
 * This function takes a string to be encoded and a shift factor and then returns the encoded string
 * @param {string} str - a given string to be encoded
 * 
 * @param {number} amount - fixed number of positions down the alphabet
 * 
 * @returns {string} encoded string
 *
 * @example
 *
 * const strToEncode = caesar('Aaa', 1)
 * console.log(strToEncode); // 'Bbb'
 *
 */
const caesar = (str, amount) => {
  if (amount < 0) {
    return caesar(str, amount + 26);
  }
  let output = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += c;
  }
  return output;
};

module.exports = caesar;

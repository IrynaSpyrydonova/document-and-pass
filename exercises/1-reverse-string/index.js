/**
 * This function that returns its input, reversed
 *
 * @param {string} string - string to reverse
 * 
 * @returns {string}  reversed given string
 *
 * @example
 *
 * const stringToReverse = reverseString('hello there');
 * console.log(stringToReverse); // 'ereht olleh'
 *
 */
const reverseString = (str) => {
    return str.split("").reverse().join("");
}

module.exports = reverseString

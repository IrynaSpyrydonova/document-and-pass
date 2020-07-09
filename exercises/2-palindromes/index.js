/**
 * This function determines whether or not a given string is a palindrome
 *
 * @param {string} str - a given string to check
 * 
 * @returns {boolean} true or false
 *
 * @example
 *
 * const strToCheck = palindromes('Racecar!')
 * console.log(strToCheck); // true
 *
 */
const palindromes = (str) => {
    let regExp = /[\W_]/g;
    let lowStr = str.toLowerCase().replace(regExp, '');
    let reverseStr = lowStr.split('').reverse().join(''); 
    return reverseStr === lowStr;
};

module.exports = palindromes;

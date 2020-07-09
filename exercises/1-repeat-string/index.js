/**
 * This function repeats the string a given number of times
 *
 * @param {string} string - string to repeat
 * @param {number} num - how many times to repeat
 * @returns {string} new string, that repeats previous string given number of times
 *
 * @example
 *
 * const newString = repeatString('hey', 3);
 * console.log(newString); // 'heyheyhey'
 *
 */
const repeatString = (string, num) => {
    let result = '';
    if(num < 0){
    result = "ERROR";
    } else{
        for (let i = 0; i < num; i++){
        result += string;
        }  
    }
    return result;
}

module.exports = repeatString

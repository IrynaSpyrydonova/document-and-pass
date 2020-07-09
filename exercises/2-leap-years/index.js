/**
 * Thi function determines whether or not a given year is a leap years
 *
 * @param {number} year - a year to check
 * 
 * @returns {boolean} true or false 
 *
 * @example
 *
 * const year = leapYears(1997)
 * console.log(year); // false
 *
 */
const leapYears = function (year) {
    
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

module.exports = leapYears

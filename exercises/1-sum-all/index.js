/**
 * This function  takes 2 integers and returns the sum of every number between(and including) them.
 *
 * @param {number} start - number to start from to calculate
 * 
 * @param {number} end - number to end to calculate
 * 
 * @returns {number}  sum of all numbers between start and end
 *
 * @example
 *
 * const total = sumAll(1, 4);
 * console.log(total); // 10
 *
 */
const sumAll = (start, end) => {
    let sum = 0;
    if(start <= 0 || end <= 0 || typeof end !== "number" || typeof start !== "number") 
    {
        sum = 'ERROR'
    } else{
        let begin = start > end ? end : start;
        let finish = end < start ? start : end;
        for (let i = begin; i <= finish; i++) {
            sum += i;
        }
    }
    return sum;
}


module.exports = sumAll

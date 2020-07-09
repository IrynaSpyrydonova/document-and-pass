/**
 * This function removes the arguments from the given array
 *
 * @param {array} arr - array to remove from
 * @param {array} manyMoreArgs - arguments that have to be removed
 * @returns {array} new array, that doesn't include the arguments
 *
 * @example
 *
 * const newArr = removeFromArray([1, 2, 3, 4], 7, 2));
 * console.log(newArr); // [1, 3, 4]
 *
 */
const removeFromArray = (arr, ...manyMoreArgs) => {
    let newArr = [];
    for (const value of arr) {
        if(!manyMoreArgs.includes(value)){
            newArr.push(value);
        }
    }

    return newArr;
};

module.exports = removeFromArray

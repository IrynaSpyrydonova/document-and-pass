/**
 * This function  takes the array of objects and returns an array of specific properties of that objects
 *
 * @param {array} obj - array of objects
 * 
 * @returns {array} array of specific properties of the objects
 *
 * @example
 *
 * const titles = getTheTitles(books))
 * console.log(titles); // ['Book', 'Book2']
 *
 */
const getTheTitles = (obj) => {
    let result = obj.map(a => a.title);
    return result;
}

module.exports = getTheTitles;

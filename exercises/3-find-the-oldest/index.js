/**
 * This function takes an array of objects to be checked for conditions and returns the property value, that met the given conditions.
 * 
 * @param {array} arr - a given array of objects
 *  
 * @returns {string} property value of the object
 *
 * @example
 *
 * const personToFind = findTheOldest(people).name)
 * console.log(personToFind); // 'Ray'
 *
 */
let findTheOldest = function (arr) {
    debugger;
    let ages = arr.map(el => {
        let age = el.yearOfDeath == undefined ? new Date().getFullYear() - el.yearOfBirth : el.yearOfDeath - el.yearOfBirth;
        return age;
     })
     let index = ages.indexOf(Math.max(...ages));
     return arr[index];
}

module.exports = findTheOldest;

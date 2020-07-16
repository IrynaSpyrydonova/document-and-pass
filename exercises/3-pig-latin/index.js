/**
 * This function takes a string to be translated according to the "pig-latin" game rules and returns the translated string
 * @param {string} str - a given string to be translated
 * 
 * @returns {string} translated string
 *
 * @example
 *
 * const strToTranslate = translate(`eat pie`)
 * console.log(strToTranslate); // 'eatay iepay'
 *
 */
const translate = (str) => {
    const startsWithVowel = /^([aeiou])(.*)/g;
    const startsWithConsonant = /^([^aeiou]+)(.*)/g;
    const startsWithTwoConsonant = /^([^aeiou]+)$c{2}(.*)/g;
    const startsWithThreeConsonant = /^([^aeiou]+)$c{3}(.*)/g;
    const includeQu = /(qu+)(.*)/g;
    const startsWithConsonantAndQu = /^([^aeiou]+)(qu+)(.*)/g;
    
    let srtArr = str.split(' ');

    let newString = srtArr.map(item => {
        if (startsWithConsonantAndQu.test(item)){
            return item.replace(startsWithConsonantAndQu, (...args) => `${args[3]}${args[1]}${args[2]}ay`)
        }else if (includeQu.test(item)){
            return item.replace(includeQu, (...args) => `${args[2]}${args[1]}ay`)
        }else {
        return item
        .replace(startsWithVowel, (...args) => `${args[1]}${args[2]}ay`)
        .replace(startsWithConsonant, (...args) => `${args[2]}${args[1]}ay`)
        .replace(startsWithTwoConsonant, (...args) => `${args[2]}${args[1]}ay`)
        .replace(startsWithThreeConsonant, (...args) => `${args[2]}${args[1]}ay`);
        }
    } 
    );

    return newString.join(' ');
};

module.exports = translate;


/**
 * This function takes a string to convert phrases and words into snake case.
 * 
 * @param {string} str - a given string to be converted
 * 
 * @returns {string} converted string
 *
 * @example
 *
 * const strToConvert = snakeCase('This is the song that never ends....')
 * console.log(strToConvert); // 'this_is_the_song_that_never_ends'
 *
 */
const snakeCase = function (str) {

    if (str.charAt(2)===str.charAt(2).toUpperCase()){
        return str.replace(/\.+/g,'_').toLowerCase();
    }
    
    else{
        return str.replace(/[^a-zA-Z -]/g, "").replace(/[ -]/g, '_').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    }

}

module.exports = snakeCase

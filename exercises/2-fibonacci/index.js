/**
 * This function returns a specific number of the fibonacci sequence (every number after the first two is the sum of the two preceding ones)
 *
 * @param {number} n - index of element from Fibonacci sequence array
 * 
 * @returns {number} element with index n from our Fibonacci sequence array
 *
 * @example
 *
 * const fibSequence = fibonacci(6)
 * console.log(fibSequence); // 8
 *
 */
const fibonacci = (n) => {
    let arr = [0, 1];
    if (n < 0){
        return "OOPS";
    }
    for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
    }
    return arr[n]
}

module.exports = fibonacci

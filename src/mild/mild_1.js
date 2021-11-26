/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
 export function sumToString(a, b) {
    let x = a + b;
    return a + " + " + b + " = " + x;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let x = [];
    for (let i = 0; i <= endNumber-startNumber; i++) {
        x[i] = startNumber + i;
    }
    return x;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let maxAndMin = [];
    maxAndMin[0] = 1000000; // min number stored in 0
    maxAndMin[1] = 0; // max number stored in 1
    
    /* let maxN = Math.max(numbers);
    let minN = Math.min(numbers);
    let minMaxReturn = {
        min: minN,
        max: maxN
    } 
    */
   
   for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxAndMin[1]) { //max num
            maxAndMin[1] = numbers[i];
        }
        if (numbers[i] < maxAndMin[0]) { //min num
            maxAndMin[0] = numbers[i];
        }
    }
    //return Math.maxAndMin(maxAndMin);
     let minMaxReturn = {
        max: maxAndMin[1],
        min: maxAndMin[0],
    } 
    
    return minMaxReturn;
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    let keys = []; // keeps track of each unique value in array
    let count = []; // keeps track of the number of each value in array
    for (let i = 0; i < array.length; i++) { // loops though the array to check each piece
        let alreadyIn = false; // true if the value has already been added to keys[]
        let currentChecker = array[i]; // current key checker
        for (let k = 0; k < i; k++) { // loops through the array to check if the piece is already in the array
            if (currentChecker == array[k]) { // if the currentChecker is seen in the array before the checker's spot, it's already been counted.
                alreadyIn = true;
            }
        }
        if (!alreadyIn) { // if it's not already in the keys[], put the currentChecker value into the keys[].
            keys[i] = currentChecker;
        }
        for (let j = 0; j < array.length; j++) { // loops through the array again, compare each piece of the array to keys[].
            if (currentChecker == keys[j]) { // if the current checker piece is in the keys array (each will be at least once), add one to the count array.
                count[j] += 1;
            }
        } // by the end, the keys array should have one of each value (not in order)
    } // the count array should have the count of each value (same order as the keys array)
    let counter = new Object();
    for (let i = 0; i < keys.length; i++) { // loops through keys and count to create counter object
        let keyValue = keys[i]; // value in keys array stored in keyValue
        let countValue = count[i]; // value in count array stored in count value
        counter[keyValue]= countValue; // does this add the correct thing? idk
    }
}
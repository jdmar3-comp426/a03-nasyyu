import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * 2, 2, 2, 3, 4, 5, 5, 6, 7, 7
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    let median = 0;
    array = array.sort(function(a,b){
        return a-b;
    });
    function isOdd(num) { return num % 2;}
    let x = array.length;
    x = isOdd(x);
    if (x == 1) {
        //odd 
        median = array[array.length+1/2 - 1];
        // length is 7: 7+1 = 8/2 = 4 - 1 = 3
    } else {
        //even length
        let even1 = array[array.length/2-1];
        let even2 = array[array.length/2];
        median = even1+even2/2;
    }
    return median;
   /* for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < ordered.length; j++) {
            if (ordered[j] < array[i]) {
                ordered[i]
            }
        }
    }*/
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {

}


export function findMax(arr) {

    let max = arr[0]; // do this instead of max = 0; that way it starts with the first element!

    for (let i = 1; i < arr.length; i++) { // use 1 instead of 0 for i, or else its gonna error for another for loop!
        if (arr[i] > max) {               // (this is because the arr[] already starts at 0!)
            max = arr[i];
        }
    }

    return max;
}

// Had to use .map because raw method is too long and complex! ;(
export function reverseArray(arr) {

    return arr.map((_, index) => arr[arr.length - 1 - index]);
}
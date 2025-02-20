// importing the modules over to the main code!

import multiply, { add, subtract, addAndLogUpper, multiplyArr } from "./mathModule.js";
import { toUpperCase, toLowerCase } from "./stringModule.js";
import { findMax, reverseArray } from "./arrayModule.js";

// Calling the functions to the main code to console.log them:

console.log("Add: ", add(5, 10));
console.log("Subtract: ", subtract(5, 10));
console.log("Multiply: ", multiply(9, 9));

console.log("Uppercase: ", toUpperCase('friday'));
console.log("Lowercase: ", toLowerCase('MONDAY'));

console.log("Max Value in Array is: ", findMax([3, 5, 78 ,21 , 894, -4]));
console.log("Reversed Array is: ", reverseArray([3, 5, 78 ,21 , 894, -4]));

addAndLogUpper(10, 20); 
const max = findMax([3, 5, 78 ,21 , 894, -4]);
console.log("Array Max. x 5 is: ", multiplyArr(max, 5));
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let string1 = 'apple';
let string2 = 'orange';
let number1 = 10;
let number2 = 5;
let array = ['apple', 'banana', 'cherry'];
// Tests for equality and inequality with strings
console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 == string2);
console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 != string2);
// Tests using the lower case function
console.log("Is string1 equal to 'APPLE' in lowercase? I predict True.");
console.log(string1.toLowerCase() == 'apple');
// Numerical tests
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
console.log("Is number1 greater than number2 and number2 less than 10? I predict False.");
console.log(number1 > number2 && number2 < 10);
console.log("Is number1 greater than 5 or number2 less than 3? I predict True.");
console.log(number1 > 5 || number2 < 3);
// Test whether an item is in an array
console.log("Is 'banana' in the array? I predict True.");
console.log(array.includes('banana'));
// Test whether an item is not in an array
console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape'));

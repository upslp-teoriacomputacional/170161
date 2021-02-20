/* *****************************************************************************
 *  Name:    Christian Andres Martinez Alvarez
 *  NetID:   170161
 *  Precept: Regular Expressions
 *
 *  Description:  Reads a chracter and determines whether or not it fullfills a ReGex
 *
 *  Written:       20/02/2021
 *  Last updated:  20/02/2021
 *
 **************************************************************************** */
var str = prompt(
  "Please enter a lowercase character or a number from 0-9: ",
  "s"
);
const myRegex = /^[a-z0-9]$/;

const isValid = myRegex.test(str);
console.log(isValid);

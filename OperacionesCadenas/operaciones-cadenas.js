/* *****************************************************************************
 *  Name:    Christian Andres Martinez Alvarez
 *  NetID:   170161
 *  Precept: Regular Expressions
 *
 *  Description:  String Operations in JavaScript
 *
 *  Written:       27/02/2021
 *  Last updated:  27/02/2021
 *
 **************************************************************************** */
/*
# -*- coding: utf-8 -*-
"""
Created on Wed Feb 24 12:23:44 2021

@author: el_racional
"""
#Operaciones con cadenas
*/
const SingleQuotes = "JavaScript in Single Quotes";
const DoubleQuotes = "JavaScript in Double Quotes";

console.log(SingleQuotes);
console.log(DoubleQuotes);
var message = "Hello, JavaScript!";

console.log(message[7]);

//#Text            =   P Y T H O N
//# Positive Index =   0 1 2 3 4 5
//# Negative Index = -(6 5 4 3 2 1)

var TextJs = "PYTHON";
console.log(TextJs[3]);
TextJs = "PYTHON";
console.log(TextJs[-4]);
message = "Hello, JavaScript!";
console.log(message[7] + message[8] + message[9] + message[10]);

message = "    Welcome Python.  ";
console.log(message.trim());

message = "Welcome Python!";
console.log(message.toLowerCase());

message = "Python tutorial with dotnettechpoint.com";
console.log(message.toUpperCase());

message = "Welcome Python!";
console.log(message.length);

message = "Python with dotnettechpoint.com";
console.log(message.replace("Python", "Learn Python"));

message = "Python, tutorials, with, dotnettechpoint.com";
console.log(message.split(","));

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
message = "python tutorials with dotnettechpoint.com";
console.log(message.split(" ").map(capitalize).join(" "));

message = "python tutorials with dotnettechpoint.com";
console.log(message.charAt(0).toUpperCase() + message.slice(1));

message = "python tutorials with dotnettechpoint.com";
console.log(message.match("t"));

message = "Python tutorials with dotnettechpoint.com";
console.log(message.indexOf("with"));

message = "Python Tutorials";
console.log(message.split("").join(" "));

first_string = "Python";
last_string = "Tutorial";
console.log(first_string + " " + last_string);

first_string = "Python ";
middle_string = "3";
last_string = "Tutorial";
console.log(first_string + " " + middle_string + " " + last_string);

first_string = "Python ";
middle_string = 3;
last_string = "Tutorial";
console.log(first_string + " " + middle_string.toString() + " " + last_string);

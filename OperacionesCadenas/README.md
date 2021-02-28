## JavaScript Program to Illustrate Different Set Operations

## Source Code

```JavaScript

# - 170161-operaciones-cadenas.js *- coding: utf-8 -*-
"""
Regular Expression
# Program to evaluate a determined regular expression by comparing input from user.
# Find to similar command to other language
"""
/
const SingleQuotes = "JavaScript in Single Quotes"; //Declaracion de cadenas con comillas sencillas o dobles
const DoubleQuotes = "JavaScript in Double Quotes";

console.log(SingleQuotes); //Imprime las cadenas
console.log(DoubleQuotes);
var message = "Hello, JavaScript!"; //Declaramos un mensaje

console.log(message[7]);//Imprimimos la letra en ese mensaje

//#Text            =   P Y T H O N
//# Positive Index =   0 1 2 3 4 5
//# Negative Index = -(6 5 4 3 2 1)

var TextJs = "PYTHON"; //Imprime la letra en la posicion mandada
console.log(TextJs[3]);
TextJs = "PYTHON";
console.log(TextJs[-4]);//JS no maneja indices negativos, regresa undefined
message = "Hello, JavaScript!";
console.log(message[7] + message[8] + message[9] + message[10]);//Si queremos imprimir un rango de caracteres hay que concaternarlos de manera manual

message = "    Welcome Python.  ";
console.log(message.trim());//Quita los espacios en blanco

message = "Welcome Python!";//Pone minusculas
console.log(message.toLowerCase());

message = "Python tutorial with dotnettechpoint.com";
console.log(message.toUpperCase());//Pone mayusculas toda la cadena

message = "Welcome Python!";
console.log(message.length);//Imprime la longitud de la cadena

message = "Python with dotnettechpoint.com";
console.log(message.replace("Python", "Learn Python"));//Reemplaza la palabra por una nueva

message = "Python, tutorials, with, dotnettechpoint.com";
console.log(message.split(","));//Parte la cadena en donde haya comas

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);//Necesitamos una funcion para capitalizar la primera letra de cada cadena de caracteres
}
message = "python tutorials with dotnettechpoint.com";
console.log(message.split(" ").map(capitalize).join(" "));

message = "python tutorials with dotnettechpoint.com";
console.log(message.charAt(0).toUpperCase() + message.slice(1));//Indicamos la primera posicion para capitalizar, despues partimos la cadena a partir del caracter que se capitalizo y concatenamos

message = "python tutorials with dotnettechpoint.com";
console.log(message.match("t"));//Busca las concurrencias de t

message = "Python tutorials with dotnettechpoint.com";
console.log(message.indexOf("with"));//Busca el indice en el que se encuentra la palabra t

message = "Python Tutorials";
console.log(message.split("").join(" "));//Le agrega espacios en blanco a cada letra de la cadena

first_string = "Python";
last_string = "Tutorial";
console.log(first_string + " " + last_string); //Concatenacion

first_string = "Python ";
middle_string = "3";
last_string = "Tutorial";
console.log(first_string + " " + middle_string + " " + last_string); //Concatenacion con el 3 como string

first_string = "Python ";
middle_string = 3;
last_string = "Tutorial";
console.log(first_string + " " + middle_string.toString() + " " + last_string);//Concatenacion convirtiendo el 3 de numero a string

```

## Help - ?

Visit <a href="https://github.com/upslp-teoriacomputacional/170161/" target="\_blank"> (Programming graphs in JavaScri[t]).

<small>@170161<a href="https://github.com/170161" target="\_blank"></a> for the language support! </small>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

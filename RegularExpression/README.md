## JavaScript Program to Illustrate Different Set Operations

## Source Code

```JavaScript

# - 170161-regular-expression.js *- coding: utf-8 -*-
"""
Regular Expression
# Program to evaluate a determined regular expression by comparing input from user.
# Find to similar command to other language
"""
/
var str = prompt(
  "Please enter a lowercase word or a number from 0-9: ",
  "samplevalidword"
); //prompt es el metodo que tiene JavaScript para leer informacion por teclado.
const myRegex = /[a-z\d]/;//Declaramos la Regular Expression a evaluar para el caracter, en este caso es cualquier letra minuscula de la a-z o cualquier digito.

const isValid = myRegex.test(str);//evaluamos si coincide con lo que le pedimos al usuario
console.log(isValid);//Imprime falso o verdadero.


```

## Help - ?

Visit <a href="https://github.com/upslp-teoriacomputacional/170161/" target="\_blank"> (Programming graphs in JavaScri[t]).

<small>@170161<a href="https://github.com/170161" target="\_blank"></a> for the language support! </small>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

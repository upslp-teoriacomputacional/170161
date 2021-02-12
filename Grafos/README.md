## JavaScript Program to Illustrate Different Set Operations

## Source Code

```JavaScript

# - 170161-Conjuntos.js *- coding: utf-8 -*-
"""
Graphs Section
# Program to perform different graphs operations
# Find to similar command to other language
"""
/
function Dictionary() { //Primero creamos un diccionario. El diccionario es el que va a usar elnombre del vertice como llave y la lista de variables adyacentes como valor.
  var items = {};
  this.has = function (key) {//Metodo has del diccionario, sirve para determinar si un elemento se encuentra dentro del diccionario.
    return key in items;
  };

  this.set = function (key, value) {//Metodo set del diccionario, sirve para poner un valor en este caso al vertice
    items[key] = value;
  };

  this.remove = function (key) {//Metodo remove del diccionario, sirve para eliminar un vertice.
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function (key) { //Retorna el vertice en especifico que le digamos, si no encuentra nada, regresa un undefined
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function () {//Metodo del diccionario que regresa un arreglo con todos los valores dentro del diccionario.
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };

  this.getItems = function () {//Metodo que retorna la variable items, sirve para debuggear el diccionario.
    return items;
  };
}

function Graph() {//La funcion grafo
  var vertices = [];//Los vertices del grafo son inicializados como un arreglo vacio.
  var adjList = new Dictionary();//Declaramos un nuevo diccionario que va a contener las aristas de los vertices.

  this.addVertex = function (v) {//Funcion que agrega un vertice
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function (v, w) {//Funcion que agrega una arista
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = function () {//Sirve para poder imprimir en consola el grafo como texto, simplemente convierte el objeto en una cadena de texto
    var s = "";
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      var neighbors = adjList.get(vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };
}

var graph = new Graph();//Declaramos el grafo
var myVertices = ["a", "b", "c", "d", "e"];//Declaramos el arreglo de vertices que va a tener el grafo
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);//Los agregamos mediante un ciclo for al grafo
}

graph.addEdge("a", "c");//Ahora agregamos las aristas para cada elemento, nota que si tratamos de utilizar un valor que no fue declarado como vertice, va a arrojar error.
graph.addEdge("b", "c");
graph.addEdge("b", "e");
graph.addEdge("c", "d");
graph.addEdge("c", "e");
graph.addEdge("c", "a");
graph.addEdge("c", "b");
graph.addEdge("e", "b");
graph.addEdge("d", "c");
graph.addEdge("e", "c");

console.log(graph.toString());//Finalmente imprimimos en consola los valores.


```

## Help - ?

Visit <a href="https://github.com/upslp-teoriacomputacional/170161/" target="\_blank"> (Programming graphs in JavaScri[t]).

<small>@170161<a href="https://github.com/170161" target="\_blank"></a> for the language support! </small>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

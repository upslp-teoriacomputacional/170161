/* -*- coding: utf-8 -*-
"""
Created on Fri Feb 12 13:35:24 2021
@author: Christian Andres Martinez Alvarez 170161
"""

# JavaScript program for  
# validation of a graph 
*/

function Dictionary() {
  var items = {};
  this.has = function (key) {
    return key in items;
  };

  this.set = function (key, value) {
    items[key] = value;
  };

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function () {
    var values = [];
    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };

  this.getItems = function () {
    return items;
  };
}

function Graph() {
  var vertices = [];
  var adjList = new Dictionary();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = function () {
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

var graph = new Graph();
var myVertices = ["a", "b", "c", "d", "e"];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge("a", "c");
graph.addEdge("b", "c");
graph.addEdge("b", "e");
graph.addEdge("c", "d");
graph.addEdge("c", "e");
graph.addEdge("c", "a");
graph.addEdge("c", "b");
graph.addEdge("e", "b");
graph.addEdge("d", "c");
graph.addEdge("e", "c");

console.log(graph.toString());

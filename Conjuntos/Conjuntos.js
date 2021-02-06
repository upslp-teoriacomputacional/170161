// - 170161-conjuntos.js *- coding: utf-8 -*-
/*Program to perform different set operations like in mathematics
"""*/
//Find to similar command to other language

// define three sets
var set1 = new Set([1, 2, 3, 4, 5]);
var set2 = new Set([3, 4, 5, 6, 7]);
var set3 = new Set();

//#%%
//pertenencia
function pertenencia() {
  const A = new Set([1, 2, 3, 4, 5]);
  console.log(A.has(1));
  console.log(!A.has(1));
  console.log(A.has(10));
  console.log(!A.has(10));
}

//#%%
//Convertir a un conjunto
function transformarConj() {
  const A = [1, 2, 3];
  const conjuntoA = new Set(A); //Set()
  console.log("The set A is : ");
  console.log(conjuntoA);

  const B = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const conjuntoB = new Set();
  conjuntoB.add(B);
  console.log("The set B is : ");
  console.log(conjuntoB);

  const C = "Hola mundo";
  const conjuntoC = new Set(C);
  console.log("The set C is : ");
  console.log(conjuntoC);
}

//#%%
//Quitar un elemento al conjunto
function quitar() {
  const A = new Set([0, 1, 2, 3, 4, 5]);
  A.delete(2);
  console.log("The set C is : ");
  console.log(A);
}

//%%
//Quitar todos los elementos de un conjunto
function clearSet() {
  const A = new Set([0, 1, 2, 3, 4, 5]);
  A.clear();
  console.log(A);
}

//%%
//Copiar un conjunto
function copiar() {
  const A = new Set([1, 2, 3, 4, 5]);
  const B = A;
  console.log("Set A : ");
  console.log(A);
  console.log("Compare set B : ");
  console.log(B);
}

//#%%Agregar un elemento
function agregar() {
  set2.add(987);
  console.log("The new set B = ");
  console.log(set2);
}

/*#%%%
"""
Set Operations
"""
#%%
#Unión*/
//We need to create a function that fusions both sets so that we get the union set.
Set.prototype.union = function (otherSet) {
  // creating new set to store union
  let unionSet = new Set();

  // iterate over the values and add it to unionSet
  for (let elem of this) {
    unionSet.add(elem);
  }

  // iterate over the values and add it to the unionSet
  for (let elem of otherSet) unionSet.add(elem);

  return unionSet;
};
function union() {
  const A = new Set([1, 2, 3, 4, 5]);
  const B = new Set([3, 4, 5, 6, 7]);
  const unionSet = A.union(B);

  console.log("The union = ");
  console.log(unionSet.values());
}

//#%%
//#Interseccion
//Same as with union, we need a function to separate values from both sets.
Set.prototype.intersection = function (otherSet) {
  // creating new set to store intersection
  let intersectionSet = new Set();

  // Iterate over the values
  for (let elem of otherSet) {
    // if the other set contains a similar value as of value[i] then add it to intersectionSet
    if (this.has(elem)) intersectionSet.add(elem);
  }
  // return values of intersectionSet
  return intersectionSet;
};

function interseccion() {
  const A = new Set([1, 2, 3, 4, 5]);
  const B = new Set([3, 4, 5, 6, 7]);

  var intersectionSet = A.intersection(B);
  console.log("The intersection = ");
  console.log(intersectionSet.values());
}

//#%%
//#Diferencia
//Same as with the previous scenarios.
Set.prototype.difference = function (otherSet) {
  // creating new set to store difference
  let differenceSet = new Set();

  // iterate over the values
  for (let elem of this) {
    // if the value[i] is not present in otherSet add to the differenceSet
    if (!otherSet.has(elem)) differenceSet.add(elem);
  }
  // returns values of differenceSet
  return differenceSet;
};

function diferencia() {
  const A = new Set([1, 2, 3, 4, 5]);
  const B = new Set([3, 4, 5, 6, 7]);
  const differenceSet = A.difference(B);

  console.log("The difference : ");
  console.log(differenceSet);
  console.log("The intersection : ");
  console.log(A.difference(B));
}

//#%%
//#Diferencia simetrica
function simetrica() {
  const A = new Set([1, 2, 3, 4, 5]);
  const B = new Set([3, 4, 5, 6, 7]);
  const C = new Set();

  const symmetricSet = A.difference(B);
  console.log("The symmetric_difference : ");
  console.log(symmetricSet);

  const symmetricSet2 = B.difference(A);
  console.log("The symmetric_difference : ");
  console.log(symmetricSet2);

  const symmetricSet3 = A.difference(C);
  console.log("The symmetric_difference : ");
  console.log(symmetricSet3);

  const symmetricSet4 = B.difference(C);
  console.log("The symmetric_difference : ");
  console.log(symmetricSet4);
}

//#%%
//#Subconjunto
Set.prototype.subSet = function (otherSet) {
  // if size of this set is greater than otherSet then it can't be a subset
  if (this.size > otherSet.size) return false;
  else {
    for (var elem of this) {
      // if any of the element of this is not present in the otherset then return false
      if (!otherSet.has(elem)) return false;
    }
    return true;
  }
};

function subconjunto() {
  const B = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const A = new Set([1, 2, 3, 4, 5]);

  console.log("The subset : ");
  console.log(A.subSet(B));

  console.log("The subset : ");
  console.log(B.subSet(A));
}

//%%
//Superconjunto
Set.prototype.superSet = function (otherSet) {
  // if size of this set is lesser than otherSet then it can't be a superset
  if (this.size > otherSet.size) return true;
  else {
    for (var elem of this) {
      // if any of the element of this is not present in the otherset then return false
      if (!otherSet.has(elem)) return false;
    }
    return false;
  }
};
function superconjunto() {
  const B = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const A = new Set([1, 2, 3, 4, 5]);

  console.log("The superset : ");
  console.log(B.superSet(A));

  console.log("The superset : ");
  console.log(A.superSet(B));
}

pertenencia();
transformarConj();
quitar();
clearSet();
copiar();
agregar();
union();
interseccion();
diferencia();
simetrica();
subconjunto();
superconjunto();

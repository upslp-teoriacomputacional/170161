## JavaScript Program to Illustrate Different Set Operations

  <li>1. In this example, we have defined two set variables and we have performed different set operations: union, intersection, difference and symmetric difference.,  </li>
  <li>2. To understand this example, you should have the knowledge of the following JavaScript programming topics:  </li>
  <li>3. JavaScript Sets  </li>
  <li>4. JavaScript Input, Output and Import  </li>
  <li>JavasScript offers a datatype called set whose elements must be unique. It can be used to perform different set operations like union, intersection, difference and symmetric difference. </li>

</ol>
Aside: This problem arose during some consulting I was doing, where the integers represented the sizes of different software jobs, and the quadratic term is there because the cost of implementing software goes up faster than linearly with the size of the job. 
<p></p>

## Source Code

```JavaScript

# - 170161-Conjuntos.js *- coding: utf-8 -*-
"""
Set Section
# Program to perform different set operations like in mathematics
# Find to similar command to other language
# Rust, F# and Perl
"""

# define three sets
global set1
global set2
global set3

var set1 = new Set([1, 2, 3, 4, 5]);
var set2 = new Set([3, 4, 5, 6, 7]);
var set3 = new Set();

console.log("The set A is : ");
console.log(conjuntoA);
console.log("The set B is : ");
console.log(conjuntoB);
console.log("The set C is : ");
console.log(conjuntoC);


#%%
#Remove an item from the set
function quitar() {
  const A = new Set([0, 1, 2, 3, 4, 5]);
  A.delete(2);
  console.log("The set C is : ");
  console.log(A);
}

#%%
#Remove all items from the set
function clearSet() {
  const A = new Set([0, 1, 2, 3, 4, 5]);
  A.clear();
  console.log(A);
}

#%%
#Copy a set
function copiar() {
  const A = new Set([1, 2, 3, 4, 5]);
  const B = A;
  console.log("Set A : ");
  console.log(A);
  console.log("Compare set B : ");
  console.log(B);
}

#%%Add an item
function agregar() {
  set2.add(987);
  console.log("The new set B = ");
  console.log(set2);
}
#%%%
"""
Set Operations
"""
#%%
#Union
function union() {
  const A = new Set([1, 2, 3, 4, 5]);
  const B = new Set([3, 4, 5, 6, 7]);
  const unionSet = A.union(B);

  console.log("The union = ");
  console.log(unionSet.values());
}
#%%
#Intersection
Set.prototype.intersection = function (otherSet) {
  let intersectionSet = new Set();

  for (let elem of otherSet) {
    if (this.has(elem)) intersectionSet.add(elem);
  }
  return intersectionSet;
};

function interseccion() {
  const A = new Set([1, 2, 3, 4, 5]);
  const B = new Set([3, 4, 5, 6, 7]);

  var intersectionSet = A.intersection(B);
  console.log("The intersection = ");
  console.log(intersectionSet.values());
}

#%%
#Diference
Set.prototype.difference = function (otherSet) {
  let differenceSet = new Set();

  for (let elem of this) {
    if (!otherSet.has(elem)) differenceSet.add(elem);
  }
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

#%%
#Symmetric difference
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

#%%
#Subset
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

#%%
#Superset
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


```

## Help - ?

In this program, we take two different sets and perform different set operations on them. This can equivalently done by using set methods.
<small> <a href="" target="\_blank">@</a> for this feature!</small>

Visit <a href="https://github.com/upslp-teoriacomputacional/170161/" target="\_blank"> (Programming set in JavaScri[t]).

<small>@170161<a href="https://github.com/170161" target="\_blank"></a> for the language support! </small>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

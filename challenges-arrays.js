/**
 * The sum of a range
 * 
 * Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
 Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
 Run the example program and see whether it does indeed return 55.
 As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
 If no step is given, the elements go up by increments of one, corresponding to the old behavior.
 The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
 Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

function range(start, end, step) {
  let array_range = [];
  if (start >= end) {
    for (var i = start; i >= end; i += step) {
      array_range.push(i);
    }
  } else {
    for (var j = start; j <= end; j += step) {
      array_range.push(j);
    }
  }
  return array_range;
}

function sum(array_range) {
  let total_sum = 0;
  for (let index = 0; index < array_range.length; index++) {
    total_sum += array_range[index];

  }
  return total_sum;
}

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));

//Reverse array
function reverseArray(numbers) {
  let arrReversed = [];
  for (let index = numbers.length - 1; index >= 0; index--) {
    arrReversed.push(numbers[index]);
  }
  return arrReversed;
}

function reverseArrayInPlace(arrReversedAgain) {
  let arrRevInPlace = [];
  for (let index = arrReversedAgain.length - 1; index >= 0; index--) {
    arrRevInPlace.push(arrReversedAgain[index]);
  }
  return arrRevInPlace;
}

console.log(reverseArray([1, 2, 3, 4]));

console.log(reverseArrayInPlace(reverseArray([1, 2, 3, 4])));


/*
***** A LIST ******
Objects, as generic blobs of values, can be used to build all sorts of data structures. 
A common data structure is the list (not to be confused with the array). A list is a nested set of objects, 
with the first object holding a reference to the second, the second to the third, and so on.

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

A linked list
A nice thing about lists is that they can share parts of their structure. 
For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier),
 they are both independent lists, but they share the structure that makes up their last three elements.
  In addition, the original list is also still a valid three-element list.

Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, 
and write a listToArray function that produces an array from a list. Also write the helper functions prepend,
 which takes an element and a list and creates a new list that adds the element to the front of the input list,
  and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(array) {
  let list = null;
  for (let index = array.length - 1; index >= 0; index--) {
    list = { value: array[index], rest: list };
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

function nth(list, number) {
  return listToArray(list)[number];
}

function nthRecursive(list, number) {
  if (number === 0) {
    return list.value;
  } else if (list.rest === null) {
    return undefined;
  } else {
    return nthRecursive(list.rest, number - 1);
  }
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));


/**
 * **** Deep Comparison ****
 * 
 * The == operator compares objects by identity. 
 * But sometimes you’d prefer to compare the values of 
 * their actual properties.
 * Write a function deepEqual that takes two values and returns true only 
 * if they are the same value or are objects with the same properties,
 * where the values of the properties are equal when compared with 
 * a recursive call to deepEqual.
 * To find out whether values should be compared directly 
 * (use the === operator for that) or have their properties compared,
 * you can use the typeof operator. 
 * If it produces "object" for both values, you should do a deep 
 * comparison. But you have to take one silly exception into account:
 * because of a historical accident, typeof null also produces "object".
 * The Object.keys function will be useful when you need to go over 
 * the prop- erties of objects to compare them.

 */

let deepEqual = (value1, value2) => {
  if (value1 === value2) return true;
  if (value1 == null || typeof value1 != 'object'
    || value2 == null || typeof value2 != 'object') return false;

  let objectKeys1 = Object.keys(value1), objectKeys2 = Object.keys(value2);
  if (objectKeys1.length != objectKeys2.length) return false;
  for (let key of objectKeys2) {
    if (!objectKeys1.includes(key) || !deepEqual(value1[key], value2[key])) return false;
  }
  return true;
}

const objectA = {
  name: 'Peter',
  age: 24,
  personal_tastes: ['coconut, strawberry, peaches']
}
const objectB = {
  name: 'Derek',
  age: 25,
  personal_tastes: ['watermelon', 'melon', 'popcorn']
}

const objectC = {
  name: 'Peter',
  age: 24,
  personal_tastes: ['coconut, strawberry, peaches']
}

const array1 = [1, 2, 3];
const array2 = [1, 3, 2];
const array3 = [1, 2, 3];


console.log(deepEqual(3, 2)); //false
console.log(deepEqual(3, 3)); //true
console.log(deepEqual(array1, array2)); //false 
console.log(deepEqual(array1, array3)); //true
console.log(deepEqual(objectA, objectB)); //false
console.log(deepEqual(objectA, objectC)); //true
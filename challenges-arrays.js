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

function sum(array_range){
    let total_sum = 0;
    for (let index = 0; index < array_range.length; index++) {
         total_sum += array_range[index];

    }
    return total_sum;
}

console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));

//Reverse array
function reverseArray(numbers){
    let arrReversed = [];
    for (let index = numbers.length - 1; index >= 0; index--) {
         arrReversed.push(numbers[index]);
    }
    return arrReversed;
}

function reverseArrayInPlace(arrReversedAgain){
    let arrRevInPlace = [];
    for (let index = arrReversedAgain.length - 1; index >= 0; index--) {
        arrRevInPlace.push(arrReversedAgain[index]);
    }
    return arrRevInPlace;
}

console.log(reverseArray([1,2,3,4]));

console.log(reverseArrayInPlace(reverseArray([1,2,3,4])));


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

  function nth(list, number){
      return listToArray(list)[number];
  }

  function nthRecursive(list, number) {
    if (number === 0) {
      return list.value;
    } else if (list.rest === null) {
      return undefined;
    } else {
      return nthRecursive(list.rest, number-1);
    }
  }

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

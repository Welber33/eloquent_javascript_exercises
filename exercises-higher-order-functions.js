/**
 * Flattening
Use the reduce method in combination with the concat method to “flatten” 
an array of arrays into a single array that has all the elements of the 
original arrays.
*/

const array_of_arrays = [[1, 2, 3], [4, 5, 6], [7, 8]];

console.log(array_of_arrays.reduce(function (flatten, currentValue) {
    return flatten.concat(currentValue);
}));

/**
 * Your own loop
Write a higher-order function loop that provides something like a for 
loop statement. It takes a value, a test function, an update function,
and a body function. Each iteration, it first runs the test function on
the current loop value and stops if that returns false. Then it calls 
the body function, giving it the current value. Finally, it calls the 
update function to create a new value and starts from the beginning.
When defining the function, you can use a regular loop to do the actual 
looping.
 */

//Using recursion
function myOwnLoop(value, test, update, body) {
    if (!test(value)) return;
    body(value);
    return myOwnLoop(update(value), test, update, body);
}

myOwnLoop(5, n => n > 0, n => n - 1, console.log);

/**
 * Analogous to the some method, arrays also have an every method.
 * This one returns true when the given function returns true for
 * every element in the array. In a way, some is a version of the ||
 * operator that acts on arrays, and every is like the && operator.
 * Implement every as a function that takes an array and a predicate
 * function as parameters. Write two versions, one using a loop and one
 *  using the some method.
 */

function every(array, test) {
    for (let element of array) {
        if (!test(element)) return false;
    }
    return true;
}

const arrayElements = [1, 2, 3, 4, 5];
console.log(every(arrayElements, n => n < 5));


function everyWithSome(array, test) {
    return array.some(test);
}

console.log(everyWithSome([2, 4, 16], n => n < 10));
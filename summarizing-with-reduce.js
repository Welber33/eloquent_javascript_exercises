/**
 * Summarizing with reduce
Another common thing to do with arrays is to compute a single value from
them. Our recurring example, summing a collection of numbers, 
is an instance of this. Another example is finding the script with the
most characters.
The higher-order operation that represents this pattern is called reduce
(some- times also called fold). It builds a value by repeatedly taking 
a single element from the array and combining it with the current value.
When summing num- bers, you’d start with the number zero and, for each
element, add that to the sum.
The parameters to reduce are, apart from the array, a combining function
and a start value. This function is a little less straightforward than 
filter and map, so take a close look at this function:
 */

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

const sumArray = [2, 3, 5];
console.log(reduce(sumArray, (a, b) => a + b, 0))

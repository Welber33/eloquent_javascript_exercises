/**
 * Higher-order functions allow us to abstract over actions, 
 * not just values. They come in several forms. 
 * For example, we can have functions that create new functions.
 */

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
console.log(greaterThan10(8))

//Functions that change other functions
function noisy(f) {
    return (...args) => {
        console.log("Calling with", args);
        let result = f(...args);
        console.log("Called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);

/**
 * Functions that provides new types of control flow 
 */

function repeat(n, action) {
    for (let index = 0; index < n; index++) {
        action(index);

    }
}
function unless(test, then) {
    if (!test) then();
}

repeat(5, n => {
    unless(n % 2 == 1, () => {
        console.log(n, " is even");
    });
});

/**
 * There is a built-in array method, forEach, that provides something
 *  like a for/of loop as a higher-order function.
 */

["A", "B"].forEach(l => console.log(l));
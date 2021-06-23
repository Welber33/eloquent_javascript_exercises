/**
 * Functions
 */

/** 
 * functions with return statement and one param
*/
const square = function (x) {
    return x * x;
}
console.log(square(2));

/**
 * Functions with empty statement
 */
const makeNoise = function () {
    console.log('Pling!!!');
}
makeNoise();

/**
 * Functions with two params
 */
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 3));

/**
 * Global and local bindings
 */
const halv = function (n) {
    return n / 2;
}
let n = 10;
console.log(halv(100));

/**
 * Blocks and Functions created inside
 * another blocks and functions producing multiples degrees 
 * of locality.
 * For example, this function—which outputs the ingredients
 * needed to make a batch of hummus—has
 * another function inside it:
 */
const hummus = function (factor) {
    const ingridient = function (amount, unit, name) {
        let ingridientAmount = amount * factor;
        if (ingridientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingridientAmount} ${unit} ${name}`)
    }
    ingridient(1, 'can', 'chickpeas');
    ingridient(0.25, 'cup', 'tahini');
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}

/**
 * Other example of functions executions
 */

function future() {
    console.log("there will never be flying cars");
}
future();

/**
 * Arrow functions
 */

const power2 = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 4));

//empty param arrow function
const sentence = () => {
    console.log('this is a test of arrow functions');
}
sentence();

const square1 = (x) => {
    return x * x;
}
console.log(square1(3));

const square2 = x => x * x;
console.log(square2(2));

/**
 * The call stack
 */
function greeting(who) {
    console.log('Hello ' + who);
}
greeting('Harry');
console.log('Bye');

/**
 * Optional Arguments
 */
const minusOp = (x, y) => {
    if (y == undefined) {
        return -x;
    } else {
        return x - y;
    }
}
console.log(minusOp(2));
console.log(minusOp(10, 5));

/**
 * Recursion
 */

const power3 = (base, exponent) => {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power3(base, exponent - 1);
    }
}
console.log(power3(2, 4));


function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(10));


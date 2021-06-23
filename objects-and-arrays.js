/**
 * ** Data Structures: Objects and Arrays **
 * Data Sets
 * Properties
 * Methods
 * Objects
 */

// Data Sets

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[3 - 2]);

/**
 * Properties
 *  Almost all JavaScript values have properties. The exceptions are null and undefined.
 * */

//null.length;

/**
 * Methods
 * Both string and array objects contain, in addition to the length property,
 * a number of properties that hold function values.
 */
let doh = 'DoH';
console.log(typeof doh);
console.log(doh.toUpperCase());

//This example demonstrates two methods you can use to manipulate arrays:
let sequence = [1, 2, 4];
sequence.push(5);
sequence.push(8);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

/**
 * Objects
 * Values of the type object are arbitrary collections of properties. 
 * One way to create an object is by using braces as an expression.
 */
let day1 = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'running']
};
console.log(day1.events[2]);
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "Touched tree": "touched tree"
};
let anObject = { left: 1, right: 2 };
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log('left' in anObject);
console.log('right' in anObject);

console.log(Object.keys({ x: 1, y: 2, z: 3 }));
/**
 * There’s an Object.assign function that copies 
 * all properties from one object into another.
 */

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);

//Array of objects
let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    },
    /* and so on... */
];

console.log(journal);

//Accessing first event
console.log(journal[1]);

//Accessing just events of journal[1]
console.log(journal[1].events);

//accessing just events of journal[2]
console.log(journal[2].events);

let journal1 = [];

function addEntry(events, squirrel) {
    journal1.push({
        events,
        squirrel
    });
}

addEntry(["Job", "Cathalog", "Pizza"], false);
addEntry(["Fernan", "Astin", "Weekend"], true);

console.log(journal1[1]);

function range(start, end, step) {
    let startToEnd = [];
    step = (arguments[2] || 1); // If the step argument wasn't passed, set it equal to 1
    if (start <= end) {
        for (var i = start; i <= end; i += step) {
            startToEnd.push(i);
        }
    }
    else {
        for (i = start; i >= end; i += step) {
            startToEnd.push(i);
        }
    }

    return startToEnd;
}

function sum(numbers) {
    let total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum(range(4, 1, -1)));
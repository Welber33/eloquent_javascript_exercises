// **** Exercises of filtering in an array ****

/**
 * Finding numbers bigger than 10
 * @param {num} num 
 * @returns num
 */
function isBigEnough(num) {
    return num >= 10;
}

let array = [1, 2, 22, 7, 14];

console.log(array.filter(isBigEnough));


/**
 * Finding prime numbers in an array
 */
function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;
        }
    }
    return num > 1;
}

const array_numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(array_numbers.filter(isPrime));


/**
 * Filtering invalid entries from JSON
 * Testing with arrow function
 */
let invalidEntriesJSON = (object) => {
    let invalidEntries = 0;
    if (Number.isFinite(object.id) && object.id != 0
        && object.id > 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

let objectJSON = [
    { id: 1 },
    { id: 0 },
    { id: -1 },
    { id: -2 },
    { id: 11 },
    { id: 22 }
]

console.log(objectJSON.filter(invalidEntriesJSON));

/**
 * Searching in array
 */

function searchInArray(array, query) {
    return array.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}

let arrayElements = ['pineapple', 'avocado', 'mango', 'bread', 'banana', 'cheese', 'rice'];

console.log(searchInArray(arrayElements, 'ea'));


/**
 * Affeting initial array(deleting, appending, modifying) 
 */

//Modifying each words
const modifiedWords = words.filter((word, index, arr) => {
    arr[index + 1] += ' extra'
    return word.length < 6
})
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

console.log(modifiedWords);


// Appending new words
const appendedWords = words.filter((word, index, arr) => {
    arr.push('new')
    return word.length < 6
})

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
console.log(appendedWords);

// Deleting words
const deleteWords = words.filter((word, index, arr) => {
    arr.pop()
    return word.length < 6
})

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
console.log(deleteWords);

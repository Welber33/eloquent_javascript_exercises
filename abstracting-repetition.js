//Writting a function that calls console.log N times

//Function printing index with normal console.log call
function repeat(n) {
    for (let index = 0; index < n; index++) {
        console.log(index);
    }
}

console.log(repeat(5));

//Repeat something other than logging values
function repeat2(n, action) {
    for (let index = 0; index < n; index++) {
        action(index);
    }
}

repeat2(3, console.log);

/*
* We don’t have to pass a predefined function to repeat.
 Often, it is easier to create a function value on the spot instead.
*/
let lables = [];
repeat2(4, i => {
    lables.push(`Unit ${i + 1}`);
});

console.log(lables);


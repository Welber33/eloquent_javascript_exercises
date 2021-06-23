let number = 0;
while (number <= 12) {
    console.log(number);
    number += 2;
}
number = 4;
do {
    console.log(number);
    number += 4;
} while (number < 12);

let two = 2;
let multiplier = 0;
while (multiplier <= 10) {
    console.log(two + "x" + multiplier + "= " + two * multiplier);
    multiplier += 1;
}

let result = 1;
for (let counter = 0; counter < 15; counter = counter + 1) {
    result = result * 2;
}
console.log(result);

for (let current = 20; ; current = current + 1) {
    if (current % 8 == 0) {
        console.log(current);
        break;
    }
}

//CHALLENGES

/* LOOPING TRIANGLE
 Write a loop that makes seven calls to console.log
 to output the following triangle:
#
##
###
####
#####
######
#######
 */
let string = "#";
while(string.length <= 7){
    console.log(string)
    string += "#";
}

/**
 * CHESSBOARD
 * Write a program that creates a string that represents an 8×8 grid,
 *  using newline characters to separate lines.
 *  At each position of the grid there is either a space or a "#" character.
 *  The characters should form a chessboard
 * Passing this string to console.log 
 * should show something like this:
 # # # #
# # # #
 # # # # 
# # # #
 # # # # 
# # # #
 # # # # 
# # # #
 */
let chessboard = "########";
let nextLine = 1;
while(nextLine <= 8){
    if(nextLine % 2 != 0){
        console.log(' ' + chessboard.split('').join(' '));
        nextLine += 1;
    }else{
        console.log(chessboard.split('').join(' '));
        nextLine += 1;
    }
   
}
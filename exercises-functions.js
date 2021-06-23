/**
 * Exercises
 */

/**
 * **** Minimum ****
 * Write a function min that takes two arguments 
 * and returns their minimum.
 */

const minimum = (a, b) => {
    return Math.min(a, b);
}
console.log(minimum(3, 4));

/**
 * **** Recursion ****
 * We’ve seen that % (the remainder operator) can be used to test 
 * whether a number is even or odd by using % 2 to see
 *  whether it’s divisible by two. 
 * Here’s another way to define whether a positive
 *  whole number is even or odd:
 * • Zero is even.
 * • One is odd.
 * • For any other number N, its evenness is the same as N - 2.
 * Define a recursive function isEven corresponding to this description.
 * The function should accept a single parameter 
 * (a positive, whole number) and return a Boolean.
 */

function isEven(number) {
    number = Math.abs(number);
    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}
console.log(isEven(-1));

/**
 * **** Bean counting ****
 * You can get the Nth character, or letter, from a string 
 * by writing "string"[N]. The returned value will be
 * a string containing only one character 
 * (for example, "b"). The first character has position 0,
 * which causes the last one to be found at position 
 * string.length - 1. In other words, a two-character string 
 * has length 2, and its characters have positions 0 and 1.
 * Write a function 'countBs' that takes a string as its only 
 * argument and returns a number that indicates how many 
 * uppercase “B” characters there are in the string.
 */

function countBs(string){
    let numUpper = 0;
    for (let count = 0; count < string.length; count++) {
        if (string.charAt(count) == 'B') {
            numUpper += 1;
        }
    }
    return numUpper;
}

console.log(countBs('Bruno'));


/**
 * write a function called countChar that behaves like countBs,
 *  except it takes a second argument that indicates the 
 * character that is to be counted 
 * (rather than counting only uppercase “B” characters).
 *  Rewrite countBs to make use of this new function.
 */
const countBs1 = (string) =>{
    let numUpper = 0, count = 0;
    const countChar = (charCounted) =>{
        while(count < string.length){
            if(string.charAt(count) == charCounted){
                numUpper +=1;
            }
            count +=1;
        }
        
    }
    countChar('S');
    return numUpper;
}

console.log(countBs1('claSsic'));
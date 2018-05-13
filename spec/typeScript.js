"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//// Define a function, that takes string as argument and prints "Hello, %arg%!"
function enter1(arg) {
    return "Hello, %" + arg + "%!";
}
exports.enter1 = enter1;
/// Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4])
// should return 24.
function sum(arg) {
    return arg.reduce(function (lastValue, curr) { return lastValue + curr; });
}
exports.sum = sum;
function multiply(arg) {
    return arg.reduce(function (lastValue, curr) { return lastValue * curr; });
}
exports.multiply = multiply;
/// Define a function reverste() that computes the reversal of a string.
// For example, reverse("I am testing") should return the string "gnitset ma I".
function reverse(str) {
    return str.split('').reverse().join('');
}
exports.reverse = reverse;
// Define a function isPalindrome() that recognizes palindromes (i.e. words that look the same written backwards).
// For example, isPalindrome("radar") should return True.
function isPalindrome(str) {
    return str.split('').reverse().join('').toLocaleLowerCase() === str.toLocaleLowerCase();
}
exports.isPalindrome = isPalindrome;
// Define a procedure histogram() that takes an array of integers and prints a histogram to the screen.
// For example, histogram([4, 9, 7]) should print the following:
function histogram(arr) {
    arr.forEach(function (val) {
        console.log("*".repeat(val));
    });
}
//USAGE
//histogram([3,4,5]);
// Define a function caesarCipher that takes string and key(number), whuch returns encrypted string
function caesarCipher(str, key) {
    if (key > 26)
        key = key % 26;
    return str.toLocaleLowerCase().split('').map(function (val) {
        return String.fromCharCode((val.charCodeAt(0) + key) > 122 ? val.charCodeAt(0) + key - 26 :
            val.charCodeAt(0) + key); // 122 is 'z' so if charCode more than 122 we need to circle it by subtracting 26
    }).join('');
}
exports.caesarCipher = caesarCipher;
// define a function diagonalReverse() that takes matrix and returns diagonal-reversed one:
function diagonalReverse(arr) {
    var result = [];
    arr.forEach(function (innerArr, i) {
        var tempArr = [];
        innerArr.forEach(function (val, j) {
            tempArr.push(arr[j][i]);
        });
        result.push(tempArr);
    });
    return result;
}
exports.diagonalReverse = diagonalReverse;
//USAGE
//console.log(diagonalReverse([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]));
// Write a function game() number-guessing game, that takes 2 int parameters defining the range.
// Using some kind of random function to generate random int from the range.
// While user input isn't equal that number, print "Try again!". If user guess the number, congratulate him and exit.
/*
function game(param1:number, param2:number):void {
    if (param1 - Math.floor(param1) !== 0 || param2 - Math.floor(param2) !== 0) return;
    let random = Math.floor(Math.random() * (param2 - param1 + 1) + param1);
    let userAnswer = +prompt("Enter number");
    while (random !== userAnswer) {
        console.log('Try again!');
        userAnswer = +prompt("Enter number");
    }
    console.log('Gratz!');
}
let param1 = +prompt('Enter min value');
let param2 = +prompt('Enter max value');
*/
//USAGE
//game(param1, param2);
//Define a function, which takes a string with N opening brackets ("[") and N closing brackets ("]"),
// in some arbitrary order.
// Determine whether the generated string is balanced; that is,
// whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest
function brackets(str) {
    var arr = str.split('');
    while (arr.length > 1 && arr[0] !== ']' && arr[arr.length - 1] !== '[') { //find pair '[]' and delete it from array
        arr.splice(0, 1);
        arr.splice(arr.indexOf(']'), 1);
    }
    return arr.length === 0 ? 'OK' : 'NOT OK';
}
exports.brackets = brackets;
//USAGE
//console.log(brackets('[[]][]][]]][]'))
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
// Represent the frequency listing as a Python dictionary.
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq(str) {
    var result = {};
    str.toLocaleLowerCase().split('').forEach(function (val) {
        result[val] ? result[val] += 1 : result[val] = 1;
    });
    return result;
}
exports.charFreq = charFreq;
// Write a function decToBin() that taces decimal integer and outputs its binary representation.
// USING NATIVE FUNCTION
function decToBin(int) {
    if (Math.floor(int) - int !== 0 && int >= 1)
        return;
    return int.toString(2);
}
// WITHOUT NATIVE FUNCTION
function decBin(int) {
    if (Math.floor(int) - int !== 0 && int >= 1)
        return;
    if (int === 1)
        return '1';
    var str = '';
    while (int / 2 >= 1) { //default way using remainder of division to convert from decimal
        str += (int % 2);
        int = Math.floor(int / 2);
        if (int === 1)
            str += 1;
    }
    return str.split('').reverse().join('');
}
exports.decBin = decBin;
//USAGE
//console.log(decBin(123));
//Write a ship battle game, which is similar to ex.8, except it takes 1 integer as an order of matrix,
// randomly generates index (x, y) and checks user input (2 integers).
// hard task: Visualize the game.
/*
function shipBattle():void {
    let matrixOrder:number = +prompt('Enter matrix order');
    let matrix:number[][] = genMatrix(matrixOrder);
    let index:number = Math.floor(Math.random() * matrixOrder**2);
    let userAnswer:string = prompt('Enter coordinates of ship separated by comma e.g. 1,1');
    let splittedCoords:number[] = userAnswer.split(',').map(val => +val);
    while (matrix[index][0] !== splittedCoords[0] || matrix[index][1] !== splittedCoords[1]) {
        userAnswer = prompt('Try again! e.g. 1,1');
        splittedCoords = userAnswer.split(',').map(val => +val);
    } //if only both coords are match loop breaks (only false || false ends loop);
    console.log('Gratz! You find a ship!')
}
function genMatrix(order:number):number[][] {
    let result:number[][] = [];
    for (let i = 1; i <= order; i++) {
        for (let j = 1; j <= order; j++) {
            result.push([i,j]);
        }
    }
    return result
}
*/
// USAGE
// shipBattle();

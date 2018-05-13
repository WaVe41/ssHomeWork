import * as tsFunc from "./typeScript";

describe("Testing enter1 function", function() {
    it("says hello", function () {
        expect(tsFunc.enter1('me')).toEqual("Hello, %me%!");
    });
});

describe("Testing sum function", function() {
    it("return sum of array.Numbers", function () {
        expect(tsFunc.sum([1, 2, 3])).toEqual(6);
    });
});

describe("Testing multiply function", function() {
    it("return mul of arrayNumbers", function () {
        expect(tsFunc.multiply([1, 2, 3, 4])).toEqual(24);
    });
});

describe("Testing reverse function", function() {
    it("return reverse string", function () {
        expect(tsFunc.reverse('sucre')).toEqual('ercus');
    });
});

describe("Testing Palindrome function", function() {
    it("return boolean is string is Palindrome", function () {
        expect(tsFunc.isPalindrome('akka')).toEqual(true);
    });
    it("return boolean is string is Palindrome", function () {
        expect(tsFunc.isPalindrome('mama')).toEqual(false);
    });
});

describe("Testing caesarCipher function", function() {
    it("return encrypted string with key shifting", function () {
        expect(tsFunc.caesarCipher('abc', 3)).toEqual('def');
    });
    it("return encrypted string with key shifting", function () {
        expect(tsFunc.caesarCipher('zxc', 1)).toEqual('ayd');
    });
});

describe("Testing diagonalReverse function", function() {
    it("return reversed matrix", function () {
        expect(tsFunc.diagonalReverse([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[1,4,7],[2,5,8],[3,6,9]]);
    });
});

describe("Testing brackets function", function() {
    it("return string is brackets are valid", function () {
        expect(tsFunc.brackets('[[][]]')).toEqual('OK');
    });
    it("return string is brackets are valid", function () {
        expect(tsFunc.brackets('[]')).toEqual('OK');
    });
    it("return string is brackets are valid", function () {
        expect(tsFunc.brackets('[[[]]')).toEqual('NOT OK');
    });
    it("return string is brackets are valid", function () {
        expect(tsFunc.brackets(']')).toEqual('NOT OK');
    });
});

describe("Testing charFreq function", function() {
    it("return object of freq of chars", function () {
        expect(tsFunc.charFreq('aaabbbccd')).toEqual({a:3,b:3,c:2,d:1});
    });
});

describe("Testing decBin function", function() {
    it("return string bin representation of decimal number", function () {
        expect(tsFunc.decBin(420)).toEqual('110100100');
    });
});

let arr = [1,2];
Array.prototype.constructor === Array
arr.__proto__.constructor === Array
arr.constructor === Array

let arr2 = new arr.constructor(3,4);
console.log(arr2);
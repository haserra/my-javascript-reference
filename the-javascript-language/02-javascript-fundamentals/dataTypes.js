"use strict";
/**
 * Number
 */

let n = 1234;
const placeHolder = document.getElementById("data-type");
placeHolder.innerHTML = `<h3> N is a Number!: ${n} </h3>`;

/**
 *
 */

let age = 23;
let arr = ["John", age, (age += 10), age--, age - 1, undefined];
console.log(`array contents are ${arr}`);
arr.length = 2;
console.log(`and now the array is ${arr}`);
delete arr[3];
console.log(arr.length);

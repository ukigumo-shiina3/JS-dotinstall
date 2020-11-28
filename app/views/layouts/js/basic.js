'use strict';

// let price = 150;
// console.log(price * 140);
// console.log(price * 160);

// price = 170;
// console.log(price * 140);
// console.log(price * 160);

let price = 500;

price += 100; //600

price *= 2; //1200

price ++; //1201

price --; //1200

console.log(price)

console.log(typeof 'hello'); //string
console.log(typeof 5); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object 有名なJSのバグ

console.log('5' * 3); //15
console.log('5' - 3); //2

console.log('5' + 3) //53 文字列の連結のための演算子として見られる
console.log(parseInt('5', 10) + 3); //8 文字列を10進数の整数値に変換

console.log(parseInt('hello', 10) + 3);// NaN not a number 数値にしようとしたけどできなかった場合の値
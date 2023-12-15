// let score=400;
//simple way to declare any variable
// console.log(score);

// only for specific datatype variable then do this.
// const scores=new Number(500);

// console.log(scores);
// let changeToString=scores.toString()
// console.log(changeToString);
// console.log(typeof changeToString);

//using toFixed()

// this is use in rupees or Bills 100.00,25.2335  after dot how many number need to show this decide by toFixed

// let fix=scores.toFixed(2)
// console.log(fix);

//toPrecision()
//precision work before decimal if given precision no greater then given precision then it will give in exponential. this is simple Round of the number after decimal.

// let diffNumber = 23.4562;
// let toPrecise= diffNumber.toPrecision(3)

// console.log(toPrecise);

//toLocalString------->based on country type counting

// let myMoney = 1000000;

// const countMe = myMoney.toLocaleString("en-In");

// console.log(countMe);

// ************************Math*****************************/

//Math is a method in js

// console.log(Math);
//always return positive value when it come negative not vice versa
// console.log(Math.abs(-10));
//always return roundOf number without decimal.this is use maximum project.
// console.log(Math.round(4.3));
// suppose you want to control roundOf then use this ceil adn floor
// ceil is for upper value in roundOf
// console.log(Math.ceil(4.6));
// floor is for lower value in roundOf
// console.log(Math.floor(4.9));
// to find lowest value
// let count = (3, 2, 4, 5, 8, 6, 10);
// console.log(Math.min(count));

// to find Highest value
// console.log(Math.max(10, 55, 88, 99));
// console.log(Math.max(count));
let minValue=10;
let maxValue=20;


console.log(Math.floor(Math.random()*(maxValue-minValue+1))+minValue);
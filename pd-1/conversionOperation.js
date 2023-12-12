// let score=33;-------->Number
// let score="33";------->String
// let score="33a";------->String
// let score=null;--------->Null
// let score;-------------->Undefined
// let score = ["Amit"];----->symbol
//let score = true;      // boolean

// let typeValue = Number(score);

// console.log(typeof typeValue);
// console.log(typeValue);

// let isLogin=1;---------------->true
// let isLogin="Amit";----------->true
// let isLogin=" ";-------------->true
// let isLogin="";--------------->false

// let booleanLogin=Boolean(isLogin);
// console.log(booleanLogin);




let num = "16y5t4r33e22e11w9k8l8n7b6";

// Regular expression to match numbers
let numbers = num.match(/\d+/g);

// Convert matched numbers to integers
let integers = numbers.map(Number);

console.log(integers);

// console.log(result);
// let result = parseInt(num.replace(/[^0-9]/g, ""));
// console.log(result);

// console.log(element);

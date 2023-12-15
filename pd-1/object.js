//object literals

const myKey=Symbol("MyKey")

const jsUser={
    name:"Amit",
    age:29,
    city:"patna",
    [myKey]:"Hello Amit"

}

console.log(jsUser[myKey]);
console.log(typeof jsUser[myKey]);
console.log(jsUser);
//this is the correct way to access object
let myArray = [1, 2, 3, 4, 5, 6];

// console.log(myArray[2]);
// console.log(myArray.push(20));
// console.log(myArray);
// console.log(myArray.pop());
// console.log(myArray);
// console.log(myArray.unshift(222));
// console.log(myArray);
// console.log(myArray.shift(26));
// console.log(myArray);
// console.log(myArray.includes(4));
// console.log(myArray);
// console.log(myArray.indexOf(2));
// console.log(myArray);
//to convert array in string
// console.log(myArray.join());
// after using join method typeof is string.
// console.log(typeof myArray.join());

//slice
// console.log("A",myArray);

//this is creating a reference of original array but not manipulate original array.
// let myNew=myArray.slice(1,3);

// console.log(myNew);
// console.log("B",myArray);

//this manipulate original array which deep array
// let myNew2=myArray.splice(1,3);
// console.log(myNew2);
// console.log("C",myArray);
// console.log(myNew2);

const Marvel = ["iron man", "thor", "loki", "hulk"];
const Dc = ["superman", "batman", "flash", "shazham"];

//cannot add array into array with push()

// console.log(Marvel.push(Dc)); 

// this concat only give new array so always provide in variable
// let allHero = Marvel.concat(Dc);
// console.log(allHero);

// this is spread operator which is use in latest with js
//let my_hero=[...Marvel,...Dc];

//console.log(my_hero);

// array under array

// let superArr=[1,2,3,5,[1,5,8,9,[5,8,9,6,3,],[255,8,6,3,8],[5,7,9,6,3],[5,8,7,1,3,6,2]]]

//by this flat method all nested array will come under one array.
// let simple=superArr.flat(Infinity);
// console.log(simple);


//to convert any thing in array keyword is "Array.from()"

// console.log(Array.from("Amitkumar"));
// let myName=Array.from("Kumaramit")
// console.log(myName);

//to convert many variable in array keyword is "Array.of()"

// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3));


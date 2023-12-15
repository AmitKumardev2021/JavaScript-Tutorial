let myArray=[1,2,3,4,5,6];

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
console.log("A",myArray);

let myNew=myArray.slice(1,3);//this is creating a reference of original array but not manipulate original array.

console.log(myNew);
console.log("B",myArray);

let myNew2=myArray.splice(1,3);//this manipulate original array which deep array 
console.log(myNew2);
console.log("C",myArray);
console.log(myNew2);











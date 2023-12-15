// primitive

// 7-type of data type: String, Number, BigInit, Boolean,Null,Undefined,symbol.

// let score = 256;
// let scoreValue = 2360.25;
// const isLoggedIn = true;
// let result;
// let choose = null;
// let id = Symbol("123"); //both symbol value is same but there memory value is different always
// let LoggedId = Symbol("123");
// // let bigIntType=1234598765432195989999555647899n;    this is BigInit datatype

// console.log(id === LoggedId); //to Check both symbol with same value but result is false because both memory location is different
// reference(Non-Primitive)

//array,functions,Object.

// array
// const arrayOne = ["Amit", "Sumit", "Superman", "IronMan"];

// object

// let teaMaking=Symbol("teaMaking")

// let tea = {
//   teaName: "kadak chai",
//   teaPlace: "noida",
//   [teaMaking]: "put water and tea and boil with sugar",
// };

// console.log(tea[teaMaking]);
// // function
// const myFunction = function () {
//   console.log("Hello Earth");
// };

// -----------------------------------
// stack and heap memory

// let yourName="Amit kumar";   // In this Variable is store in stack and when other variable request then it make copy.
// let myNewName=yourName;
// myNewName="Amit"            //so this is because other variable change name nothing change in original variable.

// console.log(yourName);
// console.log(myNewName);

// let use1 = {
//   //In this object is store in heap so any other object can only take  reference and if any change made to any child it will reflect in parent object also.
// In simple any change will lead you original change to its reference
//   userName: "Person-1",
//   userAge: 28,
//   UserPlace: "patna",
// };

// let use2 = use1;
// use2.userAge = 30;

// console.log(use1);
// console.log(use2);



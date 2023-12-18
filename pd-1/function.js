

//this is normal function with name and without parameter
function sayMyName(){
    console.log("A");
    console.log("m");
    console.log("i");
    console.log("t");
}

// sayMyName------>this is reference no output is visible if direct reference call
// this is execution to call any function
// sayMyName();



// some time in function parament is provided as an argument 

// function myName(num,age){
//     let total=num+age;
//     return total;
// }

//if no value is provide to execution it will show NaN
// console.log(myName(2,5));

//to many parameter in function  ...num is rest operator
// function scope(...num) {
//     return num;

// }

// console.log(scope(200,400,700,900,6000));



// how to call object inside function

// const user={
//     userName:"Amit",
//     password:"uytrewq",
//     date:new Date()
// }

// function callMe(anyObject){
//     return `user is ${anyObject.userName} and password is ${anyObject.password} today date is ${anyObject.date}`
// }

//give name of that object which result you need
// console.log(callMe(user));
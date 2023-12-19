// if

// <,>,<=,>=,==,!=,===

// const userLoggedIn=true;

// if("2"==="2"){
    // console.log('executed');

// }
// ----------------------------------------------------------------------------------------

//falsy value
// false,0,-0,BigInt on,"",null,undefined,NaN

//truthy value
//"0","false"," ",[],{},function(){}


// ----------------------------------------------------------------------------------------
//to check array
// const userEmailIs=[]

// if(userEmailIs.length===0){
//     console.log("Yes Array is empty");
// }else{
//     console.log("Not empty");
// }

// ----------------------------------------------------------------------------------------
// to check object

// let toy={
    // toyName:"IronMan",
    // ToyPrice:1000,
    // toyColor:"Red"
// }
// to check object use keyword "Object.keys"
// if(Object.keys(toy).length===0){
//     console.log("Object is Empty");
// }else{

//     console.log("Object is Not Empty");
// }


// ----------------------------------------------------------------------
// nullish coalescing operator (??):null,undefined

// let val1;
//this is use when server has some issue to fetch data 
// val1=5 ??10;
// val1=null ??10;
// console.log(val1);

// ---------------------------------------------------------------------------
// Ternary Operator
// condition?true:false;

// example
// const iceCreamPrice=200;

// iceCreamPrice >=300?console.log("iceCream price is high"):console.log("IceCreamPrice is low");;

//global scope

// let a = 100;
// const b = 20;
// var c = 30;

// if (true) {
  //local scope
//   let a = 20;
//   const b = 300;
//   console.log('inner:'+a);
  
// }

// console.log(a);
// console.log(b);

console.log(top(5))
function top(num){
return 1+num;
}

// console.log(storeMe(5));---------------->this is concern of hoisting where need to call 
const storeMe= function bottom(num){
    return 2+num;
}
//after function you call then it will show result.
// console.log(storeMe(5));


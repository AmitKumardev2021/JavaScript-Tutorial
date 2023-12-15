let dateB= new Date();

// console.log(dateB.toDateString());
// console.log(dateB.toTimeString());
// console.log(dateB.toISOString());
// console.log(dateB.toLocaleDateString());
// console.log(dateB.toLocaleString('hi-In'));


// let myDate=new Date(1991,7,2,16,10);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// const boloDate=new Date("12-15-2023");

// let myTime=Date.now();

// console.log(boloDate.getMonth());
// console.log(Date.getMonth());

// console.log(Math.floor(myTime/1000));
// console.log(boloDate.getTime());


let dateP= new Date();

// console.log(dateP.getDay());
// console.log(Math.round(dateP.getTime()/1000));

let total=dateP.toLocaleString('default',{
    weekday:"long",
    // era:"long"
    month:"2-digit",
    
})
console.log(total);

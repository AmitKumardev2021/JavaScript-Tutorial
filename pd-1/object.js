// //object literals

// const myKey=Symbol("MyKey")

// const jsUser={
//     name:"Amit",
//     age:29,
//     city:"patna",
//     [myKey]:"Hello Amit"

// }

// console.log(jsUser[myKey]);
// console.log(typeof jsUser[myKey]);
// console.log(jsUser);
// //this is the correct way to access object

//------>this is singleton object
// const fullProof = new Object();

//non Singleton object
// const tinderUser={}

// want to assign object key value outside object
// tinderUser.id="1245ak";
// tinderUser.name="Amit kumar";
// tinderUser.age=25;

// console.log(tinderUser);

//nested object

const football = {
  field: "garden",
  country: {
    place: "london",
    area: "southern",
    device: {
      mobile: 789456123,
      image: {
        photo: "male",
        size: "52kb",
      },
    },
  },
};

//calling nested value
// console.log(football.country.device.image);
// console.log(football.country.device);

//merging to object in one

const marvel = { a: "marvel", c: "earth", e: "9/10" };
const dc = { b: "DC", d: "earth", f: "10/10" };

//two way to merge object

//old way to merge object
// const obj3={marvel,dc}
// const obj3=Object.assign(marvel,dc)
// const object3 = Object.assign(marvel, dc);
// console.log(obj3);

//new way to deal with object merge

// const obj3 = { ...marvel, ...dc };
// console.log(obj3);

// to arrange object

const sortedAndMerged = Object.fromEntries(
  [...Object.entries(marvel), ...Object.entries(dc)].sort(([keyA], [keyB]) =>
    keyA.localeCompare(keyB)
  )
);

//   console.log(sortedAndMerged);

//to filter key and value of abject

// console.log(Object.keys(dc));

// console.log(Object.values(marvel));

// for destructure

// let airplane = {
//   flight: "arrived",
//   plan: "boeing777",
//   day: "friday",
// };
// let airplane2 = {
//   flight: "arrived",
//   plan: "boeing773",
//   day: "tuesday",
// };
// let airplane3 = {
//   flight: "arrived",
//   plan: "boeing774",
//   day: "monday",
// };
// let airplane4 = {
//   flight: "arrived",
//   plan: "boeing775",
//   day: "saturday",
// };
const { day:d, plan:p } = airplane2;

console.log(d, p);

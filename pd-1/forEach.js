// const codingNinjas = ["Hello", "Hi", "Lattu", "Makeing"];

// const putMe = codingNinjas.forEach(function (item) {
//   console.log(item);
//forEach loop not return any value, suppose any filter need to add so need return then for each loop is not supportive in that
// });

// console.log(putMe);

//filter

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = count.filter((items) => {
  return items > 4;
});

// console.log(newNum);

//from object
let books = [
  {
    title: "book1",
    yearPublish: 2000,
    genre: "History",
    price: 600,
  },
  {
    title: "book2",
    yearPublish: 1991,
    genre: "si-fi",
    price: 750,
  },
  {
    title: "book3",
    yearPublish: 1982,
    genre: "comedy",
    price: 800,
  },
  {
    title: "book4",
    yearPublish: 2010,
    genre: "friction",
    price: 600,
  },
  {
    title: "book5",
    yearPublish: 2006,
    genre: "mythology",
    price: 500,
  },
  {
    title: "book6",
    yearPublish: 2022,
    genre: "space",
    price: 700,
  },
  {
    title: "book7",
    yearPublish: 2024,
    genre: "spiritual",
    price: 1400,
  },
];

// let fillMe = books.filter((item) => item.genre === "space");
// fillMe=books.filter((ten)=>{return ten.price>=800})----------------->override
fillMe=books.filter((amit)=>{return amit.genre==='spiritual'})//--------------->override to fillMe variable
console.log(fillMe);
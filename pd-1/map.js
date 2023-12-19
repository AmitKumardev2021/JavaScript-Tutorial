const tree = [1, 4, 5, 7, 8, 9, 5, 7, 2, 3, 6];

// const addKro = tree.map((amitKumar) => amitKumar + 2);

// console.log(addKro);



//chaining

//in chaining so many method call can do at one time.
const putMe=tree
            .map((amit)=>amit*10)
            .map((amit)=>amit+1)//--------------->chaining
            .filter((amit)=>amit>=42);//--------->chaining

// console.log(putMe);


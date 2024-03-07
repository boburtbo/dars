// 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)


// Input: 'George Raymond Richard Martin'

// let text = 'George Raymond Richard Martin'.split(" ").map((item)=>{
//     return item.charAt()
// }).join('')
// console.log(text);


// Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).



// let yosh = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ].sort((a,b) =>a-b )

//   console.log(yosh.at(-1).age - yosh.at().age);


let products = [
    {
      id: 6,
      name: "Smarthpone",
      price: 12000,
      rating: 4.5,
      discount: 20,
    },
    {
      id: 2,
      name: "Acer",
      price: 10000,
      rating: 4.3,
      discount: 10,
    },
    {
      id: 1,
      name: "Mac book",
      price: 17000,
      rating: 4.7,
      discount: 40,
    },
    {
      id: 4,
      name: "HP",
      price: 21000,
      rating: 4.1,
      discount: 30,
    },
    {
      id: 5,
      name: "Dell",
      price: 35000,
      rating: 4.9,
      discount: 30,
    },
  ];
  
  
//   products.sort((a, b) => a.price - b.price);
  
//   console.log(products);
//   const productspast = products[0];



//   let productNames = products.map(product => product.name);

// console.log(productNames);


const name = products.find(products => products.id == 5 ).name
console.log(name);


  
  // const values = [false, 1, 10, "", null, "bobur", 1.13, 0]
  // function getTruthyFalsy (val){
  //    return {
  //       truthy:val.filter((item)=> item),
  //       falsey:val.filter((item)=> !item),
  //    }
  // }
  // const result = getTruthyFalsy (values)
  // console.log(result);
  

  // const name = "Men Bobur Programmerman".split(' ').map((word)=>{
  //    return word.length
  // })
  // console.log(name);
  

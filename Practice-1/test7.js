"use strict";

// input : [
//   { name: "Apple", category: "Fruits" },
//   { name: "Banana", category: "Fruits" },
//   { name: "Carrot", category: "Vegetables" },
//   { name: "Lettuce", category: "Vegetables" },
// ];
// output : [
//          Fruits:[{name: "Apple", category: "Fruits"},{ name: "Banana", category: "Fruits" }], 
//          Vegetable:[{name: "Carrot", category: "Vegetables"},{name: "Lettuce", category: "Vegetables"}]
//          ]

const product = [
  { name: "Apple", category: "Fruits" },
  { name: "Banana", category: "Fruits" },
  { name: "Carrot", category: "Vegetables" },
  { name: "Lettuce", category: "Vegetables" },
];

function abc(product) {
  const details = product.reduce((prev, curr) => {
    if (!prev[curr.category]) {
      prev[curr.category] = [];
    }
    prev[curr.category].push(curr);
    return prev;
  }, []);
  console.log(details);
}
abc(product);

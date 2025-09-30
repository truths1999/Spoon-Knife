let groceryCart = [
  { name: "Apple", price: 10, quantity: 2 },
  { name: "Orange", price: 25, quantity: 1 },
  { name: "Milk", price: 50, quantity: 3 },
  { name: "Bread", price: 15, quantity: 2 },
  { name: "Candy", price: 5, quantity: 10 }
];

// 1. Filter out only items with quantity >= 2

let bulkStock = groceryCart.filter(item => item.quantity >= 2); 
console.log(bulkStock);

// 2. Use reduce to calculate summary

let summary = groceryCart.reduce((acc, item) => {
  acc.item += 1; 
  acc.totalCost += item.price;
  acc.quantity += item.quantity;
  return acc;

}, {item: 0, totalCost: 0,quantity: 0})

console.log(summary);

// 3. Filter out items cheaper than 20

let cheapItems = groceryCart.filter(item => item.price < 20);

console.log(cheapItems);

// 4. Use reduce to find combined quantity

let totalQuantity = cheapItems.reduce((acc, item) => {
  return acc += item.quantity; 
}, 0)

console.log(totalQuantity);
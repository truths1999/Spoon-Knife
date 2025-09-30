let groceryCart = [
  { name: "Apple", price: 10, quantity: 2 },
  { name: "Orange", price: 25, quantity: 1 },
  { name: "Milk", price: 50, quantity: 3 },
  { name: "Bread", price: 15, quantity: 2 },
  { name: "Candy", price: 5, quantity: 10 }
];

let cheapItem = groceryCart.filter(item => item.price < 20);
console.log(cheapItem);

let combined = cheapItem.reduce((acc, item) =>
  acc + item.quantity, 0)

console.log(combined)
let numbers = [3, 8, 12, 5, 19, 2, 25];

// 1. Filter all numbers greater than 10

let moreThanTen = numbers.filter(num => num > 10);
console.log(moreThanTen);

// 2. Filter even numbers

let even = numbers.filter(num => num % 2 == 0); 
console.log(even);

// 3. Use reduce to find the sum of all numbers

let sum = numbers.reduce((acc, cur) => {
    return acc += cur
})

console.log(sum);

// 4. Use reduce to find the maximum number

let max = numbers.reduce((acc, cur) => {
    if (cur > acc) acc = cur; 
    return acc
}, 0); 

console.log(max);

let words = ["apple", "banana", "pear", "kiwi", "watermelon", "fig"];

// 1. Filter all words with length > 4

let longWords = words.filter(word => word.length > 4);
console.log(longWords);


// 2. Filter words starting with "b"

let bWords = words.filter(word => word.split("")[0] === "b")
console.log(bWords);
// 3. Use reduce to create one long string of all words, separated by commas

let longString = words.reduce((acc, word, index) => {
    // Add comma before every word except the first
    if (index === 0) return word;
    return acc + "," + word;
}, "");

console.log(longString);

// 4. Use reduce to find the longest word

let longestWord = words.reduce((acc, word) => {
    if (word.length > acc.longest) acc.longest = word.length; 
    return acc
}, {longest: 0})

console.log(longestWord);


let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 60 },
    { name: "Eve", grade: 95 }
  ];
  
  // 1. Filter students who scored >= 80

  let highGrades = students.filter(student => student.grade >= 80);
  console.log(highGrades);

  // 2. Filter students whose names start with "A"

  let startA = students.filter(student => student.name.split("")[0] === "A");
  console.log(startA);

  // 3. Use reduce to calculate the average grade

  let avgGrade = students.reduce((acc, student) =>
    acc += student.grade, 0) / students.length; 

  console.log(avgGrade);

  // 4. Use reduce to find the student with the highest grade
  
  let findHighest = students.reduce((acc, student) => {
    if (student.grade > acc.highest) acc.highest = student.grade; 
    return acc 
  }, {highest: -Infinity})

  console.log(findHighest);

  

  let products = [
    { name: "Shirt", price: 20, stock: 15 },
    { name: "Pants", price: 40, stock: 5 },
    { name: "Hat", price: 15, stock: 0 },
    { name: "Shoes", price: 60, stock: 8 }
  ];
  
  // 1. Filter products that are in stock (stock > 0)

  let stock = products.filter(item => item.stock > 0);
  console.log(stock);

  // 2. Filter products cheaper than $30

  let cheapProducts = products.filter(item => item.price < 30);
  console.log(cheapProducts);

  // 3. Use reduce to calculate the total stock

  let total = products.reduce((acc, item) => {
    return acc += item.stock; 
  }, 0)

  console.log(total);

  // 4. Use reduce to calculate the total value of all products (price * stock)

  let totalValues = products.reduce((acc, item) => {
    return acc += item.price * item.stock;
  }, 0)

  console.log(totalValues);
  
  // 5. (Mini-challenge) Use reduce to create an object summary:
  // {
  //   totalProducts: 4,
  //   totalStock: 28,
  //   totalValue: 1390
  // }

  let summary = products.reduce((acc, item) => {

    acc.item += 1; 
    acc.stock += item.stock; 
    acc.totalCost += item.price * item.stock;

    return acc 
  }, {item: 0, stock: 0, totalCost: 0})

  console.log(summary)
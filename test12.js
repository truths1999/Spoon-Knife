let numbers = [2, 7, 12, 21, 32, 45];

// keep even numbers

let evenNums = numbers.filter(num => num % 2 == 0);

console.log(evenNums);

// keep numbers > 20

let greaterThanTwenty = numbers.filter(num => num > 20);
console.log(greaterThanTwenty);

// Keep only odd numbers

let oddNums = numbers.filter(num => num % 2 !== 0);
console.log(oddNums);

// Keep numbers between 10 and 40

let range = numbers.filter(num => num > 10 && num < 40);
console.log(range);

// Filter numbers > 10, then square them

let squared = numbers
.filter(num => num > 10)
.map(num => num * num);

console.log(squared);

let fruits = ["apple", "banana", "cherry", "pear"];

// Keep names longer than 5 letters

let longLetters = fruits.filter(item => item.length > 5);
console.log(longLetters);

// uppercase all words longer than 5

let results = fruits
.filter(item => item.length > 5)
.map(item => item.toUpperCase());

console.log(results)

// Filter out short words, then double their length (word.length * 2)

let shortWords = fruits
.filter(item => item.length < 5)
.map(item => item.length * 2);

console.log(shortWords);

// Turn an array of words into a single string ("apple, banana, cherry")

let string = fruits.reduce((acc, cur, index) => {
    if (index === 0) return cur
    return acc + "," + cur; 
}, "")

console.log(string)


let nums = [1, 2, 3, 4];

// sum

let sum = nums.reduce((acc, num) => {
    return acc += num; 
}, 0);

console.log(sum);

// product

let product = nums.reduce((acc, num) => {
    return acc * num 
}, 1)

console.log(product);

// Find the maximum value with reduce

let max = nums.reduce((acc, num) => {
    if (num > acc) acc = num;
    return acc; 
}, 0);

console.log(max);

// Count how many numbers are even

let evenCount = nums
.filter(num => num % 2 == 0).length

console.log(evenCount);

let cart = [
    { name: "apple", price: 10, qty: 2 },
    { name: "banana", price: 5, qty: 5 },
    { name: "pear", price: 20, qty: 1 }
  ];
//   Filter out items cheaper than 10

let cheapItems = cart.filter(item => item.price < 10); 

console.log(cheapItems);
//   Map them to their total price (price * qty)
  
let totals = cart.map(item => item.price * item.qty);

console.log(totals);
//   Reduce to find the total cost

let totalCost = totals.reduce((acc, item) => {
    return acc += item; 
}, 0)

console.log(totalCost)

let words = ["hello", "world", "javascript", "reduce", "map", "filter"];

// Filter words starting with "r"

let rWords = words.filter(word => word.split("")[0] === "r");
console.log(rWords);

// Map to word lengths

let wordLength = words.map(word => word.length); 
console.log(wordLength);

// Reduce to get the sum of those lengths

let sumLengths = words.reduce((acc, word) =>{
    return acc += word.length
}, 0)

console.log(sumLengths)


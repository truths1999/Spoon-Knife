let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 72 },
  { name: "Charlie", grade: 90 },
  { name: "David", grade: 60 },
  { name: "Eve", grade: 95 }
];

// 1. Filter students who passed (>=70)

let passedStudents = students.filter(student => student.grade >= 70);
console.log(passedStudents);

// 2. Reduce to find average grade

let averageGrade = students.reduce((acc, current) =>
  acc += current.grade, 0) / students.length; 

console.log(averageGrade);

// 4. Use reduce to create an object

let summary = students.reduce((acc, student, index, arr) =>{
  if (student.grade > acc.highest) acc.highest = student.grade; 
  if (student.grade < acc.lowest) acc.lowest = student.grade; 

  acc.total += student.grade; 

  if (index === arr.length - 1){
    acc.average = acc.total / arr.length; 
    delete acc.total;
  }
  return acc; 
}, {highest: -Infinity, lowest: Infinity, total: 0, average: 0})

console.log(summary);
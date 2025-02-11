// ভেরিয়েবল ডিক্লেয়ার করা
var name = "rafi"; // String
let বয়স = 25; // Number 
const PI = 3.1416; // Constant 

// ডাটা টাইপ
// 1. String: "hello"
// 2. Number: 10, 3.14
// 3. Boolean: true/false
// 4. Array: [1, 2, 3]
// 5. Object: {name:'rafi',age:25}

// operator 
/*
arethmatic:+, -, *, /, %
logical: && (AND), || (OR), ! (NOT)
comperisonn:==, ===, >, <, !=


*/
let x = 10;
let y = 5;
console.log(x + y); 
console.log(x > y); 


// if-else
let age=20;
if (age >= 18) {
  console.log("ভোট দিতে পারবেন");
} else {
  console.log("ভোট দেওয়া যাবে না");
}


// switch-case
let day = "monday";
switch (day) {
  case "wednesday":
    console.log("ছুটি!");
    break;
  default:
    console.log("working day day");
}

// loop

for (let i = 1; i <= 5; i++) {
  console.log(i); 
}

// while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// function
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3)); 


let fruits = ['apple','banana','orange'];

console.logfruits9(i)); 

// মেথড
fruits.push("pineapple"); 
fruits.pop(pineapple); 
fruits.length; 


let fruits = ['apple','banana','orange'];

let fruit=[...fruits]

console.log(fruit.push('pineapple'));
console.log(fruit.pop());
console.log(fruits.shift());
console.log(fruit.unshift('sakib'));
console.log(fruit);


// object
let student = {
  name:'sakib',
  age:25,
  study: function() {
    console.log("studing...");
  }
};


console.log(student.name);
console.log(student.study())
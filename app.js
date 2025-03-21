// strings methods 
// format = stringName.method();

let str = "shubhi"
console.log(str.trim()); // creates new string
// strings are immutable in JS

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str1 = "ilovecoding";

console.log(str1.indexOf("e"));
console.log(str1.indexOf("j"));

// method chaining

let str2 = "     newstring     ";
console.log(str2.trim().toUpperCase());

// slice
console.log(str1.slice(4));
console.log(str1.slice(3,8));

// replace 
console.log(str1.replace("love" , "hate"));
//repeat 
console.log(str1.repeat(3));

// array define 
let arr = ["shubhi" , "dwivedi" ,"is","good"];

// array methods
arr.push("girl"); // adds in last
arr.pop(); // deletes from last
arr.unshift("i"); // adds in front
arr.shift(); // deletes from front

console.log(arr.indexOf("is"));
console.log(arr.includes("good"));
console.log(arr.includes("girl"));
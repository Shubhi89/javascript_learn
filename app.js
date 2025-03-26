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

let arr2 = ["red","yellow" , "blue"];

console.log(arr.concat(arr2));
console.log(arr.reverse()); // changes in original array

console.log(arr2.sort()); // not works with numbers

// for loops
for(let i=1;i<=10;i++) {
    console.log(i);
}

// odd numbers
for(let i=1;i<=15;i++) {
    if(i%2 != 0) {
        console.log(i);
    }
}

// even numbers
for(let i=2;i<=10;i++) {
    if(i%2 == 0) {
        console.log(i);
    }
}

const favMovie = "sitaramam";
//let guess = prompt("enter your movie");

// while(guess != favMovie && guess != "quit") {
//     console.log("wrong guess");
//     guess = prompt("enter again !");
// }

// for of loop
let fruits = ["mango" , "apple" , "banana" , "litchi" , "orange"];

for(fruit of fruits) {
    console.log(fruit);
}

// todo app JS
// let todo = [];

// let rq = prompt("please enter your request");

// while(true) {
//     if(rq == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if(rq == "list") {
//         console.log("-------------")
//         for(let i=0;i<todo.length;i++) {
//             console.log(i , todo[i])
//         }
//         console.log("-------------");
//     } else if(rq == "add") {
//         let task = prompt("please enter your task");
//         todo.push(task);
//         console.log("task is added");
//     } else if(rq == "delete") {
//         let idx = prompt("enter the task index");
//         todo.splice(idx , 1);
//         console.log("task deleted");
//     } else {
//         console.log("wrong request");
//     }
    
//     rq = prompt("please enter your request");
    
// }

// object literals
const student =  {
    name:"shubhi",
    age:20,
    marks: 94.4
}; 

const post = {
    username: "@shubhidwivedi",
    content: "I am just a girl",
    likes: 150,
    repost: 5,
    tags : ["@apnacollege" , "@sigma" , "@shradhakhapra"]
};

// to get values in object
console.log(post["username"]);
console.log(post.username);

// add/update values in object
post.likes = 200;
post.viral = "yes";
delete post.viral;

// nested objects
const classInfo = {
    shubhi : {
        grade:"A",
        city: "Kanpur"
    },
    dwivedi : {
        grade : "B",
        city:"lucknow"
    }
};

// math object
console.log(Math.abs(-10));
console.log(Math.pow(2,3));
console.log(Math.floor(12.7));
console.log(Math.ceil(10.1));
console.log(Math.random()); // gives values b/w 0 to 1 , 1 is exclusive

// steps to generate a integer from random function
let num = Math.random(); // step 1
num = num*10 // step 2 (multiply by 100 if want the range to 100..and so on)
num = Math.floor(num); // step 3
num = num+1; // step 4
console.log(num);

// functions
function hello() {
    console.log("hello , I am shubhi");
}

hello();

// practice ques 1
function rollDice() {
    console.log(Math.floor(Math.random()*6)+1);
}

rollDice();
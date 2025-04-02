let h4 = document.querySelector("h4");
console.log(h4.parentElement);

// adding new paragraph
let newP = document.createElement('p');
newP.innerText = "hello , this is a new paragraph";
let body = document.querySelector("body");
body.appendChild(newP);
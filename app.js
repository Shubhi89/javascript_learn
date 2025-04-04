let btn = document.getElementById("btn1");
console.dir(btn);

btn.onclick = function() {
    console.log("clicked button"); 
}
btn.onmouseenter = function() {
    console.log("you entered in button");
}

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click" , function() {
    console.log("button 2 is clicked");
});
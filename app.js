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

let form = document.querySelector("form");

form.addEventListener("submit" , function(event) {
    event.preventDefault();

    let inp = document.querySelector("input");
    console.log(inp.value);
})

// promises
function saveToDb(data) {
    return new Promise((success , failure) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4) {
        success("data saved");
    } else {
        failure("weak connection");
    }
    });
}
// then and catch
saveToDb("hello")
.then(() => {
    console.log("resolved");
})
.catch(() => {
    console.log("rejected");
});
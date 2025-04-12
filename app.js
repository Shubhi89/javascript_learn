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

// promise chaining
saveToDb("abc")
.then(() => {
    console.log("data1 saved");
    return saveToDb("xyz");
})
.then(() => {
    console.log("data2 saved");
    return saveToDb("pqr");
})
.then(() => {
    console.log("data3 saved");
})
.catch(() => {
    console.log("promise rejected");
});

// async keyword
async function greet() {
    return "hello";
}

// await keyword
function getNum() {
    return new Promise((resolve , reject)=> {
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
}

// api calls
let url = "https://catfact.ninja/fact";
fetch(url)
.then((res) => {
    console.log(res);
    res.json().then((data)=> {
        console.log(data);
    });
})
.catch((err) => {
    console.log(err);
});

// using axios
async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data);
    } catch(e) {
        console.log(e);
    }
}
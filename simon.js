let gameSeq = [];
let userSeq = [];

let btns = ["blue" , "yellow" , "red" , "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function() {
    if(started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randomColor}`);

    gameFlash(randBtn);
}

function btnPress() {
    console.log("btn was pressed");
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click" , btnPress);
}
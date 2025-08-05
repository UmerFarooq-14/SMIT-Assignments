let btn = document.getElementById("btn");
var scoreEl = document.getElementById("score");
var inputEl = document.getElementById("search");
var score = 0;

var colors = ["red", "blue", "green", "orange", "purple", "black", "yellow", "violet", "indigo", "brown", "pink", "maroon", "skyblue"];

function match() {
    let input = inputEl.value;
    let box1 = document.getElementsByClassName("box1");
    let box2 = document.getElementsByClassName("box2");
    let x = Math.floor(Math.random() * 13);

    for (let i = 0; i < box1.length; i++) {
        box1[i].style.backgroundColor = input;
    }
    for (let j = 0; j < box2.length; j++) {
        box2[j].style.backgroundColor =colors[x];
    }
    
    if (input === colors[x]) {
        score++;
    }
    
    scoreEl.innerHTML = `Score:${score}`
    inputEl.value = ``
}

btn.addEventListener("click", match);
window.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "Enter") {
        match()
        inputEl.value = ''
    }
})
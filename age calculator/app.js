let birthdateEl = document.getElementById("birthdate")
let btn = document.getElementById("btn")
let result = document.getElementById("result");

function calculate(){
    let birthdate = new Date(birthdateEl.value)
    let today = new Date()

    let age = today.getFullYear() - birthdate.getFullYear()

    let monthDifference = today.getMonth() - birthdate.getMonth();
    if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())){
        age--;
    }
    
    result.innerHTML = `You are ${age} years old.`
}

btn.addEventListener("click", calculate)
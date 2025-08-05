let nameEl = document.getElementById("name")
let emailEl = document.getElementById("email")
let numberEl = document.getElementById("number")
let btn = document.getElementById("btn")
let table = document.getElementById("table")

let dataArray = []



// Render Data

function renderData() {
    
    // table.innerText = ""
    table.innerHTML = ` <tr>
    <th class="srno">#No</th>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile.NO</th>
    </tr>
    `

    for (let i = 0; i < dataArray.length; i++) {
        var item = dataArray[i];
        table.innerHTML += `<tr>
        <td class="srno">${i + 1}</td>
        <td> ${item.name}</td>
        <td>${item.email}</td>
        <td>${item.number}</td>
        </tr>`
    }
    
}
 
// Add data

function addData() {
    const obj = {
        name: nameEl.value,
        email: emailEl.value,
        number: numberEl.value,
        
    }

    if(nameEl.value === "" && emailEl.value === "" ){
        alert("Fill the form")
    }else{
        dataArray.push(obj)
    }
    
    nameEl.value = ""
    emailEl.value = ""
    numberEl.value = ""
    renderData()
}
btn.addEventListener("click", addData)


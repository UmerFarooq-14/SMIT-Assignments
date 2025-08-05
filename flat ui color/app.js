
let color = document.querySelectorAll(".card")

color.forEach((button) => {
    button.addEventListener("click", (e) => { 
        let bg = window.getComputedStyle(e.target).backgroundColor;
        console.log(bg)
        navigator.clipboard.writeText(bg).then()
    })
})



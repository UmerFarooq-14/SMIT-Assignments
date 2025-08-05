let element = document.getElementById("clock");

const clock = () => {
    let date = new Date();
    let hours = date.getHours()
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours > 12) {
        hours = hours - 12;
        element.innerHTML = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} PM`
    }
    if(hours === 0 ){
        hours += 12;
        element.innerHTML = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} AM`
    }
    else{
        element.innerHTML = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} AM`
        
    }
}

setInterval(clock, 1000)
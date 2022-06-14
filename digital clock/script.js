const hel = document.getElementById("hour");
const mel = document.getElementById("minute");
const sel = document.getElementById("second");
const ampmel = document.getElementById("ampm");


function clock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";
    

    if (h>12) {
        h = h-12;
        ampm = "PM"
    }

    
    hel.innerText = h;
    mel.innerText = m;
    sel.innerText = s;
    ampmel.innerText = ampm;
 
 
    ampmel,(innerText = ampm); 
    setTimeout(() => {
        clock()
     },1000)
}

clock()
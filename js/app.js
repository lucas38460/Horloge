let minutesHMTL = document.getElementById('minutes').innerText = minutes;
let secondesHTML = document.getElementById('secondes').innerText = secondes;

let secondes = 0;
let minutes = 24;


buttonStart => {
    let decompte = setTimeout("buttonStart()", 1000);
    seconde -= 1;

    if (minutes == 0)  {
        minutes--;
    }
    
    if (secondes == 0) {
        secondes = 59;
    }
    
}
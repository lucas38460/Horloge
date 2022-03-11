let counter = 1;
let nIntervId;
let resetBtn = document.getElementById('set0');




// Test convertisseur de milisecondes en secondes.
function changeColor() {
    if (!nIntervId) {
        nIntervId = setInterval(flashText, 1000);
    }
}
console.log(nIntervId);




// Boutton permettant de remettre le décompteur à 20 minutes
function reset(x) {

    // Nombre en miliseconde correspondant à 20 minutes.
    counter = 1200000;
}




for (let i = 1; i < 1000; i++) {
    counter++;
    console.log(counter);
    min = Math.floor((counter / 1000 / 60) << 0),
        sec = Math.floor((counter / 1000) % 60);
    console.log(min + ':' + sec);
}







// min = Math.floor((counter / 1000 / 60) << 0),
// sec = Math.floor((counter / 1000) % 60);
// console.log(min + ':' + sec);







let heure2 = document.getElementById('heure2');
let heure1 = document.getElementById('heure1');
let seconde2 = document.getElementById('heure2');
let seconde1 = document.getElementById('heure1');
let button = document.getElementById('set0');


let number = 0;

for (let i = 0; i < 10000; i++) {

    switch (number) {
        case number === "0":

            break;

        case number === "1":

            break;
        case number === "2":

            break;
        case number === "3":

            break;
        case number === "4":

            break;
        case number === "5":

            break;
        case number === "6":

            break;
        case number === "7":

            break;
        case number === "8":

            break;
        case number === "9":

            break;
        default:
            console.log(number);
            break;
    }
}
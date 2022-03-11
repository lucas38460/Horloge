let counter = 1;
let nIntervId;
let resetBtn = document.getElementById('set0');





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
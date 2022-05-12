let minutes = 24;
let secondes = 0;

const trait = document.getElementsByClassName('trait');
for (let i = 0; i < trait.length; i++) {
  trait.classList.add("grey");
}

function counter(e) {
  if (secondes <= 0) {
    secondes = 59;
  } else if (secondes > 0) {
    secondes --;
  } else {
    clearInterval(counter);
  }
}

setInterval(counter, 1000);
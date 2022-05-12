let minutes = 24;
let secondes = 0;

const trait = document.getElementsByClassName("trait");
for (let i = 0; i < trait.length; i++) {
  trait.classList.add("grey");
}

function counter(e) {
  if (secondes <= 0 && minutes > 0) {
    secondes = 59;
    minutes --;
  } else if (secondes > 0) {
    secondes--;
  } else {
    clearInterval(counter);
  }
  console.log(minutes);
  console.log(secondes);
}

setInterval(counter, 1000);

// function name(params) {}

// function convertisseur(tempsSec, tempsMin) {}

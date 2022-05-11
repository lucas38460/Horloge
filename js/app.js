let minutes = 24;
let secondes = 0;

const traitS = document.getElementsByClassName("trait");
for (const traitS of tiles) {
  traitS.classList.add("grey");
}

timer = setInterval(decrement, 100);

function decrement() {
  if (minutes > 0 || secondes > 0) {
    if (secondes > 0) {
      secondes--;
    } else {
      secondes = 59;
      minutes--;
    }
  } else {
    clearInterval(counter);
  }
}

function CounterAString(minutes, secondes) {
  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = "" + minutes;
  }
  if (secondes < 10) {
    secondes = "0" + secondes;
  } else {
    secondes = "" + secondes;
  }
  return minutes + secondes;
}

function rendu(time) {
  for (let index = 0; index < time.length; index++) {
    const number = time[index];
    for (const traitS of traitS) {
      if (traitS.classList[1].includes(number)) {
        traitS.classList.add("red");
      } else {
        traitS.classList.remove("red");
      }
    }
  }
}


let mover = document.querySelector(".mover");

function updateClock() {
  let date = new Date();
  let hours = date.getHours();

  if (hours < 6) {
    mover.style.backgroundColor = "navy";
  } else if (hours < 12) {
    mover.style.backgroundColor = "cyan";
  } else if (hours < 18) {
    mover.style.backgroundColor = "yellow";
  } else {
    mover.style.backgroundColor = "red";
  }

  console.log("Hour:", hours);
}

updateClock();

setInterval(updateClock, 1000); 
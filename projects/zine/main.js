function playSong(number) {
  var audio = document.getElementById("audio" + number);
  var button = document.getElementById("button" + number);
  var box = button.parentElement;

  if (audio.paused) {
    audio.play();
    button.textContent = "Pause";
    box.classList.add("playing");
  } else {
    audio.pause();
    button.textContent = "Play";
    box.classList.remove("playing");
  }

  audio.onended = function () {
    button.textContent = "Play";
    box.classList.remove("playing");
  };
}

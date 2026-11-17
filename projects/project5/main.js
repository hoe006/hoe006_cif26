
var sun = document.getElementById('sun');
var shadow = document.getElementById('shadow');

function updateScene() {
  var now = new Date();
  var time = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;


  var across = (time - 6) / 12;
  if (time < 6 || time >= 18) {
    across = ((time + 6) % 24) / 12;
  }
  var angle = across * Math.PI;


  sun.style.left = 50 + 45 * Math.cos(angle) + '%';
  sun.style.top = 50 - 40 * Math.sin(angle) + '%';

  shadow.style.transform = 'rotate(' + (90 - across * 180) + 'deg)';
  shadow.style.height = 60 - 40 * Math.sin(angle) + 'vmin';


  var mood = 'night';
  if (time >= 5) mood = 'dawn';
  if (time >= 9) mood = 'day';
  if (time >= 15) mood = 'dusk';
  if (time >= 19) mood = 'night';
  document.body.dataset.mood = mood;

 
  if (now.getSeconds() % 2 === 0) {
    sun.style.transform = 'scale(1.1)';
  } else {
    sun.style.transform = 'scale(1)';
  }
}

updateScene();
setInterval(updateScene, 1000);


setTimeout(function () {
  document.body.classList.add('ready');
}, 1000);
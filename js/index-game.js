<<<<<<< HEAD
let ptbrButtonLink = document.getElementById("ptbr-button-link");
let engButtonLink = document.getElementById("eng-button-link");

ptbrButtonLink.onclick = function buttonSoundPtbr(event) {
  event.preventDefault();
  var audioPtbr = new Audio("./ptbr-sounds/01enter-cafe-audio.mp3");
  audioPtbr.volume = 0.2;
  audioPtbr.play();
  setTimeout(() => (window.location.href = "./game/ptbr-game.html"), 2000);
};

engButtonLink.onclick = function buttonSoundEng(event) {
  event.preventDefault();
  var audioEng = new Audio("./eng-sounds/01enter-pessimistic.mp3");
  audioEng.volume = 0.2;
  audioEng.play();
  setTimeout(() => (window.location.href = "./game/eng-game.html"), 2000);
};
=======
// let ptbrButton = document.getElementById("ptbr-button");
// let engButton = document.getElementById("eng-button");

// ptbrButton.onclick = 
// function buttonSoundPtbr() {
//     var audioPtbr = new Audio("./ptbr-sounds/01enter-cafe-audio.mp3");
//     audioPtbr.play();
//     audioPtbr.volume = 0.2;
// }

// engButton.onclick = 
// function buttonSoundEng() {
//   var audioEng = new Audio("./eng-sounds/01enter-pessimistic.mp3");
//   audioEng.play();
//   audioEng.volume = 0.2;
// }


>>>>>>> 3eb61967b5cef73e794a50dcd24167203a679590

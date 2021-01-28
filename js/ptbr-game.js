const cards = document.querySelectorAll(".memory-card");
cards.forEach((card) => card.addEventListener("click", flipCard));
shuffle();

let hasFlippedCard = false;
let firstCard = "";
let secondCard = "";

function soundIncorrect() {
  this.audioForIncorrect = [
    { name: "caetano", file: "../ptbr-sounds/02caetano-audio.mp3" },
    { name: "errou", file: "../ptbr-sounds/02errou-audio.mp3" },
  ];
  var audioInc = new Audio();
  var randomAudioForIncorrect = this.audioForIncorrect[
    Math.floor(Math.random() * this.audioForIncorrect.length)
  ];
  audioInc.src = randomAudioForIncorrect.file;
  audioInc.play();
  audioInc.volume = 0.1;
}

function soundCorrect() {
  this.audioForCorrect = [
    { name: "freddie", file: "../ptbr-sounds/03freddie-audio.mp3" },
    { name: "fogo", file: "../ptbr-sounds/03fogo-audio.mp3" },
  ];
  var audioCor = new Audio();
  var randomAudioForCorrect = this.audioForCorrect[
    Math.floor(Math.random() * this.audioForCorrect.length)
  ];
  audioCor.src = randomAudioForCorrect.file;
  audioCor.play();
  audioCor.volume = 0.1;
}

function flipCard() {
  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
    checkIfMatch();
  }
}

function checkIfMatch() {
  if (firstCard.dataset.case === secondCard.dataset.case) {
    soundCorrect();
    correct();
  } else {
    soundIncorrect();
    incorrect();
  }
}

function correct() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function incorrect() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 500);
}

function shuffle() {
  cards.forEach((card) => {
    let random = Math.floor(Math.random() * 16);
    card.style.order = random;
  });
}

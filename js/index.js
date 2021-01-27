const cards = document.querySelectorAll(".memory-card");
cards.forEach((card) => card.addEventListener("click", flipCard));
shuffle();

let hasFlippedCard = false;
let firstCard = "";
let secondCard = "";

function soundIncorrect() {
  this.audioForIncorrect = [
    { name: "caetano", file: "./sounds/caetano.mp3" },
    { name: "errou", file: "./sounds/errou.mp3" },
    { name: "erroufeio", file: "./sounds/erroufeio-audio.mp3" },
    { name: "tulla", file: "./sounds/Tulla-audio.mp3" },
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
    { name: "cafe", file: "./sounds/cafeeee-audio.mp3" },
    { name: "freddie", file: "./sounds/freddie-audio.mp3" },
    { name: "jessica", file: "./sounds/jessica-audio.mp3" },
    { name: "fogo", file: "./sounds/ta pegando fogo bicho.mp3" },
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
  }, 1000);
}

function shuffle() {
  cards.forEach((card) => {
    let random = Math.floor(Math.random() * 16);
    card.style.order = random;
  });
}

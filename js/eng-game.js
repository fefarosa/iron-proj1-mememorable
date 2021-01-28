const cards = document.querySelectorAll(".memory-card");
cards.forEach((card) => card.addEventListener("click", flipCard));
shuffle();

let hasFlippedCard = false;
let firstCard = "";
let secondCard = "";

function soundIncorrect() {
  var audioInc = new Audio();
  audioInc.src = "../eng-sounds/02nogod.mp3";
  audioInc.play();
  audioInc.volume = 0.2;
}

function soundCorrect() {
  var audioCor = new Audio();
  audioCor.src = "../eng-sounds/03whylying.mp3";
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

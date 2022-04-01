// Start koding lengre ned (ved startHere)

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";

const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

// const wordList = ["d", "e", "z", "n", "c", "a", "b"];

// #### START HER ####
const inpText = document.getElementsByTagName("input");
const spans = document.getElementsByTagName("span");
const btnTest = document.getElementById("test");

let fourWords = [];
let correct = [];

const wrong = () => {
  btnTest.style.backgroundColor = failColor;
  btnTest.innerHTML = failText;
};

const next = () => {
  btnTest.style.backgroundColor = correctColor;
  btnTest.innerHTML = correctText;
  // FALSK STOPP
  setTimeout(() => {genereateWords()}, 2000);
  // btnTest.addEventListener("click", genereateWords);
  // genereateWords();
};

const genereateWords = () => {
  btnTest.style.backgroundColor = "var(--white)";
  btnTest.innerHTML = "Test";
  fourWords = [];
  correct = [];
  for (let i = 0; i < 4; i++) {
    var randomWord = Math.floor(Math.random() * wordList.length);
    fourWords.push(wordList[randomWord]);
    spans[i].innerHTML = wordList[randomWord];
  }
  console.log("words :", fourWords);
  checkOrder();
};

const checkOrder = () => {
  let copyFourWords = fourWords.slice();
  correct = copyFourWords.sort();
  console.log("Sortet: ", correct);
};

const validate = () => {
  let inpTextToArray = [...inpText];
  let result = true;
  for (let i = 0; i < inpTextToArray.length; i++) {
    if (inpTextToArray[i].value > 4) {
      console.log("TALLET MÅ VÆRE MINDRE");
      result = false;
    }

    if (inpTextToArray[i].value < 1) {
      console.log("TALLET MÅ VÆRE STØRRE");
      result = false;
    }

    if (isNaN(inpTextToArray[i].value)) {
      console.log("KUN TALL");
      result = false;
    }

    // Hvis ikke alle er rett
    if (correct.indexOf(fourWords[i]) != inpTextToArray[i].value - 1) {
      result = false;
    }
  }

  console.log(result);

  result ? next() : wrong();
};

window.onload = function () {
  genereateWords();
};

btnTest.addEventListener("click", validate);

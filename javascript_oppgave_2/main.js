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

// Gjøre om til array
// Kilde: https://stackoverflow.com/questions/7459704/in-javascript-what-is-the-best-way-to-convert-a-nodelist-to-an-array
const inpText = Array.from(document.getElementsByTagName("input"));
const spans = document.getElementsByTagName("span");
const btnTest = document.getElementById("test");

let fourWords = [];
let correctFourWords = [];

const wrong = () => {
  btnTest.style.backgroundColor = failColor;
  btnTest.innerHTML = failText;
};

const next = () => {
  btnTest.style.backgroundColor = correctColor;
  btnTest.innerHTML = correctText;
  btnTest.removeEventListener("click", validate);
  btnTest.addEventListener("click", generateWords);
};

const generateWords = () => {
  if ((btnTest.value = correctText)) {
    // Reset input
    for (let i = 0; i < 4; i++) {
      inpText[i].value = "";
    }

    btnTest.style.backgroundColor = "var(--white)";
    btnTest.innerHTML = "Test";

    fourWords = [];
    correctFourWords = [];
    btnTest.removeEventListener("click", generateWords);
    btnTest.addEventListener("click", validate);
  }

  for (let i = 0; i < 4; i++) {
    var randomWord = Math.floor(Math.random() * wordList.length);

    fourWords.push(wordList[randomWord]);
    spans[i].innerHTML = wordList[randomWord];
  }
  checkOrder();
};

const checkOrder = () => {
  let copyFourWords = fourWords.slice();
  correctFourWords = copyFourWords.sort();
  console.log("Sortet: ", correctFourWords);
};

const validate = () => {
  let inpTextToArray = [...inpText];
  // Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
  const inpValues = new Array(4);
  let result = true;

  const inputList = inpTextToArray.filter((val) => val.value);

  if (inputList.length < 4) {
    console.log("Mangler input");
    result = false;
    return wrong();
  }

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

    inpValues.splice(inpTextToArray[i].value - 1, 1, fourWords[i]);

  }
  // Hvis ikke alle er rett, sammenlikne
  // Kilde: https://masteringjs.io/tutorials/fundamentals/compare-arrays
  if (JSON.stringify(correctFourWords) != JSON.stringify(inpValues)) {
    console.log("BRUK TALL FRA 1-4, FEIL REKKEFØLGE");
    result = false;
  }

  result ? next() : wrong();
};

window.onload = function () {
  generateWords();
};

btnTest.addEventListener("click", validate);

/**
  Step 1:
   - Forrige knappen er skjult (hidden attr er aktive)
   - Kun steg 1 i nav er grønn (har klassen active)
   - Skjema for navn vises
  Step 2:
   - Forrige knappen er synlig (hidden attr er borte)
   - Kun steg 2 i nav er grønn (har klassen active)
   - Skjema for epost vises
  Step 3:
   - Forrige knappen er synlig
   - Kun steg 3 i nav er grønn (har klassen active)
   - Skjema for alder vises
   - Neste knappen er skjult (hidden attr er aktive)
   - Send knappen er synlig (hidden attr er borte)
  Step 4:
   - Skjema er skjult
   - Kun teksten "Takk ditt skjema er sendt" vises og lages med JavaScript
  Next:
   - Skal endre hvilket step vi er på (hvilket steg som er grønt)
   - Skal trigge validering av skjema
     - Skal vise feilmelding "Feil" hvis validering feiler
     - Skal fjerne feilmelding "Feil" hvis validering passerer etter at vi har hatt en feil (legge til hidden attr)
          - Validering for navn er mellomrom og mer enn 10 bokstaver
          - Validering for e-post er at den må ha en @
          - Validering for alder er over 20
   - Skal lagre det vi skrev i skjema
  Prev:
   - Skal endre hvilket steg vi er på
   - Skal fortsatt vise det vi har skrevet i input
 */

// #### START HER ####
let step = 1;
let navStep = [];
let errors = [];

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const btnSend = document.getElementById("send");
const navSteps = document.querySelectorAll(".step");

const sectionOne = document.getElementById("step_one");
const sectionTwo = document.getElementById("step_two");
const sectionThree = document.getElementById("step_three");

const error = document.querySelectorAll(".error");

navSteps.forEach((step) => {
  navStep.push(step);
});

const nextStep = () => {
  if (step < 3) {
    step++;
    console.log(step);
    showPrev();
    handleActiveNav();
    displaySection();
    if (step == 3) {
      btnNext.hidden = true;
      btnSend.hidden = false;
    }
  }
};

const prevStep = () => {
  btnNext.hidden = false;
  btnSend.hidden = true;

  // if (step > 1) {
  step--;
  console.log(step);
  showPrev();
  handleActiveNav();
  displaySection();
  // }
};

const showPrev = () => {
  if (step > 1) {
    btnPrev.hidden = false;
  } else {
    btnPrev.hidden = true;
  }
};

const handleActiveNav = () => {
  navStep.forEach((nav) => {
    nav.classList.contains("active") && nav.classList.remove("active");
  });

  navStep[step - 1].classList.add("active");
};

const displaySection = () => {
  sectionOne.hidden && step == 1
    ? (sectionOne.hidden = false)
    : (sectionOne.hidden = true);
  sectionTwo.hidden && step == 2
    ? (sectionTwo.hidden = false)
    : (sectionTwo.hidden = true);
  sectionThree.hidden && step == 3
    ? (sectionThree.hidden = false)
    : (sectionThree.hidden = true);
};

const valdiation = () => {
  const inpName = document.getElementById("name").value;
  const inpEmail = document.getElementById("email").value;
  const inpAge = document.getElementById("age").value;

  if (step == 1) {
    if (inpName.length > 10) {
      nextStep();
      error.item(`${step - 1}`).hidden = true;
    } else {
      error.item(`${step - 1}`).hidden = false;
    }
  } else if (step == 2) {
    if (inpEmail.includes("@")) {
      nextStep();
      error.item(`${step - 1}`).hidden = true;
    } else {
      error.item(`${step - 1}`).hidden = false;
    }
  } else if (step == 3) {
    if (inpAge > 20) {
      // nextStep();
      btnNext.hidden = false;
      // (btnSend.hidden = true);
      error.item(`${step - 1}`).hidden = true;
    } else {
      error.item(`${step - 1}`).hidden = false;
    }
  }
};

btnNext.addEventListener("click", valdiation);
btnPrev.addEventListener("click", prevStep);

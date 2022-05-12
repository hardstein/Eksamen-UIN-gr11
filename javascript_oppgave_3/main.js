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

const validation = () => {
  const inpName = document.getElementById("name").value;
  const inpEmail = document.getElementById("email").value;

  if (step === 1) {
    if (inpName.length > 10 && inpName.includes(" ")) {
      error.item(`${step - 1}`).hidden = true;
      nextStep();
    } else {
      error.item(`${step - 1}`).hidden = false;
    }
  } else if (step === 2) {
    if (inpEmail.includes("@")) {
      error.item(`${step - 1}`).hidden = true;
      nextStep();
      // Hvis den er tom, som skjer når man kommer til neste step i formen.
    } else if (inpEmail == " ") {
      error.item(`${step - 1}`).hidden = true;
    } else {
      error.item(`${step - 1}`).hidden = false;
    }
  }
};

const completedForm = (e) => {
  const inpAge = document.getElementById("age").value;
  e.preventDefault();

  if (step === 3 && inpAge >= 18) {
    error.item(`${step - 1}`).hidden = true;

    const title = document.createElement("h1");
    const text = document.createTextNode("Takk ditt skjema er sendt");
    title.appendChild(text);
    const schema = document.getElementsByTagName("div");
    schema.item(0).hidden = true;
    const body = document.getElementsByTagName("main");
    body.item(0).appendChild(title);
  } else {
    error.item(`${step - 1}`).hidden = false;
  }
  console.log("inpAge: ", inpAge);
};

btnNext.addEventListener("click", validation);
btnPrev.addEventListener("click", prevStep);
btnSend.addEventListener("click", completedForm);

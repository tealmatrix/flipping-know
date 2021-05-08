const flipCard = document.querySelector(".flip-card");
flipCard.addEventListener("mouseleave", mouseOutHandler);
const flipCardBack = document.querySelector(".flip-card-back");
const flipCardFront = document.querySelector(".flip-card-front");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
let date = "> Last Login " + new Date();
let newDateString = date.slice(0, 38);
const firstTerminalLine = document.querySelector("#firstTerminalLine");
const firstTerminalLine2 = document.querySelector("#firstTerminalLine2");
const paragraph = document.querySelector("#firstTerminalLine2");
firstTerminalLine.textContent = newDateString;
firstTerminalLine2.textContent = newDateString;
const questionAnswerArray = [
  {
    question: "> What to do first when using github?",
    answer: "> Make a folder in VScode & make a repos in Hithub!!",
  },
  {
    question: "> First step in the terminal?",
    answer: "> git init",
  },
  {
    question: "> Second step in the terminal?",
    answer: "> git add .",
  },
  {
    question: "> Third step in the terminal?",
    answer: "> git remote add origin `put in git address`",
  },
  {
    question: "> Fourth step in the terminal?",
    answer: "> git commit -m `message`",
  },
  {
    question: "> Fifth step in the terminal?",
    answer: "> git push -u origin master",
  },
  {
    question: "> Next step?",
    answer: "> github - settings - branch:master Save",
  },
  {
    question: "> What's next in the terminal?",
    answer: "> npm i --save gh-pages",
  },
];
let counter = 0;
let animationCounter = 0;
let clickCounter = 0;
const btn = document.querySelector("#btn");
btn.addEventListener("click", buttonHandler);

function mouseOutHandler() {
  console.log("hello");
  date = "> Last Login " + new Date();
  newDateString = date.slice(0, 38);
  setTimeout(() => {
    answer.textContent = questionAnswerArray[counter].answer;
    counter++;
  }, 200);
  firstTerminalLine.textContent = newDateString;
  firstTerminalLine2.textContent = newDateString;
  question.textContent = questionAnswerArray[counter].question;
  if (counter > questionAnswerArray.length) {
    counter = 0;
  }
}
function buttonHandler() {
  date = "> Last Login " + new Date();
  newDateString = date.slice(0, 38);
  firstTerminalLine.textContent = newDateString;
  firstTerminalLine2.textContent = newDateString;
  if (animationCounter == 0) {
    flipCard.classList.remove("flip-card-animation2");
    flipCard.classList.add("flip-card-animation");
  } else {
    flipCard.classList.remove("flip-card-animation");
    flipCard.classList.add("flip-card-animation2");
    question.textContent = questionAnswerArray[counter].question;
    answer.textContent = questionAnswerArray[counter].answer;
    counter++;
  }
  animationCounter++;
  if (animationCounter == 2) {
    animationCounter = 0;
  }

  if (counter > questionAnswerArray.length) {
    counter = 0;
  }
}

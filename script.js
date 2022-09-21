const startBtn = document.getElementById("start");
const container = document.getElementById("quiz-container");
let questionHolder;
let answers;
let buttons;
let nextBtn;
let correctBtn;
let questionCounter = 0;
let score = 0;

startBtn.addEventListener("click", () => {
  container.innerHTML = `
    <header><p id="question"></p></header>
    <main id="answers" class="answers">
      <button class="answer-button"></button>
      <button class="answer-button"></button>
      <button class="answer-button"></button>
      <button class="answer-button"></button>
    </main>
    <footer class="controls">
      <button id="next-button" class="next disabled" disabled>
        السؤال التالي
      </button>
    </footer>`;
  questionHolder = document.getElementById("question");
  answers = document.getElementById("answers");
  buttons = Array.from(answers.children);
  nextBtn = document.getElementById("next-button");
  nextBtn.addEventListener("click", getNextQuestion);
  getNextQuestion();
  container.className = "quiz-container-questions"
});

function getNextQuestion() {
  nextBtn.classList.add("disabled")
  nextBtn.disabled = true;
  buttons.forEach((btn)=>{
    btn.className = "answer-button"
    btn.disabled = false;
    btn.dataset.correct = false
  })

  let question = questionList[questionCounter];
  setNextQuestion(question);
  questionCounter++;
  if (questionCounter == questionList.length) {
    nextBtn.innerText = "عرض النتيجة";
    nextBtn.removeEventListener("click", getNextQuestion);
    nextBtn.addEventListener("click", printResult);
  }
}

function printResult(){
  console.log("the score is: " + score);
}

function setNextQuestion(question) {
  {
    questionHolder.innerText = question.text;

    for (let index = 0; index < buttons.length; index++) {
      let btn = buttons[index];
      let answer = question.options[index];
      btn.innerText = answer.text;
      if (answer.correct) {
        btn.dataset.correct = answer.correct;
        correctBtn = btn;
      }
      btn.addEventListener("click", selectAnswer);
    }
  }
}

function selectAnswer(e) {
  disableOptions(e.target);
  if (e.target.dataset.correct == "true") {
    score++;
    correctBtn.classList.add("green-backgorund");
  } else {
    e.target.classList.add("wrong");
  }
  nextBtn.classList.remove("disabled")
  nextBtn.disabled = false;
}

function disableOptions(selected) {
  buttons.forEach((btn) => {
    btn.classList.add("disabled-option");
    btn.disabled = true;
  });
  correctBtn.classList.add("correct");
  selected.classList.add("selected-option");
}

const questionList = [
  {
    text: "متى تأسست السعودية؟",
    options: [
      { text: "عام 1932 يوم 20 سبتمبر" },
      { text: "عام 1932 يوم 23 سبتمبر", correct: true },
      { text: "عام 1930 يوم 20 سبتمبر" },
      { text: "عام 1930 يوم 23 سبتمبر" },
    ],
  },
  {
    text: "متى دخل الانترنت السعودية لأول مره؟",
    options: [
      { text: "عام 1999" },
      { text: "عام 1990" },
      { text: "عام 1993" },
      { text: "عام 1994", correct: true },
    ],
  },
  
];

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
  container.className = "quiz-container-questions";
});

function getNextQuestion() {
  nextBtn.classList.add("disabled");
  nextBtn.disabled = true;
  buttons.forEach((btn) => {
    btn.className = "answer-button";
    btn.disabled = false;
    btn.dataset.correct = false;
  });

  let question = questionList[questionCounter];
  setNextQuestion(question);
  questionCounter++;
  if (questionCounter == questionList.length) {
    nextBtn.innerText = "عرض النتيجة";
    nextBtn.removeEventListener("click", getNextQuestion);
    nextBtn.addEventListener("click", printResult);
  }
}

function printResult() {
  container.innerHTML = `<p id="intro">
  لقد جاوبت على ${score} من أصل 8 أسئلة <br /><br />
  شارك الكل بنتيجتك على تويتر 🥳💚
</p>
<a class="twitter-btn" target="_blank" href="https://twitter.com/intent/tweet?text=لقد%20جاوبت%20على%20${score}%20أسئلة%20من%20أصل%208">
  Tweet</a
>`;
}

function setNextQuestion(question) {
  {
    questionHolder.innerHTML = question.text;

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
  nextBtn.classList.remove("disabled");
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
    ],
  },
  {
    text: "متى دخل الانترنت <br> السعودية لأول مره؟",
    options: [
      { text: "عام 1999" },
      { text: "عام 1990" },
      { text: "عام 1994", correct: true },
    ],
  },
  {
    text: "متى اُنشي تطبيق ابشر؟",
    options: [
      { text: "عام 2005", correct: true },
      { text: "عام 2008" },
      { text: "عام 2012" },
    ],
  },
  {
    text: "من هو اول ملك حمل لقب <br> خادم الحرمين الشريفين؟",
    options: [
      { text: "الملك فيصل رحمه الله" },
      { text: "الملك فهد رحمه الله", correct: true },
      { text: "الملك عبد الله رحمه الله" },
    ],
  },
  {
    text: "متى اُنشأت الهيئة السعودية للبيانات<br> و الذكاء الاصطناعي في السعودية؟",
    options: [
      { text: "عام 2017" },
      { text: "عام 2020" },
      { text: "عام 2019", correct: true },
    ],
  },
  {
    text: "في عهد اي ملك وصل الانترنت<br> لعامة الناس بالمملكة؟",
    options: [
      { text: "الملك فهد رحمه الله", correct: true },
      { text: "الملك فيصل رحمه الله" },
      { text: "الملك عبد الله رحمه الله" },
    ],
  },
  {
    text: "متى تحولت المعاملات الحكومية<br> من ورقية إلى معاملات إلكترونية؟",
    options: [
      { text: "عام 2009" },
      { text: "عام 2007" },
      { text: "عام 2005", correct: true },
    ],
  },
  {
    text: "كم عدد ملوك المملكة العربية السعودية ؟",
    options: [
      { text: "سبعة", correct: true },
      { text: "خمسة" },
      { text: "ثمانية" },
    ],
  },
];

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
  container.innerHTML = `<p id="outro">
  حصلت على ${score} نقاط<br />
  من أصل 8 🥳<br />
  شاركنا النتيجة على تويتر
  <a
    id="twitter-btn"
    target="_blank"
    href="https://twitter.com/intent/tweet?text=%D9%88%D9%85%D9%86+%D8%A8%D8%A7%D8%A8+%E2%80%9D+%D9%87%D9%85%D9%91%D8%A9+%D8%AD%D8%AA%D9%89+%D8%A7%D9%84%D9%82%D9%85%D9%91%D8%A9+%E2%80%9C+%D8%A7%D8%AB%D8%A8%D8%AA+%D9%84%D9%86%D8%A7+%D9%87%D9%85%D9%91%D8%AA%D9%83+%0D%0A%D9%88%D8%A3%D9%88%D8%B5%D9%84+%D9%81%D9%8A%D9%87%D8%A7+%D9%84%D9%84%D9%82%D9%85%D9%91%D8%A9+%D9%85%D8%B9+%D8%A3%D8%B3%D8%A6%D9%84%D8%A9+%D9%86%D8%A7%D8%AF%D9%8A%D9%86%D8%A7%21+%40uqucc%0D%0A%0D%0A%D8%A3%D9%86%D8%A7+%D9%88%D8%B5%D9%84%D8%AA+%D8%A8%D9%87%D9%85%D9%91%D8%AA%D9%8A+%D8%A5%D9%84%D9%89+${score}+%D9%85%D9%86+%D8%A3%D8%B5%D9%84+8+%0D%0A%D9%88+%D8%A3%D9%86%D8%AA+%D8%8C+%D8%A8%D8%AA%D9%82%D8%AF%D8%B1+%D8%AA%D9%86%D8%A7%D9%81%D8%B3%D9%86%D9%8A+%D8%B9%D9%84%D9%89+%D8%A7%D9%84%D9%82%D9%85%D9%91%D8%A9%D8%9F%0D%0A%23%D8%A7%D9%84%D9%8A%D9%88%D9%85_%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A_92%0D%0A%0D%0Ahttps%3A%2F%2Fsaudi-national-day-with-cc.netlify.app"
  >
    مشاركة النتيجة&nbsp;
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-twitter"
      viewBox="0 0 16 16"
    >
      <path
        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
      />
    </svg>
  </a>
</p>
<div>
  <p id="credit">
    &nbsp;صمم هذا الموقع بـ
    <img width="8%" src="./images/like.png" />
    بواسطة: <br />
    <span>
      <a
        id="credit-btn"
        target="_blank"
        href="https://twitter.com/A_Bahmeed"
      >
        عبدالعزيز باحميد&nbsp;&nbsp;
        <svg
          id="twitter-logo"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-twitter"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
          />
        </svg> </a
    ></span>
  </p>
</div>`;
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
      { text: "عام 1932م يوم 20 سبتمبر" },
      { text: "عام 1932م يوم 23 سبتمبر", correct: true },
      { text: "عام 1930م يوم 20 سبتمبر" },
    ],
  },
  {
    text: "متى دخل الإنترنت <br> السعودية لأول مرة؟",
    options: [
      { text: "عام 1999م" },
      { text: "عام 1990م" },
      { text: "عام 1994م", correct: true },
    ],
  },
  {
    text: "متى اُنشي تطبيق ابشر؟",
    options: [
      { text: "عام 2005م", correct: true },
      { text: "عام 2008م" },
      { text: "عام 2012م" },
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
      { text: "عام 2017م" },
      { text: "عام 2020م" },
      { text: "عام 2019م", correct: true },
    ],
  },
  {
    text: "في عهد أي ملك وصل الإنترنت<br> لعامة الناس بالمملكة؟",
    options: [
      { text: "الملك فهد رحمه الله", correct: true },
      { text: "الملك فيصل رحمه الله" },
      { text: "الملك عبد الله رحمه الله" },
    ],
  },
  {
    text: "متى تحولت المعاملات الحكومية<br> من ورقية إلى معاملات إلكترونية؟",
    options: [
      { text: "عام 2009م" },
      { text: "عام 2007م" },
      { text: "عام 2005م", correct: true },
    ],
  },
  {
    text: "كم عدد ملوك المملكة العربية السعودية؟",
    options: [
      { text: "سبعة", correct: true },
      { text: "خمسة" },
      { text: "ثمانية" },
    ],
  },
];

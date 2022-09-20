const startBtn = document.getElementById("start");
const container = document.getElementById("quiz-container")
startBtn.addEventListener("click", () => {
    container.innerHTML = `<header class=""><p id="question">متى تاسست السعودية ؟</p></header>
    <main class="answers">
      <button class="answer-button">عام 1950 ميلادي</button>
      <button class="answer-button">عام 1932 ميلادي</button>
      <button class="answer-button">عام 1911 ميلادي</button>
      <button class="answer-button">عام 1966 ميلادي</button>
    </main>
    <footer class="controls">
      <button id="next" class="">
        السؤال التالي
      </button>
    </footer>`
});

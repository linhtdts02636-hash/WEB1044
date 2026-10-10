import examQuestions from "../data/exam-question.js";
import exams from "../data/exam-data.js";



const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const examId = urlParams.get("id");
console.log(examId);
const questions = examQuestions[examId];

const examInfo = exams[examId]

const title = document.getElementById("title")
const description = document.getElementById("description")

title.textContent = examInfo.title
description.textContent = examInfo.description


function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
const shuffled = shuffle(questions);
const total = shuffled.length;
let answered = new Array(total).fill(false);

document.getElementById("totalCount").textContent = total;
const qContainer = document.getElementById("questionContainer");

let finalHTML = "";

shuffled.forEach((q, qi) => {
  const shuffledOptions = shuffle(
    q.options.map((text, idx) => ({ text, idx })),
  );
  const letters = ["A", "B", "C", "D"];
  let optionHTML = shuffledOptions
    .map(
      (opt, oi) => `
                <label class="option-label d-flex" for="q${qi}_${oi}">
                    <input  type="radio" class="btn-check"  id="q${qi}_${oi}" name="q${qi}" value="${opt.idx}" data-index="${qi}"
                    />
                <label class="btn  text-start w-100" for="q${qi}_${oi}">
                        ${letters[oi]} — ${opt.text}
                </label>
                </label>

            `,
    )
    .join("");

  finalHTML += `
                <div class="question-block" id="qblock-${qi}">
                <div class="question-num">Câu ${qi + 1}</div>
                <div class="question-text">${q.text}</div>
                <div class="options-group mb-5">${optionHTML}</div>
                </div>
            `;
});

qContainer.innerHTML = finalHTML;

qContainer.addEventListener("change", (event) => {
  if (event.target.classList.contains("btn-check")) {
    const qi = parseInt(event.target.getAttribute("data-index"), 10);
    markAnswered(qi);
  }
});




let timeLeft = examInfo.time * 60;
const countdownEl = document.getElementById("countdown");
  countdownEl.textContent = `${examInfo.time}:00`;
const timer = setInterval(() => {
  timeLeft--;
  const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");
  countdownEl.textContent = `${m}:${s}`;
  if (timeLeft <= 60) countdownEl.classList.add("urgent");
  if (timeLeft <= 0) {
    clearInterval(timer);
    submitExam();
  }
}, 1000);

function markAnswered(qi) {
  if (!answered[qi]) {
    answered[qi] = true;
    const count = Object.values(answered).filter(Boolean).length;
    document.getElementById("answerCount").textContent = count;
    document.getElementById("progressBar").style.width =
      (count / total) * 100 + "%";
  }
}

const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", () => {
    submitExam()
})

function submitExam() {
  clearInterval(timer);
  const selected = {};
  document.querySelectorAll("input.btn-check").forEach((input) => {
    if (input.checked) selected[input.getAttribute("data-index")] = input.value;
  });
  const attempt = {
    examId,
    examTitle: examInfo.title,
    order: shuffled.map((q) => q.id),
    selected,
    answered: Object.keys(selected).length,
    finishedAt: new Date().toLocaleString("vi-VN"),
    duration: examInfo.time * 60 - timeLeft,
    studentName: localStorage.getItem("examStudentName") || "Thí sinh",
  };
  localStorage.setItem("examAttempt", JSON.stringify(attempt));
  window.location.href = "ket-qua.html?id=" + examId;
}

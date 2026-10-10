import calculateResult from "./calculate-results.js";

const result = calculateResult();

const user = JSON.parse(localStorage.getItem("currentUser") || "null");
const nameEl = document.querySelector(".result-name .hero");
if (nameEl && user) nameEl.textContent = user.name;

if (result) {
  const scoreIndex = document.querySelector(".score-index");
  scoreIndex.style.left = Math.min(result.score10 * 10, 100) + "%";
  scoreIndex.querySelector(".score").textContent = result.score10.toFixed(1);

  const scoreInfo = document.querySelector(".score-info");
  scoreInfo.querySelector("h3.fw-bold").textContent =
    result.score10.toFixed(1) + " / 10";
  scoreInfo.querySelector("h3:not(.fw-bold)").textContent =
    "XẾP LOẠI: " + result.grade;
  scoreInfo.querySelector("p.text-primary").textContent =
    "Thời gian hoàn thành: " + (result.finishedAt || "—");
}
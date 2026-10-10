import exams from "../data/exam-data.js";

const examContainer = document.getElementById("exam-container");
const searchInput = document.getElementById("examSearch");
const subjectFilter = document.getElementById("examSubject");
const limit = parseInt(examContainer.dataset.limit);
const allEntries = Object.entries(exams);
const entries = Number.isNaN(limit) ? allEntries : allEntries.slice(0, limit);

const subjectClasses = {
  "Sinh học": "bio",
  "Toán học": "math",
  "Sử học": "his",
  "Văn học": "lit"
};

function render(list) {
  examContainer.innerHTML = list.map(([id, exam]) => `
    <div class="col-md-6 col-lg-4">
        <div class="card h-100">
            <div class="card-category ${subjectClasses[exam.subject] || ''}">
                <span class="card-category-text">${exam.subject}</span>
            </div>
            <img src="${exam.src}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${exam.title}</h5>
                <p class="card-text">${exam.description}</p>
                <div class="d-flex flex-column">
                    <span><i class="bi bi-clock"> ${exam.time} phút</i></span>
                    <span><i class="bi bi-question-circle"> ${exam.question} câu</i></span>
                </div>
            </div>
            <button class="btn btn-primary enter-exam" data-bs-toggle="modal" data-bs-target="#modal"
                data-id="${id}">Kiểm tra ngay <i class="bi bi-arrow-right"></i></button>
        </div>
    </div>`).join("");
}

function applyFilter() {
  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const subject = subjectFilter ? subjectFilter.value : "";
  const filtered = entries.filter(([id, exam]) =>
    exam.title.toLowerCase().includes(keyword) && (!subject || exam.subject === subject)
  );
  render(filtered);
}

if (subjectFilter) {
  const subjects = [...new Set(allEntries.map(([id, exam]) => exam.subject))];
  subjectFilter.innerHTML = '<option value="">Tất cả môn</option>' +
    subjects.map((s) => `<option value="${s}">${s}</option>`).join("");
  subjectFilter.addEventListener("change", applyFilter);
}

if (searchInput) {
  searchInput.addEventListener("input", applyFilter);
}

render(entries);

examContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".enter-exam");
  if (button) {
    const id = button.getAttribute("data-id");
    start(id);
  }
});

function start(id) {
  window.location.href = `lam-bai.html?id=${id}`;
}
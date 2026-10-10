import examQuestions from "../data/exam-question.js";

const ATTEMPT_KEY = "examAttempt";

function getExamId() {
  return new URLSearchParams(window.location.search).get("id");
}

function getGrade(score) {
  if (score >= 10) return "A+";
  if (score >= 9) return "A";
  if (score >= 8) return "B";
  if (score >= 7) return "C";
  if (score >= 5) return "D";
  return "F";
}

function calculateResult() {
  const examId = getExamId();
  let attempt = null;
  try {
    attempt = JSON.parse(localStorage.getItem(ATTEMPT_KEY));
  } catch (e) {
    attempt = null;
  }
  if (!attempt || attempt.examId != examId) return null;

  const questions = examQuestions[examId] || [];
  const lookup = new Map(questions.map((q) => [q.id, q]));
  const order = Array.isArray(attempt.order)
    ? attempt.order
    : questions.map((q) => q.id);
  const total = order.length;

  const correctCount = order.reduce((count, qid, qi) => {
    const q = lookup.get(qid);
    const selected = attempt.selected && attempt.selected[qi];
    if (selected !== undefined && selected !== null && Number(selected) === q.correct) {
      return count + 1;
    }
    return count;
  }, 0);

  const score10 = Math.round((correctCount / total) * 100) / 10;

  return {
    total,
    score10,
    grade: getGrade(score10),
    finishedAt: attempt.finishedAt || null,
  };
}

export default calculateResult;
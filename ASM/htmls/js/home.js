let current = 0;
const slides = document.querySelectorAll(".slide-img");
function showSlide(i) {
  slides[current].classList.remove("active");
  current = (i + slides.length) % slides.length;
  slides[current].classList.add("active");
}
document.getElementById("prevBtn").addEventListener("click", function () { showSlide(current - 1); });
document.getElementById("nextBtn").addEventListener("click", function () { showSlide(current + 1); });
setInterval(function () { showSlide(current + 1); }, 4000);

function redirect() {
  window.location.href = "danh-sach.html";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", function () {
  document.getElementById("backToTop").style.display = window.scrollY > 400 ? "block" : "none";
});
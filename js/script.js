document.getElementById("button").addEventListener("click", function () {
  let nama = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let interest = document.getElementById("interest").value;

  if (!nama) {
    document.getElementById("name-error").innerText = "Name cannot be empty";
  }

  if (!email) {
    document.getElementById("email-error").innerText = "Email cannot be empty";
  }

  if (!interest) {
    document.getElementById("interest-error").innerText = "Pick one option";
  }
});

const carouselSlides = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 3000;

function nextSlide() {
  carouselSlides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselSlides.length;
  carouselSlides[currentIndex].classList.add("active");
}

function startSlide() {
  setInterval(nextSlide, interval);
}

(function () {
  startSlide();
})();

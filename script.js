function Strength(password) {
  let i = 0;
  if (password.length > 6) {
    i++;
  }
  if (password.length >= 8) {
    i++;
  }

  if (/[A-Z]/.test(password)) {
    i++;
  }

  if (/[0-9]/.test(password)) {
    i++;
  }

  if (/[A-Za-z0-8]/.test(password)) {
    i++;
  }

  return i;
}

let container = document.querySelector(".container");
document.addEventListener("keyup", function (e) {
  let password = document.querySelector("#YourPassword").value;

  let strength = Strength(password);
  if (strength <= 2) {
    container.classList.add("weak");
    container.classList.remove("moderate");
    container.classList.remove("strong");
  } else if (strength >= 2 && strength <= 4) {
    container.classList.remove("weak");
    container.classList.add("moderate");
    container.classList.remove("strong");
  } else {
    container.classList.remove("weak");
    container.classList.remove("moderate");
    container.classList.add("strong");
  }
});

let password = document.querySelector("#YourPassword");
let show = document.querySelector(".show");
show.onclick = function () {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    show.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    show.classList.remove("hide");
  }


  ('')
};

document.addEventListener("DOMContentLoaded", function () {
  const carouselText = document.getElementById("carouselText");
  const items = document.querySelectorAll(".carousel-item");
  const indicatorsContainer = document.getElementById("carouselIndicators");

  let currentIndex = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.setAttribute("data-active", i === index);
    });

    updateIndicators(index);
  }

  function updateIndicators(index) {
    const indicators = Array.from(indicatorsContainer.children);

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  function createIndicators() {
    items.forEach((_, i) => {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      indicator.addEventListener("click", () => showSlide(i));
      indicatorsContainer.appendChild(indicator);
    });
  }

  createIndicators();
  showSlide(currentIndex); // Mostrar o primeiro slide
  setInterval(nextSlide, 3000); // Muda o slide a cada 3 segundos (3000 milissegundos)
});



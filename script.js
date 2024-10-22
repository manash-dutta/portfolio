const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section");
const navbarItems = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-container");
const progressBars = document.querySelectorAll(".progress-percent");

const navbarOffsetTop = navbar.offsetTop;
const progressPercents = [95, 92, 85, 75, 83, 90];

const loadPage = () => {
  // Sticking Navabar to the top after scrolling up from landing page
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // Highlighting the navbar icons when scroll reaches the section
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 20) {
      navbarItems.forEach((item) => item.classList.remove("change"));

      navbarItems[i].classList.add("change");
    }
  });

  // Activate progress bars when they are visible
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    progressBars.forEach((bar, i) => {
      bar.style.width = `${progressPercents[i]}%`;
      bar.previousElementSibling.firstElementChild.textContent =
        progressPercents[i];
    });
  }
};

window.addEventListener("scroll", () => {
  loadPage();
});

loadPage();

window.addEventListener("resize", () => {
  window.location.reload();
});

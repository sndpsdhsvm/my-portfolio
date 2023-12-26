/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: [
    "Designer",
    "Developer",
    "DevOps",
    "Gamer",
    "Video Editor",
    "Twitch Streamer",
    "QA",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 50 });
sr.reveal(".featured-text-info", { delay: 100 });
sr.reveal(".featured-text-btn", { delay: 100 });
sr.reveal(".social_icons", { delay: 100 });
sr.reveal(".featured-image", { delay: 150 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 100 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 50 });
srLeft.reveal(".contact-info", { delay: 50 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 1000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 50 });
srRight.reveal(".form-control", { delay: 50 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ----- MODE CHECKBOX STATE ----- */
const modeSwitch = document.getElementById("mode-switch");
const themeLink = document.getElementById("theme-style");

modeSwitch.addEventListener("change", function () {
  if (modeSwitch.checked) {
    themeLink.href = "assets/css/dark-mode.css";
  } else {
    themeLink.href = "assets/css/light-mode.css";
  }
});

/* ----- SET MODES USING USER PREFERENCE ----- */
function detectTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    themeLink.href = "assets/css/dark-mode.css";
    modeSwitch.checked = true;
  } else {
    themeLink.href = "assets/css/light-mode.css";
    modeSwitch.checked = false;
  }
}

const userTheme = detectTheme();

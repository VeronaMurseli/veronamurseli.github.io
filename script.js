/* =====================
   TYPING EFFECT
   ===================== */
const typingText = "Hi, I'm Verona Murseli";
let charIndex = 0;
let deleting = false;
const typingEl = document.getElementById("typing");

function typeLoop() {
  if (!typingEl) return;

  if (!deleting) {
    typingEl.textContent = typingText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === typingText.length) {
      deleting = true;
      setTimeout(typeLoop, 1000);
      return;
    }
  } else {
    typingEl.textContent = typingText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
    }
  }

  setTimeout(typeLoop, deleting ? 50 : 150);
}

typeLoop();

/* =====================
   SCROLL REVEAL
   ===================== */
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =====================
   MOBILE NAV TOGGLE
   ===================== */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

/* =====================
   MOBILE MENU BUTTON
   HIDE / SHOW ON SCROLL
   ===================== */
let lastScrollY = window.pageYOffset;

window.addEventListener("scroll", () => {
  if (window.innerWidth < 769 && menuToggle) {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      // Scroll down → hide button
      menuToggle.classList.add("hidden");
    } else {
      // Scroll up → show button
      menuToggle.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
  }
});

/* =====================
   THEME TOGGLE
   ===================== */
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

/* =====================
   LANGUAGE SWITCH
   ===================== */
function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

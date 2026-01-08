const typingText = "Hi, I'm Verona Murseli";
let charIndex = 0;
let deleting = false; // für Löschen
const typingEl = document.getElementById("typing");

function typeLoop() {
  if (!deleting) {
    // Tippen
    typingEl.textContent = typingText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === typingText.length) {
      deleting = true; // nach dem kompletten Text löschen
      setTimeout(typeLoop, 1000); // kleine Pause am Ende
      return;
    }
  } else {
    // Löschen
    typingEl.textContent = typingText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false; // von vorne tippen
    }
  }
  setTimeout(typeLoop, deleting ? 50 : 150); // schneller löschen, langsamer tippen
}

typeLoop();



/* SCROLL REVEAL */
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* MOBILE NAV HIDE ON SCROLL */
let lastScroll = 0;
const navEl = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.innerWidth < 769) { // nur auf Handy
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 50) {
      navEl.classList.add("hidden"); // nach unten scroll → nav weg
    } else {
      navEl.classList.remove("hidden"); // scroll nach oben → nav wieder
    }
    lastScroll = currentScroll;
  }
});


/* THEME TOGGLE */
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

/* LANGUAGE SWITCH */
function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

/* TYPING */
const texts = [
  "Hi, I'm Verona Murseli",
  "Business Informatics Student",
];

let i = 0, j = 0;
const el = document.getElementById("typing");

function type() {
  if (j < texts[i].length) {
    el.textContent += texts[i][j++];
    setTimeout(type, 90);
  } else setTimeout(erase, 1500);
}

function erase() {
  if (j > 0) {
    el.textContent = texts[i].substring(0, --j);
    setTimeout(erase, 45);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(type, 600);
  }
}
type();

/* SCROLL REVEAL */
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(s => {
    if (s.getBoundingClientRect().top < window.innerHeight - 100)
      s.classList.add("active");
  });
});

/* NAV HIDE */
let last = 0;
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  let cur = window.pageYOffset;
  nav.classList.toggle("hidden", cur > last && cur > 100);
  last = cur;
});

/* THEME */
function toggleTheme() {
  document.body.classList.toggle("light");
  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark");
}
if (localStorage.getItem("theme") === "light")
  document.body.classList.add("light");

/* LANGUAGE (simple) */
function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

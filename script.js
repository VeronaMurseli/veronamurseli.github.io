/* =====================
   TYPING – NUR EIN TEXT
   ===================== */
const text = "Hi, I'm Verona Murseli";
let index = 0;

const typingEl = document.getElementById("typing");

function typeOnce() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeOnce, 90);
  }
}

typeOnce();

/* =====================
   SCROLL REVEAL
   ===================== */
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

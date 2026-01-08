<script>
/* =====================
   TYPING EFFECT
   ===================== */
const texts = ["Hi, I'm Verona Murseli"];
let index = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function type() {
  if (charIndex < texts[index].length) {
    typingEl.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    setTimeout(type, 800);
  }
}

type();

/* =====================
   SCROLL REVEAL
   ===================== */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
});

/* =====================
   NAV HIDE / SHOW
   ===================== */
let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
  }

  lastScroll = currentScroll;
});
</script>

/* =====================
   TYPING EFFECT
   ===================== */
const texts = [
  "Hi, I'm Verona Murseli",
  "Business Informatics Student",
  "Future ERP Consultant"
];

let textIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function type() {
  if (charIndex < texts[textIndex].length) {
    typingEl.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 1800);
  }
}

function erase() {
  if (charIndex > 0) {
    typingEl.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 45);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 600);
  }
}

type();

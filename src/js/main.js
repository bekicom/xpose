import { initializeCardAnimations } from './animations.js';
import { initializeMobileMenu } from './mobileMenu.js';

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCardAnimations();
    initializeMobileMenu();
});


// type write js
const texts = ["creative", "innovative", "amazing", "dynamic"]; // Matnlar
let index = 0; // Boshlang'ich matn ko'rsatkich

function typeEffect() {
  const typewriterElement = document.querySelector(".typewriter"); // Typewriter elementi
  typewriterElement.textContent = ""; // Eski matnni o'chirish
  void typewriterElement.offsetWidth; // Repaint uchun o'lchamni qayta yuklash
  typewriterElement.textContent = texts[index]; // Yangi matnni qo'shish

  // CSS animatsiyani qayta qo'llash
  typewriterElement.style.animation = "none";
  void typewriterElement.offsetWidth; // Animatsiyani qayta yuklash
  typewriterElement.style.animation =
    "typing 2.5s steps(20, end), blink 0.5s step-end infinite alternate";

  index = (index + 1) % texts.length; // Keyingi matnga o'tish
}

// Har 3 soniyada yangi matnni ko'rsatish
setInterval(typeEffect, 3000);

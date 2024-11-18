import { initializeCardAnimations } from './animations.js';
import { initializeMobileMenu } from './mobileMenu.js';

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCardAnimations();
    initializeMobileMenu();
});


// type write js
const words = ["creative", "innovative", "dynamic", "intelligent"]; // Сўзлар рўйхати
let wordIndex = 0;
let charIndex = 0;
const delay = 200; // Ҳар бир ҳарф учун кечиктириш
const delayBetweenWords = 2000; // Сўзлар орасидаги вақт

const typewriterElement = document.querySelector(".creative");

function typeWord() {
  // Ҳозирги сўздан ҳарфлар киритилади
  if (charIndex < words[wordIndex].length) {
    typewriterElement.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(typeWord, delay);
  } else {
    // Сўз ёзиб бўлингач, кейинги сўзга ўтиш
    setTimeout(deleteWord, delayBetweenWords);
  }
}

function deleteWord() {
  // Ҳар бир ҳарфни ўчириш
  if (charIndex > 0) {
    typewriterElement.textContent = words[wordIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteWord, delay);
  } else {
    // Кейинги сўзга ўтиш
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, delay);
  }
}

// Анимацияни бошлаш
typeWord();


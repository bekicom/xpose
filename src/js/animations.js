export function initializeCardAnimations() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        // Add initial animation class
        card.classList.add('animate-card');
        
        // Calculate delay based on card index
        const delay = Array.from(cards).indexOf(card) * 0.2;
        card.style.animationDelay = `${delay}s`;
    });
}
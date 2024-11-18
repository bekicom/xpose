export function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger?.contains(e.target) && !mobileMenu?.contains(e.target)) {
            mobileMenu?.classList.remove('active');
            hamburger?.classList.remove('active');
        }
    });
}
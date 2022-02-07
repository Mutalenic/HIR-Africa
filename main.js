const mobileMenuOverlay = document.querySelector('.mobileMenu');
const openMenuButton = document.querySelector('.mobileMenuIcon');
const closeMenuButton = document.querySelector('.closeMenuIcon');

function toggleMenu() {
    mobileMenuOverlay.style.display = 'block';

    closeMenuButton.style.display = 'block';
    openMenuButton.style.display = 'none';
}

function closeMenu() {
    mobileMenuOverlay.style.display = 'none';
    openMenuButton.style.display = 'block';
    closeMenuButton.style.display = 'none';
}

openMenuButton.addEventListener('click', () => toggleMenu());
closeMenuButton.addEventListener('click', () => closeMenu());

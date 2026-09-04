/**
 * Navbar Component
 */
import { profileData } from '../data/profile.data.js';

export const navLinksData = [
  { href: '#hero', label: 'Inicio', active: true },
  { href: '#about', label: 'Sobre Mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' }
];

export function renderNavbar() {
  return `
    <div class="nav-container">
      <a href="#hero" class="nav-logo">
        ${profileData.brandLogo}
      </a>

      <nav>
        <ul class="nav-links" id="navLinks">
          ${navLinksData
            .map(
              link => `
            <li><a href="${link.href}" class="${link.active ? 'active' : ''}">${link.label}</a></li>
          `
            )
            .join('')}
        </ul>
      </nav>

      <button class="hamburger" id="hamburger" aria-label="Abrir menú de navegación" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `;
}

/**
 * Initializes mobile hamburger menu behavior
 * @param {HTMLElement} headerElement
 */
export function initNavbarEvents(headerElement) {
  if (!headerElement) return;

  const hamburger = headerElement.querySelector('#hamburger');
  const navLinks = headerElement.querySelector('#navLinks');
  const navItems = headerElement.querySelectorAll('.nav-links a[href^="#"]');

  if (hamburger && navLinks) {
    const toggleMenu = () => {
      const isExpanded = hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      hamburger.setAttribute('aria-expanded', isExpanded.toString());
    };

    hamburger.addEventListener('click', toggleMenu);

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (
        navLinks.classList.contains('active') &&
        !e.target.closest('.nav-links') &&
        !e.target.closest('.hamburger')
      ) {
        toggleMenu();
      }
    });
  }
}

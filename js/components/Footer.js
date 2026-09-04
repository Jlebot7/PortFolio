/**
 * Footer Component
 */
import { profileData } from '../data/profile.data.js';

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <div class="container">
      <p class="footer-text">
        Hecho con <span class="footer-heart">❤️</span> por
        <a href="${profileData.contact.github}" target="_blank" rel="noopener noreferrer">${profileData.name}</a>
        &copy; <span id="year">${currentYear}</span>
      </p>
    </div>
  `;
}

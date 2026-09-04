/**
 * About Section Component
 */
import { profileData } from '../data/profile.data.js';

export function renderAbout() {
  const bioParagraphs = profileData.bio
    .map(p => `<p>${p}</p>`)
    .join('');

  const statsCards = profileData.stats
    .map(
      stat => `
      <div class="stat-card">
        <span class="stat-number">${stat.number}</span>
        <span class="stat-label">${stat.label}</span>
      </div>
    `
    )
    .join('');

  return `
    <section id="about" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title reveal">Sobre Mí</h2>
          <p class="section-subtitle reveal">Conóceme un poco más</p>
        </div>

        <div class="about-grid">
          <div class="about-image-wrapper reveal-left">
            <div class="about-image-ring">
              <img
                src="${profileData.avatarUrl}"
                alt="${profileData.name} — Foto de perfil"
                class="about-image"
                width="280"
                height="280"
                loading="lazy"
              >
            </div>
          </div>

          <div class="about-text reveal-right">
            ${bioParagraphs}

            <div class="about-stats">
              ${statsCards}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

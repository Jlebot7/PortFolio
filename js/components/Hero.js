/**
 * Hero Component
 */
import { profileData } from '../data/profile.data.js';

export function renderHero() {
  return `
    <section id="hero" class="hero">
      <div class="hero-bg-grid" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="hero-greeting reveal">${profileData.greeting}</p>
        <h1 class="hero-name reveal">${profileData.name}</h1>
        <h2 class="hero-title reveal">
          <span class="typing-text"></span><span class="typing-cursor">|</span>
        </h2>
        <p class="hero-description reveal">
          ${profileData.tagline}
        </p>
        <div class="hero-cta reveal">
          <a href="#projects" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            Ver Proyectos
          </a>
          <a href="#contact" class="btn btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Contactar
          </a>
        </div>
      </div>
      <a href="#about" class="scroll-indicator" aria-label="Desplazarse hacia abajo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </a>
    </section>
  `;
}

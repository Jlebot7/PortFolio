/**
 * Projects Section Component
 */
import { projectsData } from '../data/projects.data.js';
import { profileData } from '../data/profile.data.js';

export function renderProjects() {
  const projectCards = projectsData
    .map(
      project => `
      <article class="project-card reveal">
        <div class="project-card-header">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Ver repositorio ${project.title} en GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
        <div class="project-card-body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
        <div class="project-card-footer">
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </article>
    `
    )
    .join('');

  return `
    <section id="projects" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title reveal">Proyectos Destacados</h2>
          <p class="section-subtitle reveal">Una selección de mi trabajo reciente</p>
        </div>

        <div class="projects-grid">
          ${projectCards}
        </div>

        <div class="projects-cta reveal">
          <a href="${profileData.contact.github}?tab=repositories" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Ver todos los proyectos en GitHub
          </a>
        </div>
      </div>
    </section>
  `;
}


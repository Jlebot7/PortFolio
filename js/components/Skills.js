/**
 * Skills Section Component
 */
import { skillsData } from '../data/skills.data.js';

export function renderSkills() {
  const categoryCards = skillsData
    .map(category => {
      const skillTags = category.skills
        .map(skill => {
          const icon = skill.customSvg
            ? skill.customSvg
            : `<i class="${skill.iconClass}"></i>`;

          return `
            <div class="skill-tag">
              ${icon}
              <span>${skill.name}</span>
            </div>
          `;
        })
        .join('');

      return `
        <div class="skill-category reveal">
          <div class="skill-category-header">
            ${category.iconSvg}
            <h3>${category.category}</h3>
          </div>
          <div class="skill-list">
            ${skillTags}
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <section id="skills" class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title reveal">Habilidades Técnicas</h2>
          <p class="section-subtitle reveal">Tecnologías y herramientas que manejo</p>
        </div>

        <div class="skills-grid">
          ${categoryCards}
        </div>
      </div>
    </section>
  `;
}


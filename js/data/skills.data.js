/**
 * Skills & Technologies Data
 */
export const skillsData = [
  {
    category: 'Frontend',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>`,
    skills: [
      { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
      { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
      { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
      { name: 'React', iconClass: 'devicon-react-original colored' }
    ]
  },
  {
    category: 'Backend',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>`,
    skills: [
      { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
      { name: 'Python', iconClass: 'devicon-python-plain colored' },
      { name: 'Java', iconClass: 'devicon-java-plain colored' }
    ]
  },
  {
    category: 'Bases de Datos',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>`,
    skills: [
      { name: 'MySQL', iconClass: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' }
    ]
  },
  {
    category: 'Herramientas',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>`,
    skills: [
      { name: 'Git', iconClass: 'devicon-git-plain colored' },
      { name: 'GitHub', iconClass: 'devicon-github-original' },
      { name: 'VS Code', iconClass: 'devicon-vscode-plain colored' },
      {
        name: 'n8n',
        customSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-15h2v2h-2V7zm0 4h2v6h-2v-6z"/></svg>`
      }
    ]
  }
];

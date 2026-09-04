/**
 * Scroll & Navigation Behavior Module
 */

/**
 * Adds .scrolled class to navbar when user scrolls down
 * @param {HTMLElement} navbar
 * @param {number} threshold
 */
export function initNavbarScroll(navbar, threshold = 50) {
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check on load
}

/**
 * Initializes smooth scrolling for internal anchor links with navbar offset
 * @param {NodeList|HTMLElement[]} links
 * @param {HTMLElement} navbar
 */
export function initSmoothScroll(links, navbar) {
  if (!links || !links.length) return;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Observes sections and updates the active nav link dynamically
 * @param {NodeList|HTMLElement[]} sections
 * @param {NodeList|HTMLElement[]} navItems
 */
export function initActiveSectionObserver(sections, navItems) {
  if (!sections.length || !navItems.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
}

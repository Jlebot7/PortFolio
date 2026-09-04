/**
 * Scroll Reveal Animation Module
 * Observes elements with .reveal, .reveal-left, .reveal-right and triggers entrance animations.
 *
 * @param {NodeList|HTMLElement[]} elements
 * @param {Object} options
 */
export function initScrollReveal(elements, options = {}) {
  if (!elements || !elements.length) return;

  const defaultOptions = {
    root: null,
    rootMargin: '-50px',
    threshold: 0.15,
    ...options
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, defaultOptions);

  elements.forEach(el => revealObserver.observe(el));
}

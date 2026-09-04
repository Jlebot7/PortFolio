/**
 * Typing Effect Module
 * Creates a typewriter animation cycling through an array of strings.
 *
 * @param {HTMLElement} element - Target element where text will be rendered
 * @param {string[]} words - Array of strings to type
 * @param {Object} options - Timing configuration options
 */
export function initTypingEffect(element, words = [], options = {}) {
  if (!element || !words.length) return;

  const {
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseEnd = 2000,
    pauseNext = 500,
    initialDelay = 1000
  } = options;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = pauseNext;
    }

    setTimeout(type, speed);
  };

  setTimeout(type, initialDelay);
}

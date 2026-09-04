/**
 * Application Entry Point (Orchestrator)
 * Assembles components, mounts them to the DOM, and initializes global behaviors.
 */
import { profileData } from './data/profile.data.js';
import { renderNavbar, initNavbarEvents } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects } from './components/Projects.js';
import { renderContact, initContactEvents } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

import { initTypingEffect } from './modules/typing.js';
import {
  initNavbarScroll,
  initSmoothScroll,
  initActiveSectionObserver
} from './modules/scroll.js';
import { initScrollReveal } from './modules/reveal.js';

class PortfolioApp {
  constructor() {
    this.header = document.getElementById('navbar');
    this.main = document.getElementById('main');
    this.footer = document.getElementById('footer');
  }

  /**
   * Mounts all components into their semantic target containers
   */
  mountComponents() {
    if (this.header) {
      this.header.innerHTML = renderNavbar();
      initNavbarEvents(this.header);
    }

    if (this.main) {
      this.main.innerHTML = [
        renderHero(),
        renderAbout(),
        renderSkills(),
        renderProjects(),
        renderContact()
      ].join('\n');

      initContactEvents(this.main);
    }

    if (this.footer) {
      this.footer.innerHTML = renderFooter();
    }
  }

  /**
   * Initializes behaviors and animations after components are rendered
   */
  initBehaviors() {
    // 1. Typing effect
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
      initTypingEffect(typingElement, profileData.roles);
    }

    // 2. Navigation scroll and interactions
    if (this.header) {
      initNavbarScroll(this.header);
    }

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    initSmoothScroll(navLinks, this.header);

    const sections = document.querySelectorAll('section[id]');
    initActiveSectionObserver(sections, navLinks);

    // 3. Scroll reveal entrance animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    initScrollReveal(revealElements);
  }

  /**
   * Application bootstrap
   */
  init() {
    this.mountComponents();
    this.initBehaviors();
  }
}

// Bootstrap once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});


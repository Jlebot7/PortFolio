document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('section');
    const typingText = document.querySelector('.typing-text');
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const yearSpan = document.getElementById('year');
    const contactForm = document.querySelector('form.contact-form');

    // 1. Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // 2. Mobile hamburger menu
    if (hamburger && navLinks) {
        const toggleMenu = () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        };

        hamburger.addEventListener('click', toggleMenu);

        // Close menu when clicking a nav link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Close menu when clicking outside (on the overlay)
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !e.target.closest('.nav-links') && 
                !e.target.closest('.hamburger')) {
                toggleMenu();
            }
        });
    }

    // 3. Smooth scroll
    navItems.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                // Offset calculation for fixed navbar
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Active nav link highlighting
    if (sections.length > 0 && navItems.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // When 30% of section is visible
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

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // 5. Typing effect
    if (typingText) {
        const words = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        };

        // Start typing effect
        setTimeout(type, 1000);
    }

    // 6. Scroll reveal animations
    if (revealElements.length > 0) {
        const revealOptions = {
            root: null,
            rootMargin: '-50px',
            threshold: 0.15
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Animate once
                }
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // 7. Dynamic year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 8. Contact form handling
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Find submit button for visual feedback
            const submitBtn = contactForm.querySelector('button[type="submit"]') || contactForm.querySelector('input[type="submit"]');
            const originalText = submitBtn ? (submitBtn.textContent || submitBtn.value) : 'Enviar Mensaje';
            
            if (submitBtn) {
                if (submitBtn.tagName === 'INPUT') submitBtn.value = '¡Mensaje Enviado! ✅';
                else submitBtn.textContent = '¡Mensaje Enviado! ✅';
                submitBtn.style.backgroundColor = '#28a745'; // Success color
                submitBtn.style.color = '#fff';
            } else {
                alert('¡Gracias! Tu mensaje ha sido enviado exitosamente.');
            }
            
            // Reset the form fields
            contactForm.reset();
            
            // Revert button text after 3 seconds
            if (submitBtn) {
                setTimeout(() => {
                    if (submitBtn.tagName === 'INPUT') submitBtn.value = originalText;
                    else submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                }, 3000);
            }
        });
    }
});

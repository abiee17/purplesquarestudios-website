/* ============================================
   Purple Square Studios — Main JS
   GSAP scroll animations + delightful interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- Nav scroll state ---
    const nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // --- Mobile nav toggle ---
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    if (navToggle && navMobile) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMobile.classList.toggle('open');
        });
        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMobile.classList.remove('open');
            });
        });
    }

    // --- GSAP Reveal — fade up with spring ---
    document.querySelectorAll('.reveal').forEach(el => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none'
            }
        });
    });

    // --- Stagger stat cards with pop ---
    const statCards = gsap.utils.toArray('.stat-card');
    if (statCards.length) {
        gsap.to(statCards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: statCards[0],
                start: 'top 88%'
            }
        });
    }

    // --- Stagger value cards ---
    const valueCards = gsap.utils.toArray('.value-card');
    if (valueCards.length) {
        gsap.to(valueCards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            scrollTrigger: {
                trigger: valueCards[0],
                start: 'top 88%'
            }
        });
    }

    // --- Stagger team cards with scale pop ---
    const teamCards = gsap.utils.toArray('.team-card');
    if (teamCards.length) {
        teamCards.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: 'back.out(1.4)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%'
                    }
                }
            );
        });
    }

    // --- Tags pop in ---
    gsap.utils.toArray('.tag').forEach((tag, i) => {
        gsap.from(tag, {
            scrollTrigger: { trigger: tag, start: 'top 92%' },
            opacity: 0,
            scale: 0.7,
            duration: 0.5,
            delay: i * 0.06,
            ease: 'back.out(3)'
        });
    });

    // --- Featured game card slide in ---
    const featuredInner = document.querySelector('.featured-game-inner');
    if (featuredInner) {
        gsap.from(featuredInner, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: featuredInner,
                start: 'top 85%'
            }
        });
    }

    // --- Phone mockup entrance ---
    const phoneMockup = document.querySelector('.phone-mockup');
    if (phoneMockup) {
        gsap.from(phoneMockup, {
            opacity: 0,
            x: -30,
            rotation: -5,
            duration: 1,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: phoneMockup,
                start: 'top 85%'
            }
        });
    }

    // --- Section titles slide in ---
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: { trigger: title, start: 'top 85%' },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // --- Section labels fade in ---
    gsap.utils.toArray('.section-label').forEach(label => {
        gsap.from(label, {
            scrollTrigger: { trigger: label, start: 'top 88%' },
            opacity: 0,
            y: 15,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    // --- Game card image parallax on scroll ---
    gsap.utils.toArray('.game-card-image').forEach(img => {
        gsap.from(img, {
            scrollTrigger: { trigger: img, start: 'top 90%' },
            opacity: 0,
            scale: 1.05,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // --- About who grid — image slide from left, text from right ---
    const aboutImage = document.querySelector('.about-who-image');
    const aboutText = document.querySelector('.about-who-text');
    if (aboutImage) {
        gsap.from(aboutImage, {
            scrollTrigger: { trigger: aboutImage, start: 'top 85%' },
            opacity: 0,
            x: -40,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
    if (aboutText) {
        gsap.from(aboutText, {
            scrollTrigger: { trigger: aboutText, start: 'top 85%' },
            opacity: 0,
            x: 40,
            duration: 0.8,
            delay: 0.15,
            ease: 'power3.out'
        });
    }

    // --- Newsletter form entrance ---
    const nlForm = document.querySelector('.newsletter-form');
    if (nlForm) {
        gsap.from(nlForm, {
            scrollTrigger: { trigger: nlForm, start: 'top 90%' },
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out'
        });
    }

    // --- Contact category cards stagger ---
    const contactCats = gsap.utils.toArray('.contact-cat');
    if (contactCats.length) {
        contactCats.forEach((cat, i) => {
            gsap.from(cat, {
                scrollTrigger: { trigger: cat, start: 'top 92%' },
                opacity: 0,
                y: 20,
                scale: 0.95,
                duration: 0.5,
                delay: i * 0.08,
                ease: 'back.out(1.5)'
            });
        });
    }

    // --- Sidebar cards stagger ---
    gsap.utils.toArray('.sidebar-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: { trigger: card, start: 'top 90%' },
            opacity: 0,
            x: 30,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // --- Contact category selection ---
    document.querySelectorAll('.contact-cat').forEach(cat => {
        cat.addEventListener('click', () => {
            document.querySelectorAll('.contact-cat').forEach(c => c.classList.remove('active'));
            cat.classList.add('active');
            cat.querySelector('input').checked = true;
        });
    });

    // --- Smooth anchor scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

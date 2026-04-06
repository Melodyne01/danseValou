import './bootstrap.js';
import './styles/app.css';
import { initMarquee } from './modules/marquee.js';

document.addEventListener('DOMContentLoaded', () => {
    initMarquee();
    initScrollReveal();
    initNavScroll();
});

// Scroll-triggered reveal animations
function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    elements.forEach(el => observer.observe(el));
}

// Navbar shrink on scroll
function initNavScroll() {
    const navbars = document.querySelectorAll('.uk-navbar-container');
    if (!navbars.length) return;

    const onScroll = () => {
        const scrolled = window.scrollY > 40;
        navbars.forEach(nav => nav.classList.toggle('nav-scrolled', scrolled));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/**
 * ==========================================================================
 * RAMYA U — PORTFOLIO JAVASCRIPT
 * Features:
 * - Responsive Mobile Navigation with Accessibility Support
 * - Sticky Header with Dynamic Backdrop Blur on Scroll
 * - Active Section Highlight (ScrollSpy)
 * - Scroll Reveal Animations via IntersectionObserver
 * - Interactive Contact Form & Mailto Builder
 * - Toast Notification Feedback System
 * - Resume Download Handler with Custom Toast
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Element Selectors ---
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccessMessage');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const currentYearSpan = document.getElementById('currentYear');
  const linkedInCard = document.getElementById('linkedInContactCard');
  const navResumeBtn = document.getElementById('navResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');

  // --- 1. Dynamic Year Update ---
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --- 2. Toast Notification System ---
  let toastTimer = null;
  function showToast(message, duration = 4000) {
    if (!toastNotification || !toastMessage) return;
    
    toastMessage.textContent = message;
    toastNotification.classList.remove('hidden');
    
    if (toastTimer) clearTimeout(toastTimer);
    
    toastTimer = setTimeout(() => {
      toastNotification.classList.add('hidden');
    }, duration);
  }

  // --- 3. Header Scroll Effect ---
  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // --- 4. Mobile Menu Navigation ---
  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = typeof open === 'boolean' ? open : !navMenu.classList.contains('open');
      navMenu.classList.toggle('open', isOpen);
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Prevent background scrolling when menu is open on mobile
      if (window.innerWidth <= 768) {
        document.body.style.overflow = isOpen ? 'hidden' : '';
      }
    };

    navToggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  // --- 5. Active Section Indicator (ScrollSpy) ---
  const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (targetLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  };
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // --- 6. Scroll Reveal Observer ---
  // Automatically apply reveal animation to sections and cards
  const animatableElements = document.querySelectorAll(
    '.animate-fade, .glass-card, .timeline-item, .hero-badge-wrap, .hero-title, .hero-subtitle, .hero-bio, .hero-stats-strip, .hero-cta, .hero-socials'
  );

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    animatableElements.forEach(el => {
      if (!el.classList.contains('animate-fade')) {
        el.classList.add('animate-fade');
      }
      revealObserver.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    animatableElements.forEach(el => el.classList.add('is-visible'));
  }

  // --- 7. Back to Top Button ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 8. Contact Form Handling ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const subjectInput = document.getElementById('messageSubject');
      const bodyInput = document.getElementById('messageBody');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
      const message = bodyInput ? bodyInput.value.trim() : '';

      const formattedSubject = encodeURIComponent(`[Portfolio] ${subject} - from ${name}`);
      const formattedBody = encodeURIComponent(
        `Hello Ramya,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`
      );

      const mailtoUrl = `mailto:ramya.u666@gmail.com?subject=${formattedSubject}&body=${formattedBody}`;

      // Open mail client
      window.location.href = mailtoUrl;

      // Show in-page confirmation
      if (formSuccess) {
        formSuccess.classList.remove('hidden');
        setTimeout(() => {
          formSuccess.classList.add('hidden');
        }, 8000);
      }

      showToast('Opening your default mail client with prefilled message to Ramya!');
      contactForm.reset();
    });
  }

  // --- 9. Resume Download Toast Feedback ---
  const handleResumeClick = (e) => {
    showToast('Initiating resume download (Replace assets/resume.pdf with your latest file anytime).');
  };

  if (navResumeBtn) navResumeBtn.addEventListener('click', handleResumeClick);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', handleResumeClick);

  // --- 10. LinkedIn Placeholder Helper ---
  if (linkedInCard) {
    linkedInCard.addEventListener('click', () => {
      showToast('LinkedIn URL placeholder: Edit index.html to add your profile link!');
    });
  }
});

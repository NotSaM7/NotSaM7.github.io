/* ============================================================
   Swayam Jain — Portfolio interactions
   GSAP ScrollTrigger + Lenis smooth scroll
   ============================================================ */
(() => {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // No-JS safe: only animate when JS runs AND motion is allowed.
  // Without GSAP, every element is visible by default.
  if (prefersReduced || typeof gsap === 'undefined') {
    document.documentElement.style.scrollBehavior = prefersReduced ? 'auto' : 'smooth';
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Lenis smooth scroll ---------- */
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  document.documentElement.style.scrollBehavior = 'auto';

  // Smooth-scroll same-page anchors through Lenis
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const target = id && id.length > 1 ? document.querySelector(id) : null;
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { duration: 1.2 });
      }
    });
  });

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Hero load animation ---------- */
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
    .from('.hero-title .word', { opacity: 0, yPercent: 115, duration: 0.95, stagger: 0.12 }, '-=0.3')
    .from('.hero-sub', { opacity: 0, y: 16, duration: 0.6 }, '-=0.5')
    .from('.hero-cta .btn', { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, '-=0.4')
    .from('.scroll-cue', { opacity: 0, duration: 0.5 }, '-=0.2');

  /* ---------- Statement: scrub words to full color ---------- */
  gsap.from('.statement-text .s-word', {
    opacity: 0.12,
    y: 26,
    stagger: 0.08,
    ease: 'none',
    scrollTrigger: {
      trigger: '.statement',
      start: 'top 75%',
      end: 'bottom 55%',
      scrub: 0.5
    }
  });

  /* ---------- Pinned project sections (desktop) ---------- */
  gsap.matchMedia().add('(min-width: 900px)', () => {
    gsap.utils.toArray('[data-project]').forEach((article) => {
      const copyEls = article.querySelectorAll(
        '.project-tag, .project-title, .project-desc, .project-stack, .project-links'
      );
      const visual = article.querySelector('.project-visual');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: article,
          start: 'top top',
          end: '+=130%',
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });
      tl.from(copyEls, { opacity: 0, y: 44, stagger: 0.09, ease: 'none' })
        .from(visual, { opacity: 0.5, scale: 0.9, y: 70, ease: 'none' }, 0);
    });
    return () => {};
  });

  /* ---------- Scroll reveals ---------- */
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  /* ---------- Contact title reveal ---------- */
  gsap.from('.contact-title', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: { trigger: '.contact', start: 'top 70%' }
  });

  /* Re-measure once fonts/layout settle */
  window.addEventListener('load', () => ScrollTrigger.refresh());
})();

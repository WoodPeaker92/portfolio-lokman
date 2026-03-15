/**
 * Portfolio – Lokman HIMRI – BTS SIO SISR
 * Main JS
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Progress bar ─────────────────────────────────────────
  const progressBar = document.getElementById('progress-bar');
  const updateProgress = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
    progressBar.style.width = pct + '%';
  };

  // ── Navbar scroll ────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('back-top');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    backTop.classList.toggle('visible', window.scrollY > 300);
    updateProgress();
    updateActiveNav();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Active nav link ──────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const updateActiveNav = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };

  // ── Mobile nav toggle ─────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile');
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // ── Back to top ──────────────────────────────────────────
  backTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── Reveal on scroll ─────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => revealObs.observe(el));

  // ── Stage cards accordion ────────────────────────────────
  document.querySelectorAll('.stage-card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.stage-card');
      const wasOpen = card.classList.contains('open');
      document.querySelectorAll('.stage-card.open').forEach(c => c.classList.remove('open'));
      if (!wasOpen) card.classList.add('open');
    });
  });
  // Open first stage by default
  document.querySelector('.stage-card')?.classList.add('open');

  // ── Veille accordion ─────────────────────────────────────
  document.querySelectorAll('.veille-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.closest('.veille-section');
      section.classList.toggle('open');
    });
  });
  // Open first section
  document.querySelector('.veille-section')?.classList.add('open');

  // ── Typed animation ──────────────────────────────────────
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    const words = ['SISR', 'Réseaux', 'Sécurité', 'Infrastructure', 'Systèmes'];
    let wi = 0, ci = 0, deleting = false, timeout = null;
    const tick = () => {
      const word = words[wi];
      if (!deleting) {
        typedEl.textContent = word.substring(0, ci + 1);
        ci++;
        if (ci === word.length) { deleting = true; timeout = setTimeout(tick, 1800); return; }
      } else {
        typedEl.textContent = word.substring(0, ci - 1);
        ci--;
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; timeout = setTimeout(tick, 400); return; }
      }
      timeout = setTimeout(tick, deleting ? 60 : 90);
    };
    tick();
  }

  // ── Counter animation ─────────────────────────────────────
  const counters = document.querySelectorAll('.count-up');
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const step = target / (duration / 16);
      let current = 0;
      const update = () => {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current) + suffix;
        if (current < target) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countObs.observe(el));

  // ── Smooth scroll for all anchor links ───────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  console.log('%c Portfolio – Lokman HIMRI %c BTS SIO SISR ', 
    'background:#38bdf8;color:#080c14;font-weight:800;padding:4px 8px;border-radius:4px 0 0 4px',
    'background:#172032;color:#38bdf8;font-weight:500;padding:4px 8px;border-radius:0 4px 4px 0;border:1px solid #38bdf8'
  );
});

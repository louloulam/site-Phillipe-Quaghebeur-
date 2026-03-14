// ============================================================
// MAÎTRE QUAGHEBEUR — NOTAIRE — main.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- NAVBAR SCROLL ----------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ---------- BURGER MENU ----------
  const burger = document.getElementById('nav-burger');
  const navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Fermer au clic sur un lien
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ---------- SCROLL REVEAL ----------
  const reveals = document.querySelectorAll('.service-card, .about-container, .tarif-card, .contact-container, .stat-item, .section-header, blockquote');

  reveals.forEach((el, index) => {
    el.classList.add('reveal');
    if (index % 3 === 1) el.classList.add('reveal-delay-1');
    if (index % 3 === 2) el.classList.add('reveal-delay-2');
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---------- ACTIVE NAV LINK ----------
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--gold)' : '';
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // ---------- CONTACT FORM (Netlify Forms) ----------
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Envoi en cours…';
      btn.disabled = true;

      const formData = new FormData(form);

      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
          successMsg.style.display = 'block';
          form.reset();
          setTimeout(() => { successMsg.style.display = 'none'; }, 6000);
        } else {
          alert('Une erreur est survenue. Merci de réessayer ou de nous contacter par téléphone.');
        }
      } catch (err) {
        alert('Erreur de connexion. Merci de réessayer.');
      } finally {
        btn.textContent = 'Envoyer ma demande ✦';
        btn.disabled = false;
      }
    });
  }

  // ---------- SMOOTH SCROLL FOR ANCHORS ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---------- STATS COUNTER ANIMATION ----------
  const statNumbers = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const isPlus = text.startsWith('+');
        const isPct = text.endsWith('%');
        const raw = text.replace(/[^0-9]/g, '');
        const target = parseInt(raw);
        if (isNaN(target)) return;

        let current = 0;
        const duration = 1800;
        const step = target / (duration / 16);

        const interval = setInterval(() => {
          current = Math.min(current + step, target);
          const display = Math.floor(current);
          el.textContent = `${isPlus ? '+' : ''}${display}${isPct ? '%' : ''}`;
          if (current >= target) clearInterval(interval);
        }, 16);

        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => counterObserver.observe(el));

});

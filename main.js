document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll('.reveal');

  revealEls.forEach(el => {
    const siblings = [...el.parentElement.querySelectorAll(':scope > .reveal')];
    const index = siblings.indexOf(el);
    el.style.transitionDelay = `${index * 0.12}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  const touchEls = document.querySelectorAll('.post-card, .footer-social a');
  touchEls.forEach(el => {
    el.addEventListener('touchstart', () => el.classList.add('is-touched'), { passive: true });
    el.addEventListener('touchend', () => setTimeout(() => el.classList.remove('is-touched'), 150));
  });
});

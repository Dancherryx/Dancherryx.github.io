(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.category .grid-cards').forEach(grid => {
    const cards = Array.from(grid.children).filter(el => el.classList.contains('card'));
    const limit = grid.classList.contains('cols-3') ? 3 : 4;
    if (cards.length <= limit) return;

    cards.slice(limit).forEach(card => card.classList.add('is-collapsed'));

    const remaining = cards.length - limit;
    const wrap = document.createElement('div');
    wrap.className = 'show-more-wrap';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'show-more-btn';
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = `Ver ${remaining} más <span class="arrow" aria-hidden="true"></span>`;
    wrap.appendChild(btn);
    grid.parentNode.appendChild(wrap);

    btn.addEventListener('click', () => {
      cards.slice(limit).forEach((card, i) => {
        setTimeout(() => card.classList.remove('is-collapsed'), i * 70);
      });
      btn.setAttribute('aria-expanded', 'true');
      wrap.remove();
    });
  });
})();

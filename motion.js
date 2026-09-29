(() => {
  const hero = document.querySelector('.teknoloji .hero');
  const button = document.querySelector('.motion-toggle');
  if (!hero || !button) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = preference.matches;
  let visible = true;
  function update() {
    hero.classList.toggle('motion-paused', paused || document.hidden || !visible);
    button.textContent = paused ? 'Hareketi başlat' : 'Hareketi durdur';
    button.setAttribute('aria-pressed', String(paused));
  }
  button.hidden = false;
  button.addEventListener('click', () => { paused = !paused; update(); });
  preference.addEventListener('change', () => { paused = preference.matches; update(); });
  document.addEventListener('visibilitychange', update);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }).observe(hero);
  update();
})();

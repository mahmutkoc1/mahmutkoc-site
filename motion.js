(() => {
  const hero = document.querySelector('.teknoloji .hero');
  if (!hero) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = preference.matches;
  let visible = true;
  function update() {
    hero.classList.toggle('motion-paused', paused || document.hidden || !visible);
  }
  preference.addEventListener('change', () => { paused = preference.matches; update(); });
  document.addEventListener('visibilitychange', update);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }).observe(hero);
  update();
})();

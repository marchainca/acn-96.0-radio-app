// Navegación simple entre pantallas dentro del "teléfono"
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-goto]');
  if (!btn) return;
  const target = btn.getAttribute('data-goto');
  const frame = btn.closest('.phone') || document;
  frame.querySelectorAll('[data-screen]').forEach(s => s.classList.add('hidden'));
  const el = frame.querySelector(`[data-screen="${target}"]`);
  if (el) el.classList.remove('hidden');
  frame.querySelectorAll('[data-tab]').forEach(t => {
    t.classList.toggle('is-active', t.getAttribute('data-tab') === target);
  });
  const scroller = frame.querySelector('.screen-scroll');
  if (scroller) scroller.scrollTop = 0;
});

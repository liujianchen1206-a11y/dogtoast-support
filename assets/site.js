'use strict';
const language = document.querySelector('[data-language]');
if (language) language.addEventListener('change', event => { window.location.assign(event.target.value); });
// Make a deep FAQ link readable without animation or browser storage.
function revealHash() {
  if (!location.hash) return;
  const section = document.getElementById(location.hash.slice(1));
  if (section instanceof HTMLDetailsElement) section.open = true;
}
revealHash();
window.addEventListener('hashchange', revealHash);

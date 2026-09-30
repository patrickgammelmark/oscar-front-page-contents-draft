// Small replacements for the live site's JavaScript, so the copy feels clickable.

// FAQ: open/close answers when a question is clicked
document.querySelectorAll('li[itemtype="https://schema.org/Question"] > button').forEach(function (button) {
  button.addEventListener('click', function () {
    var item = button.parentElement;
    var answer = item.querySelector('[itemprop="acceptedAnswer"]');
    var open = item.getAttribute('data-state') !== 'open';
    [item, button].forEach(function (el) { el.setAttribute('data-state', open ? 'open' : 'closed'); });
    button.setAttribute('aria-expanded', open);
    answer.classList.toggle('hidden', !open);
  });
});

// Links point to "#": stop the page from jumping to the top when clicked
document.querySelectorAll('a[href="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) { e.preventDefault(); });
});

// Dropdowns (nav menus and "Andet"): one open at a time, close on outside click or Escape
var openDropdown = null;
function setOpen(trigger, menu, open) {
  [trigger, menu].forEach(function (el) { el.setAttribute('data-state', open ? 'open' : 'closed'); });
  trigger.setAttribute('aria-expanded', open);
  menu.classList.toggle('hidden', !open);
  openDropdown = open ? { trigger: trigger, menu: menu } : null;
}
function closeOpenDropdown() {
  if (openDropdown) setOpen(openDropdown.trigger, openDropdown.menu, false);
}
function makeDropdown(trigger, menu) {
  trigger.addEventListener('click', function (e) {
    e.stopPropagation();
    var wasOpen = openDropdown && openDropdown.menu === menu;
    closeOpenDropdown();
    if (!wasOpen) setOpen(trigger, menu, true);
  });
}
document.addEventListener('click', function (e) {
  if (openDropdown && !openDropdown.menu.contains(e.target)) closeOpenDropdown();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeOpenDropdown();
});

// Nav bar menus
document.querySelectorAll('[data-nav-menu]').forEach(function (menu) {
  makeDropdown(menu.previousElementSibling, menu);
});

// Car type pills: clicking one marks it as selected and unmarks the others in the same row
var SELECTED = ['text-primary', 'border-primary', 'bg-gray-50'];
var UNSELECTED = ['text-tertiary', 'border-gray-100'];
function mark(el, selected) {
  el.classList.remove.apply(el.classList, selected ? UNSELECTED : SELECTED);
  el.classList.add.apply(el.classList, selected ? SELECTED : UNSELECTED);
}
var andetMenu = document.querySelector('[data-andet-menu]');
var andetTrigger = andetMenu && andetMenu.previousElementSibling;
var andetLabel = andetTrigger && andetTrigger.firstElementChild;
var andetOriginal = andetLabel && andetLabel.innerHTML;

function selectInRow(row, selectedEl) {
  row.querySelectorAll('button[data-ga4-event="rental_search_car_type_filter"]').forEach(function (pill) {
    if (!pill.closest('[role="listbox"]')) mark(pill, pill === selectedEl);
  });
  if (andetTrigger && row.contains(andetTrigger)) {
    var andetChosen = selectedEl === andetTrigger;
    mark(andetTrigger, andetChosen);
    andetLabel.classList.toggle('text-primary', andetChosen);
    andetLabel.classList.toggle('text-tertiary', !andetChosen);
    if (!andetChosen) andetLabel.innerHTML = andetOriginal;
  }
}
document.querySelectorAll('button[data-ga4-event="rental_search_car_type_filter"]').forEach(function (pill) {
  if (pill.closest('[role="listbox"]')) return;
  pill.addEventListener('click', function () { selectInRow(pill.closest('ul'), pill); });
});

// "Andet": pick Trailer, Autocamper, Autotransporter or Kølebil
if (andetMenu) {
  // The pill row cuts off anything below it, so the list is shown on top of the page instead
  document.body.appendChild(andetMenu);
  andetMenu.classList.remove('absolute', 'left-0', 'top-full');
  andetMenu.style.position = 'fixed';
  andetTrigger.addEventListener('click', function () {
    var r = andetTrigger.getBoundingClientRect();
    andetMenu.style.left = r.left + 'px';
    andetMenu.style.top = r.bottom + 'px';
  });
  window.addEventListener('scroll', function () {
    if (openDropdown && openDropdown.menu === andetMenu) closeOpenDropdown();
  });
  makeDropdown(andetTrigger, andetMenu);
  andetMenu.querySelectorAll('[role="option"]').forEach(function (option) {
    option.addEventListener('click', function () {
      andetMenu.querySelectorAll('[role="option"]').forEach(function (o) {
        var chosen = o === option;
        o.setAttribute('aria-selected', chosen);
        o.setAttribute('data-state', chosen ? 'checked' : 'unchecked');
        o.classList.toggle('bg-gray-75', chosen);
      });
      selectInRow(andetTrigger.closest('ul'), andetTrigger);
      andetLabel.innerHTML = option.querySelector('button').innerHTML;
      closeOpenDropdown();
    });
  });
}

// Search form tab: choose between "Biludlejning" and "Bilabonnement"
var modeMenu = document.querySelector('[data-mode-menu]');
if (modeMenu) {
  var modeTrigger = modeMenu.previousElementSibling;
  var modeLabel = modeTrigger.querySelector('[data-mode-label]');
  makeDropdown(modeTrigger, modeMenu);
  modeMenu.querySelectorAll('[role="option"]').forEach(function (option) {
    option.addEventListener('click', function () {
      modeMenu.querySelectorAll('[role="option"]').forEach(function (o) {
        o.setAttribute('aria-selected', o === option);
      });
      modeLabel.textContent = option.textContent;
      closeOpenDropdown();
    });
  });
}

// Review carousel (variant C): arrows scroll one card at a time
document.querySelectorAll('[data-rv-track]').forEach(function (track) {
  var section = track.closest('section');
  function step(dir) {
    var card = track.firstElementChild;
    var gap = parseFloat(getComputedStyle(track).columnGap) || 16;
    track.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
  }
  var prev = section.querySelector('[data-rv-prev]');
  var next = section.querySelector('[data-rv-next]');
  if (prev) prev.addEventListener('click', function () { step(-1); });
  if (next) next.addEventListener('click', function () { step(1); });
});

// Font switch (in the "Kontakt & FAQ" menu): Silka + Inter (default) <-> Quicksand + IBM Plex Sans.
// The choice is remembered in this browser.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('[data-font-toggle]');
  var label = document.querySelector('[data-font-label]');
  function apply(alt) {
    root.classList.toggle('fonts-alt', alt);
    if (button) button.setAttribute('aria-pressed', alt);
    if (label) label.textContent = alt ? 'Quicksand + IBM Plex' : 'Silka + Inter';
  }
  var saved = false;
  try { saved = localStorage.getItem('oscar-fonts') === 'alt'; } catch (e) {}
  apply(saved);
  if (!button) return;
  button.addEventListener('click', function (e) {
    e.stopPropagation();
    var alt = !root.classList.contains('fonts-alt');
    apply(alt);
    try { localStorage.setItem('oscar-fonts', alt ? 'alt' : 'default'); } catch (err) {}
  });
})();

// Location page gallery: tap a thumbnail to show it as the big photo (quick, soft fade)
document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
  var main = gallery.querySelector('[data-gallery-main]');
  var thumbs = gallery.querySelectorAll('[data-gallery-src]');
  if (!main) return;
  thumbs.forEach(function (thumb) {
    new Image().src = thumb.getAttribute('data-gallery-src'); // load in advance, so the switch is instant
    thumb.addEventListener('click', function () {
      if (thumb.getAttribute('aria-current') === 'true') return;
      thumbs.forEach(function (t) { t.setAttribute('aria-current', t === thumb ? 'true' : 'false'); });
      main.classList.add('is-fading');
      setTimeout(function () {
        main.src = thumb.getAttribute('data-gallery-src');
        main.alt = thumb.getAttribute('data-gallery-alt');
        main.classList.remove('is-fading');
      }, 180);
    });
  });
});

// Location search: car type pills, one selected at a time
document.querySelectorAll('[data-pill-group]').forEach(function (group) {
  var pills = group.querySelectorAll('button');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.setAttribute('aria-pressed', p === pill ? 'true' : 'false'); });
    });
  });
});

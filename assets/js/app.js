// Minimal JS to toggle mobile navigation visibility
(function () {
  var toggleButtons = document.querySelectorAll('.nav-toggle');
  if (!toggleButtons || toggleButtons.length === 0) return;

  toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var navId = button.getAttribute('aria-controls');
      var nav = document.getElementById(navId);
      if (!nav) return;
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
  });
})();


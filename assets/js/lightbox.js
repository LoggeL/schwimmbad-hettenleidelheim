// Lightweight lightbox for image galleries with [data-lightbox]
(function () {
  function createLightbox() {
    var backdrop = document.createElement('div');
    backdrop.className = 'lightbox-backdrop';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.type = 'button';
    closeBtn.textContent = 'Schließen ✕';

    var img = document.createElement('img');
    img.className = 'lightbox-img';
    img.alt = '';

    backdrop.appendChild(img);
    backdrop.appendChild(closeBtn);
    document.body.appendChild(backdrop);

    function close() {
      backdrop.classList.remove('open');
      img.removeAttribute('src');
    }

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop || e.target === closeBtn) close();
    });

    document.addEventListener('keydown', function (e) {
      if (backdrop.classList.contains('open') && e.key === 'Escape') close();
    });

    return { backdrop: backdrop, img: img, open: function (src, alt) {
      img.src = src;
      if (alt) img.alt = alt; else img.removeAttribute('alt');
      backdrop.classList.add('open');
    }, close: close };
  }

  function initGallery(gallery, lb) {
    gallery.addEventListener('click', function (e) {
      var target = e.target;
      if (target && target.tagName === 'IMG') {
        e.preventDefault();
        lb.open(target.currentSrc || target.src, target.alt || '');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }

  function setup() {
    var galleries = document.querySelectorAll('[data-lightbox]');
    if (!galleries.length) return;
    var lb = createLightbox();
    for (var i = 0; i < galleries.length; i++) initGallery(galleries[i], lb);
  }
})();


document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('nav ul');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  // Highlight current nav link
  const links = document.querySelectorAll('nav a');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if ((path === '' && href.endsWith('index.html')) || href.endsWith(path)) {
      a.style.opacity = '1';
      a.style.textDecoration = 'underline';
      a.style.textUnderlineOffset = '6px';
      a.style.textDecorationColor = 'rgba(125,211,252,.8)';
    }
  });
});
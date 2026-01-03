// ============================================================
// 🔧 SEASON CONFIG - Change this line to toggle open/closed
// ============================================================
const POOL_IS_OPEN = false; // Set to true when pool is open, false when closed
// ============================================================

// Apply status to all status banners on page load
document.addEventListener('DOMContentLoaded', function() {
  const statusBanners = document.querySelectorAll('.status-banner');
  const statusNotices = document.querySelectorAll('.status-notice');
  
  statusBanners.forEach(banner => {
    if (POOL_IS_OPEN) {
      banner.classList.remove('closed');
      banner.classList.add('open');
      banner.innerHTML = '🏊 Jetzt geöffnet!';
    } else {
      banner.classList.remove('open');
      banner.classList.add('closed');
      banner.innerHTML = '🏊 Aktuell geschlossen';
    }
  });

  statusNotices.forEach(notice => {
    if (POOL_IS_OPEN) {
      notice.innerHTML = '<h4>🏊 Wir haben geöffnet!</h4><p>Besuchen Sie uns täglich von 09:00 bis 19:00 Uhr. Wir freuen uns auf Sie!</p>';
    } else {
      notice.innerHTML = '<h4>🏊 Aktuell geschlossen</h4><p>Wir blicken zurück auf eine tolle Saison, bedanken uns bei allen Besuchern und freuen uns auf ein Wiedersehen in der nächsten Saison.</p>';
    }
  });
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (navMenu && navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });

  // Lightbox functionality
  initLightbox();

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          const headerOffset = 90;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Active nav link highlighting
  highlightActiveNav();
});

// Lightbox
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  
  if (!galleryItems.length || !lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  
  let currentIndex = 0;
  const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      showImage(currentIndex);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function showImage(index) {
    lightboxImg.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextImage);
  if (prevBtn) prevBtn.addEventListener('click', prevImage);

  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
}

// Highlight active navigation link based on current page
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.card, .info-card, .timeline-item, .gallery-item');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

/**
 * HARSHITHA - SOFTWARE ENGINEER PORTFOLIO
 * High-performance, Accessible, Zero-Dependency Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initProjectFilters();
  initCopyEmail();
  initPlaceholderHelper();
  initMobileMenu();
  initScrollSpy();
  initKeyboardAccessibility();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light with LocalStorage persistence)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const htmlEl = document.documentElement;

  // Retrieve existing preference or default to dark
  const savedTheme = localStorage.getItem('harshitha_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('harshitha_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    if (theme === 'light') {
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }
  }
}

/* --------------------------------------------------------------------------
   2. Project Filtering (Category Filter Tabs)
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = '';
          card.style.animation = 'fadeInCard 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Add dynamic CSS keyframe for card transitions if needed
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInCard {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

/* --------------------------------------------------------------------------
   3. Modal Management (Architecture & Case Study Deep-Dives)
   -------------------------------------------------------------------------- */
window.openProjectModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Set focus to the modal's close button for accessibility
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }
};

window.closeProjectModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

function initKeyboardAccessibility() {
  // Close open modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) {
        closeProjectModal(activeModal.id);
      }
    }
  });

  // Close modal when clicking directly on the backdrop outside the window
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeProjectModal(backdrop.id);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Copy to Clipboard Functionality & Toast Feedback
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const emailToCopy = 'harshithatdk2006@gmail.com';
  const copyBtn = document.getElementById('copy-email-button');
  const heroCopyBtn = document.getElementById('hero-copy-email-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => copyEmailText(emailToCopy));
  }

  if (heroCopyBtn) {
    heroCopyBtn.addEventListener('click', () => copyEmailText(emailToCopy));
  }
}

function copyEmailText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${text} to clipboard!`);
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`Copied ${text} to clipboard!`);
  } catch (err) {
    showToast('Failed to copy. Please select email manually.');
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');

  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* --------------------------------------------------------------------------
   5. Customization & Placeholder Helper
   -------------------------------------------------------------------------- */
function initPlaceholderHelper() {
  const toggleBtn = document.getElementById('btn-toggle-placeholders');
  const placeholders = document.querySelectorAll('.placeholder-slot');

  if (toggleBtn) {
    const slotCount = placeholders.length;
    toggleBtn.textContent = `Highlight Fill-in Slots (${slotCount})`;

    toggleBtn.addEventListener('click', () => {
      const isHighlighted = document.body.classList.toggle('highlight-placeholders');
      if (isHighlighted) {
        toggleBtn.textContent = `Clear Highlights (${slotCount} slots found)`;
        toggleBtn.style.background = 'var(--amber-primary)';
        toggleBtn.style.color = '#000';
        showToast(`${slotCount} customizable metric/detail slots highlighted!`);
      } else {
        toggleBtn.textContent = `Highlight Fill-in Slots (${slotCount})`;
        toggleBtn.style.background = '';
        toggleBtn.style.color = '';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   6. Mobile Menu Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-links-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close mobile menu when selecting any link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   7. Scroll Spy & Active Nav Highlighting
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });
}

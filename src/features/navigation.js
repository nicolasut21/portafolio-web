export function setupMobileMenu() {
  const btn = document.querySelector('#mobile-menu-btn');
  const drawer = document.querySelector('#mobile-menu-drawer');
  const icon = document.querySelector('#hamburger-icon');
  const links = document.querySelectorAll('.mobile-menu-link');

  if (!btn || !drawer) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      if (icon) {
        icon.innerHTML = `
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
      }
    } else {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      if (icon) {
        icon.innerHTML = `
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
      }
    }
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  links.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#mobile-menu-drawer') && !e.target.closest('#mobile-menu-btn')) {
      toggleMenu(true);
    }
  });
}

export function setupSmartNavbar() {
  const navbar = document.querySelector('.navbar');
  const drawer = document.querySelector('#mobile-menu-drawer');
  if (!navbar) return;

  let lastScrollY = window.scrollY || document.documentElement.scrollTop;
  let ticking = false;
  const threshold = 8;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY || document.documentElement.scrollTop;
        const diff = currentScrollY - lastScrollY;

        if (currentScrollY <= 35) {
          navbar.classList.remove('nav-hidden');
        } else if (diff > threshold && currentScrollY > 70) {
          navbar.classList.add('nav-hidden');

          if (drawer && drawer.classList.contains('open')) {
            const btn = document.querySelector('#mobile-menu-btn');
            const icon = document.querySelector('#hamburger-icon');
            drawer.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
            if (btn) btn.setAttribute('aria-expanded', 'false');
            if (icon) {
              icon.innerHTML = `
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              `;
            }
          }
        } else if (diff < -threshold) {
          navbar.classList.remove('nav-hidden');
        }

        lastScrollY = Math.max(0, currentScrollY);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

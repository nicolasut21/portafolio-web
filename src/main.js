import './style.css';

// Components
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderBentoGrid } from './components/BentoGrid.js';
import { renderProjects } from './components/Projects.js';
import { renderAbout } from './components/About.js';
import { renderContact } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';
import { renderModal } from './components/Modal.js';

// Features / Interactivity
import { setupThemeToggle } from './features/theme.js';
import { setupMobileMenu, setupSmartNavbar } from './features/navigation.js';
import { 
  setupBentoPrototype, 
  setupBentoProcess, 
  setupLiveCodePreview, 
  setupTechStackFilter 
} from './features/bento.js';
import { setupCaseStudiesModal } from './features/modal.js';
import { setupContactForm, setupCopyButtons } from './features/contact.js';
import { setupScrollAnimations } from './features/scroll.js';

function initApp() {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderBentoGrid()}
      ${renderProjects()}
      ${renderAbout()}
      ${renderContact()}
    </main>
    ${renderFooter()}
    ${renderModal()}
  `;

  // Initialize interactive features
  setupThemeToggle();
  setupMobileMenu();
  setupSmartNavbar();
  setupBentoPrototype();
  setupBentoProcess();
  setupLiveCodePreview();
  setupTechStackFilter();
  setupCaseStudiesModal();
  setupContactForm();
  setupCopyButtons();
  setupScrollAnimations();
}

initApp();

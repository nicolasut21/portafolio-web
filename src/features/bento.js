import { processData, codeSnippets } from '../data/bentoData.js';
import { techStack } from '../data/techStack.js';
import { showToast } from './contact.js';

export function setupBentoPrototype() {
  const tabs = document.querySelectorAll('.proto-tab-btn');
  const protoImg = document.querySelector('#proto-img');
  const protoStatus = document.querySelector('#proto-status');

  const views = {
    mobile: { src: './projects/fintech.jpg', label: '● Vista Móvil (iOS/Android)' },
    desktop: { src: './projects/analytics.jpg', label: '● Vista Dashboard Desktop' },
    flow: { src: './projects/design_system.jpg', label: '● Flujo de Arquitectura UX' }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const viewKey = tab.dataset.view;
      if (views[viewKey] && protoImg && protoStatus) {
        protoImg.style.opacity = '0';
        setTimeout(() => {
          protoImg.src = views[viewKey].src;
          protoStatus.textContent = views[viewKey].label;
          protoImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

export function setupBentoProcess() {
  const stepItems = document.querySelectorAll('.process-step-item');
  const leadText = document.querySelector('#process-lead-text');

  stepItems.forEach(item => {
    item.addEventListener('click', () => {
      stepItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const stepKey = item.dataset.step;
      if (processData[stepKey] && leadText) {
        leadText.innerHTML = `<strong>Fase ${processData[stepKey].num} (${processData[stepKey].name}):</strong> ${processData[stepKey].desc}`;
      }
    });
  });
}

export function setupLiveCodePreview() {
  const codeEl = document.querySelector('#code-display');
  const codeTabs = document.querySelectorAll('.code-tab-btn');
  const copyBtn = document.querySelector('#btn-copy-code');
  let currentLang = 'react';

  function updateCode(lang) {
    currentLang = lang;
    if (codeEl) {
      codeEl.textContent = codeSnippets[lang] || '';
    }
  }

  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      updateCode(tab.dataset.lang);
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = codeSnippets[currentLang];
      navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = '¡Copiado! ✓';
        setTimeout(() => { copyBtn.textContent = 'Copiar'; }, 2000);
        showToast('Código copiado al portapapeles');
      });
    });
  }

  updateCode('react');
}

export function setupTechStackFilter() {
  const container = document.querySelector('#stack-pills-wrap');
  const countEl = document.querySelector('#stack-count');
  const filterTabs = document.querySelectorAll('.stack-tab-btn');

  if (!container || !countEl) return;

  function renderPills(filter = 'all') {
    const filtered = filter === 'all' 
      ? techStack 
      : techStack.filter(item => item.category === filter);
    
    countEl.textContent = `${filtered.length} Tecnologías`;

    container.innerHTML = filtered.map(tech => `
      <div class="tech-grid-card" data-category="${tech.category}">
        <div class="tech-icon-wrapper">
          ${tech.iconSvg || ''}
        </div>
        <div class="tech-card-content">
          <span class="tech-card-name">${tech.name}</span>
          <span class="tech-card-tag">${tech.tag || tech.category}</span>
        </div>
      </div>
    `).join('');
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPills(tab.dataset.filter);
    });
  });

  renderPills('all');
}

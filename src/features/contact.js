export function showToast(message) {
  const toast = document.querySelector('#toast-notification');
  const toastText = document.querySelector('#toast-text');
  if (!toast || !toastText) return;
  toastText.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

export function setupContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#form-name');
    const name = nameInput ? nameInput.value : '';
    const btn = document.querySelector('#btn-submit-form');
    
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Enviando...';
    }

    setTimeout(() => {
      if (btn) {
        btn.disabled = false;
        btn.textContent = '¡Mensaje Enviado con Éxito! ✓';
      }
      form.reset();
      showToast(`¡Gracias ${name}! Mensaje recibido, te responderé pronto.`);
      setTimeout(() => {
        if (btn) btn.textContent = 'Enviar Mensaje Directo 🚀';
      }, 3500);
    }, 800);
  });
}

export function setupCopyButtons() {
  const copyEmailHero = document.querySelector('#btn-copy-email-hero');
  const email = 'nicolasut21@gmail.com';

  if (copyEmailHero) {
    copyEmailHero.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copiado al portapapeles: ' + email);
      });
    });
  }
}

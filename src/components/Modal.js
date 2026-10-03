export function renderModal() {
  return `
    <!-- Modal Detalle de Caso de Estudio -->
    <div class="modal-backdrop" id="case-modal" aria-hidden="true" role="dialog">
      <div class="modal-container">
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Cerrar modal">&times;</button>
        <div id="modal-content-area"></div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div class="toast-msg" id="toast-notification">
      <span>✓</span>
      <span id="toast-text">Acción completada con éxito</span>
    </div>
  `;
}

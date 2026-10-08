export function renderAmbientBackground() {
  return `
    <div class="ambient-background" aria-hidden="true">
      <div class="ambient-grid"></div>
      <div class="ambient-glow ambient-glow-1"></div>
      <div class="ambient-glow ambient-glow-2"></div>
      <div class="ambient-glow ambient-glow-3"></div>
      <div class="ambient-interactive-spot" id="ambient-interactive-spot"></div>
    </div>
  `;
}

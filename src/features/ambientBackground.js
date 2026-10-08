export function setupAmbientBackground() {
  const spot = document.querySelector('#ambient-interactive-spot');
  if (!spot) return;

  // Don't bind mouse follower on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isRunning = false;

  function onMouseMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!isRunning) {
      isRunning = true;
      spot.style.opacity = '1';
      requestAnimationFrame(updateSpot);
    }
  }

  function updateSpot() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    spot.style.transform = `translate3d(calc(${currentX}px - 50%), calc(${currentY}px - 50%), 0)`;

    const diff = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
    if (diff > 0.5) {
      requestAnimationFrame(updateSpot);
    } else {
      isRunning = false;
    }
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });
}

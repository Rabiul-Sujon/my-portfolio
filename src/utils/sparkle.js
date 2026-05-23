export function createSparkle(e) {
  const count = 12;
  const origin = { x: e.clientX, y: e.clientY };

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    const angle = (i / count) * 360;
    const distance = Math.random() * 60 + 20;
    const rad = (angle * Math.PI) / 180;
    const tx = Math.cos(rad) * distance;
    const ty = Math.sin(rad) * distance;

    particle.style.cssText = `
      position: fixed;
      left: ${origin.x}px;
      top: ${origin.y}px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #F0D93B;
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 6px #F0D93B;
    `;

    document.body.appendChild(particle);

    particle.animate(
      [
        { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
        { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`, opacity: 0 },
      ],
      { duration: 600, easing: "ease-out", fill: "forwards" }
    );

    setTimeout(() => particle.remove(), 600);
  }
}
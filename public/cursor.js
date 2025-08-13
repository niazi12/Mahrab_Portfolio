// public/cursor.js

// Create cursor elements
const cursorDot = document.createElement("div");
const cursorOutline = document.createElement("div");

cursorDot.id = "cursor-dot";
cursorOutline.id = "cursor-outline";

document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

// Styles
const style = document.createElement("style");
style.innerHTML = `
  body {
    cursor: none !important;
  }
  #cursor-dot, #cursor-outline {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    mix-blend-mode: difference;
  }
  #cursor-dot {
    width: 8px;
    height: 8px;
    background: white;
  }
  #cursor-outline {
    width: 40px;
    height: 40px;
    border: 2px solid white;
    transition: transform 0.15s ease-out, width 0.2s ease, height 0.2s ease;
  }
`;
document.head.appendChild(style);

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;
let speed = 0.2;

// Track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

// Animate trailing outline (elastic effect)
function animate() {
  outlineX += (mouseX - outlineX) * speed;
  outlineY += (mouseY - outlineY) * speed;

  const dx = mouseX - outlineX;
  const dy = mouseY - outlineY;
  const angle = Math.atan2(dy, dx);
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Stretch outline based on speed
  const stretch = Math.min(distance / 8, 1.5);
  cursorOutline.style.width = `${40 + stretch * 10}px`;
  cursorOutline.style.height = `${40 - stretch * 5}px`;
  cursorOutline.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;

  cursorOutline.style.left = `${outlineX}px`;
  cursorOutline.style.top = `${outlineY}px`;

  requestAnimationFrame(animate);
}
animate();

// Hover grow effect
document.addEventListener("mouseover", (e) => {
  if (e.target.closest("a, button, .cursor-hover")) {
    cursorOutline.style.transform += " scale(1.5)";
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest("a, button, .cursor-hover")) {
    cursorOutline.style.transform = cursorOutline.style.transform.replace(" scale(1.5)", "");
  }
});

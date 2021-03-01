/* Conffettis */

const colors = [
  "#f5c800",
  "#53F746",
  "#EF3C35",
  "#84E652",
  "#D02E2B",
  "#5A2E7F",
  "#95760C",
  "#4D5CDC",
];

function createElements(root, elementCount) {
  return Array.from({ length: elementCount }).map((_, index) => {
    const element = document.createElement("div");
    element.classList = ["confetti"];
    const color = colors[index % colors.length];
    element.style["background-color"] = color;
    element.style.width = "8px";
    element.style.height = "15px";
    element.style.position = "absolute";
    root.appendChild(element);
    return element;
  });
}

function randomPhysics(angle, spread, startVelocity) {
  const radAngle = angle * (Math.PI / 180);
  const radSpread = spread * (Math.PI / 80);
  return {
    x: 0,
    y: 0,
    wobble: Math.random() * 10,
    velocity: startVelocity * 0.5 + Math.random() * startVelocity,
    angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
    angle3D: -(Math.PI / 4) + Math.random() * (Math.PI / 2),
    tiltAngle: Math.random() * Math.PI,
  };
}

function updateConfetti(confetti, progress, decay) {
  confetti.physics.x +=
    Math.cos(confetti.physics.angle2D) * confetti.physics.velocity;
  confetti.physics.y +=
    Math.sin(confetti.physics.angle2D) * confetti.physics.velocity;
  confetti.physics.z +=
    Math.sin(confetti.physics.angle3D) * confetti.physics.velocity;
  confetti.physics.wobble += 0.1;
  confetti.physics.velocity *= decay;
  confetti.physics.y += 3;
  confetti.physics.tiltAngle += 0.1;

  const { x, y, tiltAngle, wobble } = confetti.physics;
  const wobbleX = x + 10 * Math.cos(wobble);
  const wobbleY = y + 10 * Math.sin(wobble);
  const transform = `translate3d(${wobbleX}px, ${wobbleY}px, 0) rotate3d(1, 1, 1, ${tiltAngle}rad)`;

  confetti.element.style.transform = transform;
  confetti.element.style.opacity = 1 - progress;
}

function animate(root, confettis, decay) {
  const totalTicks = 400;
  let tick = 0;

  function update() {
    confettis.forEach((confetti) =>
      updateConfetti(confetti, tick / totalTicks, decay)
    );

    tick += 1;
    if (tick < totalTicks) {
      requestAnimationFrame(update);
    } else {
      confettis.forEach((confetti) => root.removeChild(confetti.element));
    }
  }

  requestAnimationFrame(update);
}

function confetti(
  root,
  {
    angle = 90,
    decay = 0.9,
    spread = 100,
    startVelocity = 45,
    elementCount = 500,
  } = {}
) {
  const elements = createElements(root, elementCount);
  const confettis = elements.map((element) => ({
    element,
    physics: randomPhysics(angle, spread, startVelocity),
  }));

  animate(root, confettis, decay);
}

const confettiClick = document.querySelector(".results_Content");

confetti(confettiClick);

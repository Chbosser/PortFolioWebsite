function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function setupStarCanvas(canvasId, starCount = 60) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  let stars = [];

  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: getRandom(0, canvas.width),
        y: getRandom(0, canvas.height),
        radius: getRandom(0.5, 2.2),

        alpha: getRandom(0.3, 1),
        speed: getRandom(0.009, 0.02),
        direction: Math.random() > 0.5 ? 1 : -1
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
      star.alpha += star.speed * star.direction;

      if (star.alpha >= 1) {
        star.alpha = 1;
        star.direction = -1;
      }

      if (star.alpha <= 0.2) {
        star.alpha = 0.2;
        star.direction = 1;
      }

      ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  resizeCanvas();
  animate();

  window.addEventListener("resize", resizeCanvas);
}

setupStarCanvas("canvas-1", 60);
setupStarCanvas("canvas-2", 60);

// Project Stardust
// No for loops I'll have to use setInterval() timeout and Animation Frames
// 
//
//
//
//
//
//
//
//
//
//

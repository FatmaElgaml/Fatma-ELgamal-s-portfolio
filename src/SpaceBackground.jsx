import { useEffect, useRef } from "react";

function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let particles = [];
    let pulses = [];

    let mouseX = 0;
    let mouseY = 0;

    const PARTICLE_COUNT = 340;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      particles = [];

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const wave = Math.floor(Math.random() * 5);

        particles.push({
          x: Math.random() * window.innerWidth,
          wave,
          offset: Math.random() * Math.PI * 2,
          speed: 0.01 + Math.random() * 0.025,
          size: 0.5 + Math.random() * 1.5,
          opacity: 0.15 + Math.random() * 0.55,
          depth: Math.random(),
          purple: Math.random() > 0.78,
        });
      }
    };

    const createPulse = () => {
      if (Math.random() < 0.006) { 
        pulses.push({
          wave: Math.floor(Math.random() * 5),
          progress: 0,
          speed: 0.0008 + Math.random() * 0.0012,
          life: 1,
        });
      }
    };

    const getWavePosition = (particle, time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const progress = particle.x / width;

      const baseY =
        height * 0.18 +
        particle.wave * height * 0.15;

      const amplitude =
        18 +
        particle.depth * 32;

      const wave =
        Math.sin(
          progress * Math.PI * 3 +
            time * particle.speed +
            particle.offset
        ) * amplitude;

      const secondWave =
        Math.sin(
          progress * Math.PI * 6 -
            time * particle.speed * 0.6
        ) * 10;

      return {
        x: particle.x,
        y: baseY + wave + secondWave,
      };
    };

    const drawBackground = (time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const gradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      gradient.addColorStop(0, "#020617");
      gradient.addColorStop(0.5, "#06152e");
      gradient.addColorStop(1, "#020617");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.45,
        width * 0.65
      );

      glow.addColorStop(
        0,
        "rgba(0, 217, 255, 0.06)"
      );

      glow.addColorStop(
        0.45,
        "rgba(80, 100, 255, 0.025)"
      );

      glow.addColorStop(
        1,
        "rgba(0, 0, 0, 0)"
      );

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawParticles = (time) => {
      particles.forEach((particle) => {
        particle.x += particle.speed;

        if (particle.x > window.innerWidth + 20) {
          particle.x -= window.innerWidth + 40;
        }

        const position = getWavePosition(
          particle,
          time
        );

        const parallaxX = mouseX * particle.depth * 5;
        const parallaxY = mouseY * particle.depth * 5;

        const x = position.x + parallaxX;
        const y = position.y + parallaxY;

        const depthScale =
          0.5 + particle.depth * 0.9;

        const size =
          particle.size * depthScale;

        const pulse =
          Math.sin(time * 0.002 + particle.offset) *
            0.25 +
          0.75;

        const opacity =
          particle.opacity *
          pulse *
          (0.45 + particle.depth * 0.7);

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = particle.purple
          ? `rgba(168, 85, 247, ${opacity})`
          : `rgba(0, 217, 255, ${opacity})`;

        ctx.fill();
      });
    };

    const drawWaveConnections = (time) => {
      const width = window.innerWidth;

      for (let wave = 0; wave < 5; wave++) {
        const points = [];

        for (let x = 0; x <= width; x += 28) {
          const progress = x / width;

          const baseY =
            window.innerHeight * 0.18 +
            wave * window.innerHeight * 0.15;

          const y =
            baseY +
            Math.sin(
              progress * Math.PI * 3 +
                time * 0.0004 +
                wave
            ) *
              (20 + wave * 4);

          points.push({ x, y });
        }

        ctx.beginPath();

        points.forEach((point, index) => {
          if (index === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            ctx.lineTo(point.x, point.y);
          }
        });

        ctx.strokeStyle =
          wave % 2 === 0
            ? "rgba(0, 217, 255, 0.035)"
            : "rgba(139, 92, 246, 0.025)";

        ctx.lineWidth = 1;

        ctx.stroke();
      }
    };

    const drawPulses = () => {
      pulses.forEach((pulse) => {
        const width = window.innerWidth;

        const x = width * pulse.progress;

        const baseY =
          window.innerHeight * 0.18 +
          pulse.wave *
            window.innerHeight *
            0.15;

        const y =
          baseY +
          Math.sin(
            pulse.progress * Math.PI * 3 +
              pulse.wave
          ) *
            (20 + pulse.wave * 4);

        const glow = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          18
        );

        glow.addColorStop(
          0,
          `rgba(0, 217, 255, ${pulse.life})`
        );

        glow.addColorStop(
          0.35,
          `rgba(139, 92, 246, ${
            pulse.life * 0.45
          })`
        );

        glow.addColorStop(
          1,
          "rgba(0, 0, 0, 0)"
        );

        ctx.fillStyle = glow;

        ctx.fillRect(
          x - 20,
          y - 20,
          40,
          40
        );

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          1.8,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(220, 250, 255, ${pulse.life})`;

        ctx.fill();

        pulse.progress += pulse.speed;
        pulse.life -= 0.0015;
      });

      pulses = pulses.filter(
        (pulse) =>
          pulse.progress < 1 &&
          pulse.life > 0
      );
    };

    const animate = (time) => {
      drawBackground(time);
      drawWaveConnections(time);
      drawParticles(time);
      createPulse();
      drawPulses();

      animationFrame =
        requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouseX =
        event.clientX / window.innerWidth - 0.5;

      mouseY =
        event.clientY / window.innerHeight - 0.5;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    resizeCanvas();
    createParticles();

    window.addEventListener(
      "resize",
      handleResize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="space-background"
      aria-hidden="true"
    />
  );
}

export default SpaceBackground;

import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  pointer-events: none;
  opacity: ${(props) => (props.isRaining ? 1 : 0)};
  transition: opacity 1s ease;
`;

class RainDrop {
  constructor(canvas, theme) {
    this.canvas = canvas;
    this.theme = theme;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * -100;
    this.length = Math.random() * 20 + 10;
    this.speed = Math.random() * 15 + 10;
    this.opacity = Math.random() * 0.3 + 0.1;
    this.wind = Math.random() * 2 - 1;
  }

  update() {
    this.y += this.speed;
    this.x += this.wind;

    if (this.y > this.canvas.height) {
      this.reset();
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.wind, this.y + this.length);
    ctx.strokeStyle = `rgba(100, 181, 246, ${this.opacity})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

class Splash {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = Math.random() * 5 + 3;
    this.opacity = 0.5;
    this.speed = 0.5;
  }

  update() {
    this.radius += this.speed;
    this.opacity -= 0.02;
  }

  draw(ctx) {
    if (this.opacity <= 0) return;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(100, 181, 246, ${this.opacity})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  isDead() {
    return this.opacity <= 0 || this.radius >= this.maxRadius;
  }
}

const RainCanvas = ({ isRaining, theme, intensity = 1 }) => {
  const canvasRef = useRef(null);
  const rainDropsRef = useRef([]);
  const splashesRef = useRef([]);
  const animationRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const dropCount = isMobile
    ? Math.floor(300 * intensity)
    : Math.floor(1000 * intensity);

  const initRain = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    rainDropsRef.current = [];
    for (let i = 0; i < dropCount; i++) {
      rainDropsRef.current.push(new RainDrop(canvas, theme));
    }
  }, [dropCount, theme]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw rain drops
    rainDropsRef.current.forEach((drop) => {
      drop.update();
      drop.draw(ctx);

      // Create splash when drop hits bottom
      if (drop.y >= canvas.height - 5 && Math.random() > 0.95) {
        splashesRef.current.push(new Splash(drop.x, canvas.height - 5));
      }
    });

    // Update and draw splashes
    splashesRef.current = splashesRef.current.filter((splash) => {
      splash.update();
      splash.draw(ctx);
      return !splash.isDead();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initRain();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (isRaining) {
      initRain();
      animate();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRaining, initRain, animate]);

  return <Canvas ref={canvasRef} isRaining={isRaining} />;
};

export default RainCanvas;

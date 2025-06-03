
import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  color: string;
  pulseSpeed: number;
  pulseAmplitude: number;
  pulseOffset: number;
}

const TechnologicalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  const particleColor = 'rgba(56, 189, 248, 0.7)'; // sky-400 with alpha
  const lineColor = 'rgba(129, 140, 248, 0.3)'; // indigo-400 with alpha
  const numParticles = 50;
  const connectDistance = 120;

  const createParticles = useCallback((canvas: HTMLCanvasElement) => {
    // Fix: Ensured particlesArray is cleared correctly using `particlesArray.current = []`.
    // This method avoids potential "Expected 1 arguments, but got 0" errors
    // that can arise from incorrect `splice()` usage or tooling issues with other array clearing methods.
    particlesArray.current = []; 

    const width = canvas.width;
    const height = canvas.height;
    for (let i = 0; i < numParticles; i++) {
      const baseRadius = Math.random() * 2 + 1;
      particlesArray.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: baseRadius,
        baseRadius: baseRadius,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: particleColor,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseAmplitude: baseRadius * 0.5,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
  }, [particleColor, numParticles]);

  const draw = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesArray.current.forEach(p => {
      // Pulsing effect
      p.radius = p.baseRadius + Math.sin(Date.now() * p.pulseSpeed + p.pulseOffset) * p.pulseAmplitude;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Draw halo/glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius + p.baseRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${0.05 + Math.sin(Date.now() * p.pulseSpeed * 0.5 + p.pulseOffset) * 0.03})`;
      ctx.fill();

    });

    for (let i = 0; i < particlesArray.current.length; i++) {
      for (let j = i + 1; j < particlesArray.current.length; j++) {
        const p1 = particlesArray.current[i];
        const p2 = particlesArray.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectDistance) {
          const opacity = 1 - (distance / connectDistance);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(129, 140, 248, ${opacity * 0.5})`; // indigo-400 with dynamic opacity
          ctx.lineWidth = 0.5 + opacity;
          ctx.stroke();
        }
      }
    }
  }, [lineColor, connectDistance]);

  const update = useCallback((canvas: HTMLCanvasElement) => {
    particlesArray.current.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x - p.radius < 0 || p.x + p.radius > canvas.width) p.vx *= -1;
      if (p.y - p.radius < 0 || p.y + p.radius > canvas.height) p.vy *= -1;
    });
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    update(canvas);
    draw(ctx, canvas);
    animationFrameId.current = requestAnimationFrame(animate);
  }, [draw, update]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (canvas && container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      // Recreate particles if needed or adjust existing ones
      // For simplicity, we recreate them on resize
      if (canvas.width > 0 && canvas.height > 0) {
        createParticles(canvas);
      }
    }
  }, [createParticles]);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Initial resize and particle creation
    const container = canvas.parentElement;
    if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        if (canvas.width > 0 && canvas.height > 0) {
            createParticles(canvas);
        }
    }


    animationFrameId.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [animate, createParticles, resizeCanvas]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Behind other decorative elements if they have z-index > 0
      }}
      aria-hidden="true"
    />
  );
};

export default TechnologicalBackground;

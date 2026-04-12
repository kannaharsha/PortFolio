import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  offset: number;
}

interface RainPiece {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  active: boolean;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let stars: Star[] = [];
    let rain: RainPiece[] = [];
    let comets: Comet[] = [];
    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      initElements();
    };

    const initElements = () => {
      stars = [];
      rain = [];
      comets = [];
      
      const starCount = Math.floor(window.innerWidth * 0.1);
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.4 + 0.1,
          twinkleSpeed: Math.random() * 0.05 + 0.01,
          offset: Math.random() * Math.PI * 2
        });
      }

      const rainCount = Math.floor(window.innerWidth * 0.12);
      for (let i = 0; i < rainCount; i++) {
        rain.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          length: Math.random() * 15 + 5,
          speed: Math.random() * 4 + 2,
          opacity: Math.random() * 0.15 + 0.05
        });
      }

      for (let i = 0; i < 2; i++) {
        comets.push(resetComet({ active: false }));
      }
    };

    const resetComet = (base: Partial<Comet>): Comet => {
      const angle = (Math.random() * Math.PI / 4) + Math.PI / 8;
      return {
        x: Math.random() * window.innerWidth,
        y: -100,
        vx: Math.cos(angle) * 18,
        vy: Math.sin(angle) * 18,
        length: Math.random() * 80 + 40,
        opacity: 0,
        active: false,
        ...base
      };
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.fillStyle = '#030306';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach(s => {
        const twinkle = Math.sin(Date.now() * s.twinkleSpeed + s.offset);
        const opacity = s.opacity + twinkle * 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, opacity)})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        
        if (Math.random() > 0.9997) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'white';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      ctx.lineCap = 'round';
      rain.forEach(r => {
        r.y += r.speed;
        if (r.y > window.innerHeight) {
          r.y = -r.length;
          r.x = Math.random() * window.innerWidth;
        }

        ctx.strokeStyle = `rgba(59, 130, 246, ${r.opacity})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x, r.y + r.length);
        ctx.stroke();
      });

      comets.forEach(c => {
        if (!c.active && Math.random() > 0.998) {
          Object.assign(c, resetComet({ active: true, opacity: 1 }));
        }

        if (c.active) {
          c.x += c.vx;
          c.y += c.vy;
          c.opacity -= 0.015;

          if (c.opacity <= 0 || c.x > window.innerWidth || c.y > window.innerHeight) {
            c.active = false;
          }

          const grad = ctx.createLinearGradient(c.x, c.y, c.x - c.vx, c.y - c.vy);
          grad.addColorStop(0, `rgba(255, 255, 255, ${c.opacity})`);
          grad.addColorStop(1, 'transparent');
          
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(c.x, c.y);
          ctx.lineTo(c.x - c.vx * 3, c.y - c.vy * 3);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

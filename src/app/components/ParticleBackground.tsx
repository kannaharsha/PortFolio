import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth * 0.07); // Responsive count

      for (let i = 0; i < particleCount; i++) {
        // Distribute sizes for depth: mostly small, some medium, few large
        const sizeRandom = Math.random();
        let size = 0.5;
        if (sizeRandom > 0.8) size = Math.random() * 1.5 + 1; // Medium
        if (sizeRandom > 0.95) size = Math.random() * 2 + 2.5; // Large (foreground)

        // Speed correlates with size for parallax (larger = faster)
        const speedY = size * (Math.random() * 0.2 + 0.1);
        const speedX = (Math.random() - 0.5) * 0.2;
        
        const opacity = size > 2 ? Math.random() * 0.4 + 0.4 : Math.random() * 0.3 + 0.1;

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseX: 0, // Unused for now, but helpful for anchor points
          baseY: 0,
          size,
          speedY,
          speedX,
          opacity,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const { x: mouseX, y: mouseY, radius } = mouseRef.current;

      particles.forEach((particle) => {
        // Natural floating movement
        particle.y += particle.speedY;
        particle.x += particle.speedX;

        // Mouse interaction for parallax/repel
        if (mouseX !== 0 && mouseY !== 0) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < radius) {
            // Apply force inversely proportional to distance
            const force = (radius - distance) / radius;
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            
            // Push away from mouse
            particle.x -= forceDirectionX * force * particle.size;
            particle.y -= forceDirectionY * force * particle.size;
          }
        }

        // Boundary wrapping
        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x > canvas.width + 10) {
          particle.x = -10;
        } else if (particle.x < -10) {
          particle.x = canvas.width + 10;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Dynamic styling for AI/futuristic glow
        const r = 59;
        const g = 130;
        const b = 246; // Tailwind blue-500 equivalent oklch matches primary nicely
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
        
        if (particle.size > 1.5) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.8)`;
        } else {
          ctx.shadowBlur = 0; // Optimize performance by skipping shadow on small particles
        }
        
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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

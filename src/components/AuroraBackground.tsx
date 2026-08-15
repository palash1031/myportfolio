import { useEffect, useRef, useState } from 'react';

type Blob = {
  className: string;
  size: string;
  top: string;
  left: string;
  color: string;
  depth: number;
  delay: string;
};

/** Each blob drifts at its own depth to build a subtle parallax field. */
const blobs: Blob[] = [
  {
    className: 'aurora-blue',
    size: 'h-[38rem] w-[38rem]',
    top: '-6%',
    left: '55%',
    color: 'hsl(var(--fluid-blue))',
    depth: 0.022,
    delay: '0s',
  },
  {
    className: 'aurora-cyan',
    size: 'h-[30rem] w-[30rem]',
    top: '38%',
    left: '2%',
    color: 'hsl(var(--fluid-cyan))',
    depth: -0.018,
    delay: '-8s',
  },
  {
    className: 'aurora-peach',
    size: 'h-[34rem] w-[34rem]',
    top: '62%',
    left: '62%',
    color: 'hsl(var(--fluid-peach))',
    depth: 0.014,
    delay: '-14s',
  },
  {
    className: 'aurora-coral',
    size: 'h-[26rem] w-[26rem]',
    top: '18%',
    left: '18%',
    color: 'hsl(var(--fluid-coral))',
    depth: -0.01,
    delay: '-20s',
  },
];

const AuroraBackground = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [pointerActive, setPointerActive] = useState(false);

  useEffect(() => {
    // Parallax is pointer-driven; skip it entirely for touch and for visitors
    // who asked for reduced motion.
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    // Only now is it safe to mount the glow. It is positioned purely by the
    // transform below, so rendering it while tracking is disabled would park it
    // permanently at the top-left corner.
    setPointerActive(true);

    const render = () => {
      frame.current = null;
      const { x, y } = pointer.current;

      blobRefs.current.forEach((el, index) => {
        if (!el) return;
        const { depth } = blobs[index];
        el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
      });

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      // Coalesce every move into one write per animation frame.
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(render);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Cursor spotlight — mounted only once pointer tracking is running */}
      {pointerActive && (
        <div ref={glowRef} className="cursor-glow hidden md:block" style={{ left: 0, top: 0 }} />
      )}

      {/* Aurora field — the color the glass panels refract */}
      {blobs.map((blob, index) => (
        <div
          key={blob.className}
          ref={(el) => {
            blobRefs.current[index] = el;
          }}
          className={`aurora-blob ${blob.size}`}
          style={{
            top: blob.top,
            left: blob.left,
            background: blob.color,
            animationDelay: blob.delay,
          }}
        />
      ))}

      {/* Floating specks for depth */}
      <div
        className="animate-float absolute h-2 w-2 rounded-full bg-primary/50"
        style={{ top: '22%', left: '24%' }}
      />
      <div
        className="animate-float absolute h-3 w-3 rounded-full bg-accent/40"
        style={{ top: '58%', left: '78%', animationDelay: '-2s' }}
      />
      <div
        className="animate-float absolute h-2 w-2 rounded-full bg-fluid-peach/50"
        style={{ top: '80%', left: '42%', animationDelay: '-4s' }}
      />

      {/* Grid — the only high-frequency detail on the page, which is what gives
          the glass panels something to actually refract. Kept near-subliminal:
          a regular pattern on a smooth field is easy for the eye to lock onto,
          so light mode (a wide, flat, near-white expanse) is cut hardest and
          the cells are sparser than the panel radii to avoid reading as ruled
          paper. Set both opacities to 0 to remove it entirely. */}
      <div
        className="absolute inset-0 opacity-[0.012] dark:opacity-[0.022]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.4) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 12%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 40%, black 12%, transparent 78%)',
        }}
      />

      {/* Film grain, keeps the big blurred areas from banding */}
      <div className="noise-overlay absolute inset-0 opacity-[0.15] mix-blend-overlay dark:opacity-[0.08]" />
    </div>
  );
};

export default AuroraBackground;

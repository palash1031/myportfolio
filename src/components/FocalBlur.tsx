/**
 * Tilt-shift focus band.
 *
 * A fixed overlay pinned to the top and bottom of the viewport that throws the
 * page edges gently out of focus, leaving the middle crisp. Because the overlay
 * is fixed and the page scrolls beneath it, content drifts in and out of focus
 * on its own — no scroll listener, no per-element filters, nothing to keep in
 * sync.
 *
 * CSS has no gradient blur, so the falloff is faked the standard way: several
 * stacked `backdrop-filter` layers, each blurring harder but masked into a
 * narrower strip at the very edge. Blur compounds where the layers overlap,
 * which reads as a smooth ramp rather than a visible band.
 */

type Layer = {
  blur: number;
  /** How far into the band this layer survives, as a % of band height. */
  fade: number;
};

// Ordered weakest -> strongest. Compounded blur at the extreme edge lands
// around 4-5px, which reads as "slightly soft" rather than "smeared".
const layers: Layer[] = [
  { blur: 0.5, fade: 100 },
  { blur: 1, fade: 70 },
  { blur: 2, fade: 45 },
  { blur: 4, fade: 22 },
];

/**
 * Multi-stop falloff approximating an ease-out curve. A plain two-stop ramp
 * changes slope abruptly where it starts and ends, and the eye picks that up as
 * a faint edge — extra stops smear the transition out so no band is visible.
 */
const maskFor = (direction: 'to bottom' | 'to top', fade: number) =>
  `linear-gradient(${direction},` +
  ` rgba(0,0,0,1) 0%,` +
  ` rgba(0,0,0,0.97) ${(fade * 0.22).toFixed(1)}%,` +
  ` rgba(0,0,0,0.85) ${(fade * 0.42).toFixed(1)}%,` +
  ` rgba(0,0,0,0.6) ${(fade * 0.6).toFixed(1)}%,` +
  ` rgba(0,0,0,0.3) ${(fade * 0.78).toFixed(1)}%,` +
  ` rgba(0,0,0,0.1) ${(fade * 0.9).toFixed(1)}%,` +
  ` rgba(0,0,0,0) ${fade}%)`;

const Band = ({ edge }: { edge: 'top' | 'bottom' }) => {
  const direction = edge === 'top' ? 'to bottom' : 'to top';

  return (
    // The bottom band is deliberately shallower: at rest the hero's CTAs sit
    // near the fold, and a soft primary button on first paint reads as a
    // rendering fault rather than an effect.
    <div
      className={`absolute inset-x-0 ${
        edge === 'top' ? 'top-0 h-[16vh]' : 'bottom-0 h-[11vh]'
      }`}
    >
      {layers.map((layer) => (
        <div
          key={layer.blur}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: maskFor(direction, layer.fade),
            WebkitMaskImage: maskFor(direction, layer.fade),
          }}
        />
      ))}

      {/* Faint wash toward the page colour, strongest at the outer edge and
          fully gone by the inner edge. The direction must match `direction`:
          running it the other way peaks the wash where the band meets normal
          content, which shows up as a hard horizontal seam. */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${direction}, hsl(var(--background) / 0.14) 0%, hsl(var(--background) / 0.05) 45%, hsl(var(--background) / 0) 100%)`,
        }}
      />
    </div>
  );
};

const FocalBlur = () => (
  <div className="pointer-events-none fixed inset-0 z-40" aria-hidden="true">
    <Band edge="top" />
    <Band edge="bottom" />
  </div>
);

export default FocalBlur;

import { useEffect, useRef } from "react";

type Props = {
  imageUrl?: string;
};

// A lightweight parallax background that responds to mouse/touch
export const HeroBackground3D = ({ imageUrl = "/cities/chennai.jpg" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = el.getBoundingClientRect();
      const clientX = (e as MouseEvent).clientX ?? (e as TouchEvent).touches?.[0]?.clientX ?? 0;
      const clientY = (e as MouseEvent).clientY ?? (e as TouchEvent).touches?.[0]?.clientY ?? 0;
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--tiltX", `${x * 8}deg`);
      el.style.setProperty("--tiltY", `${-y * 8}deg`);
      el.style.setProperty("--parallaxX", `${x * 10}px`);
      el.style.setProperty("--parallaxY", `${y * 10}px`);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove as any);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="absolute inset-0 overflow-hidden [perspective:1000px]"
      style={{ transformStyle: "preserve-3d" as any }}
    >
      <div
        className="absolute -inset-10 opacity-40 will-change-transform"
        style={{
          transform: "rotateX(var(--tiltY)) rotateY(var(--tiltX)) translateZ(0)",
        }}
      >
        <img src={imageUrl} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.2), transparent 60%)",
          transform: "translate3d(var(--parallaxX), var(--parallaxY), 0)",
        }}
      />
    </div>
  );
};

export default HeroBackground3D;



import { useEffect, useRef } from "react";
import VanillaTilt, { VanillaTiltOptions } from "vanilla-tilt";

type TiltProps = React.HTMLAttributes<HTMLDivElement> & {
  options?: VanillaTiltOptions;
};

const defaultOptions: VanillaTiltOptions = {
  max: 10,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  scale: 1.02,
};

export const Tilt = ({ options, children, ...rest }: TiltProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    VanillaTilt.init(ref.current, { ...defaultOptions, ...(options || {}) });
    return () => {
      (ref.current as any)?.vanillaTilt?.destroy?.();
    };
  }, [options]);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
};

export default Tilt;



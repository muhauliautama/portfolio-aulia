import {
  useSprings,
  animated,
  SpringConfig,
  easings,
} from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

interface AnimationStyle {
  opacity?: number;
  transform?: string;
  filter?: string;
}

type AnimationProps = {
  opacity: number;
  transform: string;
  filter?: string;
};

type NextFn = (props: AnimationProps) => Promise<void>;

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: AnimationStyle;
  animationTo?: AnimationStyle;
  easing?: keyof typeof easings; // Changed to use react-spring's built-in easings
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right";
  onLetterAnimationComplete?: () => void;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  delay = 100,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  easing = "easeOutCubic",
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const letters = text.split("");
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef<number>(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom as AnimationProps,
      to: async (next: NextFn) => {
        if (inView) {
          await next(animationTo as AnimationProps);
          animatedCount.current += 1;
          if (
            animatedCount.current === letters.length &&
            onLetterAnimationComplete
          ) {
            onLetterAnimationComplete();
          }
        }
      },
      delay: i * delay,
      config: {
        mass: 1,
        tension: 170,
        friction: 26,
        easing: easings[easing],
      } as SpringConfig,
    }))
  );

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline ${className}`}
      style={{ textAlign }}
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block transform transition-opacity will-change-transform"
        >
          {letters[index] === " " ? "\u00A0" : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: AnimationStyle;
  animationTo?: AnimationStyle[];
  easing?: keyof typeof easings; // Changed to use react-spring's built-in easings
  onAnimationComplete?: () => void;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOutCubic",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef<number>(0);

  const defaultFrom: AnimationProps =
    direction === "top"
      ? {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,-50px,0)",
        }
      : {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,50px,0)",
        };

  const defaultTo: AnimationProps[] = [
    {
      filter: "blur(5px)",
      opacity: 0.5,
      transform:
        direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: (animationFrom || defaultFrom) as AnimationProps,
      to: async (next: NextFn) => {
        if (inView) {
          for (const step of animationTo || defaultTo) {
            await next(step as AnimationProps);
          }
          animatedCount.current += 1;
          if (
            animatedCount.current === elements.length &&
            onAnimationComplete
          ) {
            onAnimationComplete();
          }
        }
      },
      delay: i * delay,
      config: {
        mass: 1,
        tension: 170,
        friction: 26,
        easing: easings[easing],
      } as SpringConfig,
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
        >
          {elements[index] === " " ? " " : elements[index]}
          {animateBy === "words" && index < elements.length - 1 && " "}
        </animated.span>
      ))}
    </p>
  );
};

// ShinyText component remains unchanged
interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration,
      }}
    >
      {text}
    </div>
  );
};

import React, { useRef, useEffect, useState, ReactNode } from "react";
import {
  useSpring,
  animated,
  SpringValue,
  SpringConfig,
} from "@react-spring/web";

type Direction = "vertical" | "horizontal";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: Direction;
  reverse?: boolean;
  config?: SpringConfig;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
}

interface SpringStyles {
  transform: SpringValue<string>;
  opacity: SpringValue<number>;
}

export const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
}) => {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  const directions: Record<Direction, string> = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring<SpringStyles>({
    from: {
      transform: `translate${directions[direction]}(${
        reverse ? `-${distance}px` : `${distance}px`
      }) scale(${scale})`,
      opacity: animateOpacity ? initialOpacity : 1,
    },
    to: inView
      ? { transform: "translateY(0px) scale(1)", opacity: 1 }
      : undefined,
    config,
  });

  return (
    <animated.div ref={ref} style={springProps}>
      {children}
    </animated.div>
  );
};

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  threshold?: number;
  initialOpacity?: number;
}

interface FadeStyles extends React.CSSProperties {
  opacity: number;
  transition: string;
  filter: string;
}

export const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  threshold = 0.1,
  initialOpacity = 0,
}) => {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  const styles: FadeStyles = {
    opacity: inView ? 1 : initialOpacity,
    transition: `opacity ${duration}ms ${easing}, filter ${duration}ms ${easing}`,
    filter: blur ? (inView ? "blur(0px)" : "blur(10px)") : "none",
  };

  return (
    <div ref={ref} style={styles}>
      {children}
    </div>
  );
};

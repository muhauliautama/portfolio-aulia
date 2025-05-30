import React, {
  useRef,
  useEffect,
  useState,
  ReactNode,
  MouseEvent,
} from "react";
import {
  useSpring,
  animated,
  SpringValue,
  SpringConfig,
} from "@react-spring/web";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

// for animated content
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

// for fade content
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

// for scroll
interface ScrollItem {
  content: React.ReactNode;
}
interface InfiniteScrollProps {
  // ----- Layout / Style Props -----
  width?: string;
  maxHeight?: string;
  negativeMargin?: string;
  // ----- Items Prop -----
  items?: ScrollItem[];
  itemMinHeight?: number;
  // ----- Tilt Props -----
  isTilted?: boolean;
  tiltDirection?: "left" | "right";
  // ----- Autoplay Props -----
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: "up" | "down";
  pauseOnHover?: boolean;
}

// for card
interface Position {
  x: number;
  y: number;
}
interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
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

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  // ----- Layout / Style Props -----
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  // ----- Items Prop -----
  items = [],
  itemMinHeight = 150,
  // ----- Tilt Props -----
  isTilted = false,
  tiltDirection = "left",
  // ----- Autoplay Props -----
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}: InfiniteScrollProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTiltTransform = () => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: (self) => {
        (self.target as HTMLElement).style.cursor = "grabbing";
      },
      onRelease: (self) => {
        (self.target as HTMLElement).style.cursor = "grab";
      },
      onChange: (self) => {
        const d =
          (self.event as WheelEvent).type === "wheel"
            ? -self.deltaY
            : self.deltaY;
        const distance = self.isDragging ? d * 5 : d * 10;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            y: `+=${distance}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId: number | undefined;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => {
          rafId = requestAnimationFrame(tick);
        };

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
  ]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden overscroll-none"
      ref={wrapperRef}
      style={{ maxHeight }}
    >
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      {/* Container */}
      <div
        className="flex flex-col overscroll-contain px-4 cursor-grab origin-center"
        ref={containerRef}
        style={{
          width,
          transform: getTiltTransform(),
        }}
      >
        {items.map((item, i) => (
          <div
            className="flex items-center justify-center p-4 text-xl font-semibold text-center border border-white rounded-[15px] select-none box-border relative"
            key={i}
            style={{
              height: `${itemMinHeight}px`,
              marginTop: negativeMargin,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-5 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

gsap.registerPlugin(Observer);

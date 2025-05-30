import { useEffect, useRef, useState } from "react";
import { useSprings, animated, SpringConfig, easings } from "@react-spring/web";
import { motion, HTMLMotionProps } from "framer-motion";

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

type RevealDirection = "start" | "end" | "center";
type AnimateOn = "view" | "hover";

interface Position {
  char: string;
  isSpace: boolean;
  index: number;
  isRevealed: boolean;
}

interface DecryptedTextProps extends Omit<HTMLMotionProps<"span">, "ref"> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: RevealDirection;
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: AnimateOn;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  ...props
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set()
  );
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    let currentIteration = 0;

    const getNextIndex = (revealedSet: Set<number>): number => {
      const textLength = text.length;
      switch (revealDirection) {
        case "start":
          return revealedSet.size;
        case "end":
          return textLength - 1 - revealedSet.size;
        case "center": {
          const middle = Math.floor(textLength / 2);
          const offset = Math.floor(revealedSet.size / 2);
          const nextIndex =
            revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;

          if (
            nextIndex >= 0 &&
            nextIndex < textLength &&
            !revealedSet.has(nextIndex)
          ) {
            return nextIndex;
          }
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i;
          }
          return 0;
        }
        default:
          return revealedSet.size;
      }
    };

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("");

    const shuffleText = (
      originalText: string,
      currentRevealed: Set<number>
    ): string => {
      if (useOriginalCharsOnly) {
        const positions: Position[] = originalText.split("").map((char, i) => ({
          char,
          isSpace: char === " ",
          index: i,
          isRevealed: currentRevealed.has(i),
        }));

        const nonSpaceChars = positions
          .filter((p) => !p.isSpace && !p.isRevealed)
          .map((p) => p.char);

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [nonSpaceChars[i], nonSpaceChars[j]] = [
            nonSpaceChars[j],
            nonSpaceChars[i],
          ];
        }

        let charIndex = 0;
        return positions
          .map((p) => {
            if (p.isSpace) return " ";
            if (p.isRevealed) return originalText[p.index];
            return nonSpaceChars[charIndex++];
          })
          .join("");
      } else {
        return originalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (currentRevealed.has(i)) return originalText[i];
            return availableChars[
              Math.floor(Math.random() * availableChars.length)
            ];
          })
          .join("");
      }
    };

    if (isHovering) {
      setIsScrambling(true);
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              const newRevealed = new Set(prevRevealed);
              newRevealed.add(nextIndex);
              setDisplayText(shuffleText(text, newRevealed));
              return newRevealed;
            } else {
              clearInterval(interval);
              setIsScrambling(false);
              return prevRevealed;
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prevRevealed;
          }
        });
      }, speed);
    } else {
      setDisplayText(text);
      setRevealedIndices(new Set());
      setIsScrambling(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    characters,
    useOriginalCharsOnly,
  ]);

  useEffect(() => {
    if (animateOn !== "view") return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === "hover"
      ? {
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }
      : {};

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap relative ${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      <span className="sr-only">{displayText}</span>

      <span aria-hidden="true">
        {displayText.split("").map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || !isHovering;

          return (
            <span
              key={index}
              className={isRevealedOrDone ? className : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
};

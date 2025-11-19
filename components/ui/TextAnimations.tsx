"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface TextAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

export const TextScramble: React.FC<TextAnimationProps> = ({
  children,
  className = "",
  duration = 0.5,
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isAnimating) {
      let frame = 0;
      const totalFrames = duration * 60;

      const interval = setInterval(() => {
        setIsAnimating(true);

        const progress = frame / totalFrames;

        setDisplayText(
          children
            .split("")
            .map((char, index) => {
              if (progress * children.length > index) {
                return children[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplayText(children);
          setIsAnimating(false);
        }

        frame++;
      }, 16); // ~60fps

      // Start delay
      if (delay > 0) {
        const timeoutId = setTimeout(() => {}, delay * 500);
        return () => {
          clearTimeout(timeoutId);
          clearInterval(interval);
        };
      }

      return () => clearInterval(interval);
    }
  }, [isInView, children, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      {displayText}
    </motion.span>
  );
};

export const TypewriterText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = "", delay = 0 }) => {
  const chars = Array.from(text);

  return (
    <span className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + i * 0.05,
            ease: "easeIn",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export const TextReveal: React.FC<TextAnimationProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  // Split text into characters
  const characters = children.split("");

  return (
    <div className={`relative overflow-hidden inline-flex ${className}`}>
      <span className="sr-only">{children}</span>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-pre"
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing closer to power4.out
            delay: delay + index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

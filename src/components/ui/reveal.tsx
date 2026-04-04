"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "scale";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  once?: boolean;
  amount?: number;
  direction?: RevealDirection;
};

const directionClassMap: Record<RevealDirection, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.14,
  direction = "up",
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: amount,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [amount, once]);

  return (
    <div
      ref={ref}
      data-reveal-visible={isVisible}
      className={cn("reveal", directionClassMap[direction], className)}
      style={
        {
          ...style,
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}

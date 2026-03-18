"use client";

import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  [key: string]: unknown;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <Component
      className={cn("relative h-16 w-40 overflow-hidden bg-transparent p-[1px]", containerClassName)}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius: rx ? `${rx}px` : "12px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
        >
          <rect fill="none" width="100%" height="100%" rx={rx || "12"} ry={ry || "12"} ref={pathRef} />
        </svg>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          <div className={cn("h-20 w-20 opacity-[0.8] bg-[radial-gradient(circle,#FF4E00_0%,#911ECC_50%,transparent_70%)]", borderClassName)} />
        </motion.div>
      </div>
      <div
        className={cn("relative flex h-full w-full items-center justify-center", className)}
        style={{ borderRadius: `calc(${rx || 12}px * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

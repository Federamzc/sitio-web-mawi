"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#FF4E00",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={{ "--border-radius": `${borderRadius}px` } as React.CSSProperties}
      className={cn(
        "relative place-items-center rounded-[--border-radius]",
        className
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
              Array.isArray(color) ? color.join(",") : color
            },transparent,transparent)`,
          } as React.CSSProperties
        }
        className="absolute inset-0 rounded-[--border-radius] p-[--border-width] ![mask-composite:subtract] [mask:--mask-linear-gradient] before:absolute before:inset-0 before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:animate-[shine_var(--duration)_infinite_linear]"
      />
      {children}
    </div>
  );
}

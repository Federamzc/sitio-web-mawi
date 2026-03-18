import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]",
        className
      )}
    >
      <div className="absolute inset-0 block h-full w-full animate-[gradient_8s_linear_infinite] bg-gradient-to-r from-[#FF4E00]/50 via-[#911ECC]/50 to-[#FF4E00]/50 bg-[length:300%_100%] p-[1px] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] ![mask-composite:subtract]" />
      {children}
    </div>
  );
}
